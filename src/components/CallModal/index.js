import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRingCentralPatientCallDetails, patientRingOutCall, patientLogExternalRingOutCall } from '../../api/common/ringCentral';
import { setCallLogAC } from '../../store/reducers/app.reducer';
import { getFormattedDateTime } from '../../mixins/date-format';
import { getUsFormat } from '../../mixins/phone-format';
import PhoneInput from '../Inputs/PhoneInput';
import { APPOINTMENT_SCHEDULED_LANE_ID, INITIAL_APPOINTMENT_COMPLETE_LANE_ID, FOUR_APPOINTMENTS_COMPLETE_LANE_ID } from '../../constants/new-patients-dashboard';

const initialCallData = { phoneFrom: '', customFrom: '', phoneTo: '', playPrompt: true };

const CallModal = ({ patientId, patientType, showModal, closeModal, openCallResultModal }) => {
    const dispatch = useDispatch();

    const { ringCentralNumbers } = useSelector(state => state.app);
    const { lanes, callModalData } = useSelector(state => state.newPatientsDashboard);

    const [patient, setPatient] = React.useState(null);
    const [callData, setCallData] = React.useState(initialCallData);
    const [errors, setErrors] = React.useState({});
    const [submitDisabled, setSubmitDisabled] = React.useState(false);

    const setInitialData = () => {
        setPatient(null);
        setCallData(initialCallData);
        setErrors({});
        setSubmitDisabled(false);
    };

    const getPhoneTo = () => {
        if (!patient) {
            return '';
        }

        const currentInquiry = getCurrentInquiry();
        if (
            currentInquiry &&
            currentInquiry.stageId === APPOINTMENT_SCHEDULED_LANE_ID &&
            patient.onboarding_phone
        ) {
            return patient.onboarding_phone;
        }

        return patient.cell_phone || patient.home_phone || patient.work_phone;
    };

    const getCurrentInquiry = () => {
        let inquiry = null;

        if (!callModalData) {
            return null;
        }

        lanes.forEach((lane) => {
            lane.cards.forEach((card) => {
                const isPatientCreated =
                    callModalData.patientType === "patient";

                if (
                    card.inquirable.id === callModalData.patientId &&
                    card.isPatientCreated === isPatientCreated
                ) {
                    inquiry = card;
                }
            });
        });

        return inquiry;
    };

    React.useEffect(() => {
        if (showModal) {
            getRingCentralPatientCallDetails(patientId, patientType)
                .then(({ data }) => {
                    setPatient(data);
                })
                .catch((err) => {
                    setPatient(null);
                    console.log(err);
                });
        } else {
            setInitialData();
        }
    }, [showModal]);

    React.useEffect(() => {
        const phoneTo = getPhoneTo();
        setCallData({ ...callData, phoneTo: phoneTo.replace(/\D+/g, '') });
    }, [patient]);

    React.useEffect(() => {
        if (callData.phoneFrom) {
            setErrors(err => {
                let errors = { ...err };
                delete errors.phoneFrom;
                return errors;
            });
        }
        if (callData.customFrom) {
            setErrors(err => {
                let errors = { ...err };
                delete errors.customFrom;
                return errors;
            });
        }
        if (callData.phoneTo) {
            setErrors(err => {
                let errors = { ...err };
                delete errors.phoneTo;
                return errors;
            });
        }
    }, [callData]);

    const call = async () => {
        try {
            setSubmitDisabled(true);
            
            const currentInquiry = getCurrentInquiry();
            const onlyForAdmin = !!currentInquiry 
                && (currentInquiry.stageId === INITIAL_APPOINTMENT_COMPLETE_LANE_ID || currentInquiry.stageId === FOUR_APPOINTMENTS_COMPLETE_LANE_ID);
            
            let errors = {};

            let payload = {
                patient_id: patientId,
                patient_type: patientType,
                phone_from: callData.phoneFrom,
                phone_to: callData.phoneTo,
                play_prompt: callData.playPrompt,
                only_for_admin: onlyForAdmin,
            };

            if (callData.phoneFrom === 'custom_number') {
                if (callData.customFrom) {
                    payload.phone_from = callData.customFrom;
                } else {
                    errors = { ...errors, customFrom: 'Custom number is required' };
                }
            } else if (!callData.phoneFrom) {
                errors = { ...errors, phoneFrom: 'Phone from field is required' };
            }
            if (!callData.phoneTo) {
                errors = { ...errors, phoneTo: 'Phone to field is required' };
            }

            if (Object.keys(errors).length > 0) {
                setErrors(errors);
                setSubmitDisabled(false);
                return;
            }

            const response = await patientRingOutCall(payload);
            const callLog = {...response.data.call_log, phone_to: callData.phoneTo};

            if (!callLog) {
                return;
            }

            dispatch(setCallLogAC({ callLog }));

            closeModal();
            setTimeout(() => {
                openCallResultModal();
            }, 500);
        } catch (err) {
            console.log(err);
        }
    }

    const logExternalCall = async () => {
        try {
            setSubmitDisabled(true);

            const currentInquiry = getCurrentInquiry();
            const onlyForAdmin = !!currentInquiry 
                && (currentInquiry.stageId === INITIAL_APPOINTMENT_COMPLETE_LANE_ID || currentInquiry.stageId === FOUR_APPOINTMENTS_COMPLETE_LANE_ID);

            let errors = {};

            let payload = {
                patient_id: patientId,
                patient_type: patientType,
                phone_from: callData.phoneFrom,
                phone_to: callData.phoneTo,
                play_prompt: callData.playPrompt,
                only_for_admin: onlyForAdmin,
            };

            if (callData.phoneFrom === 'custom_number') {
                if (callData.customFrom) {
                    payload.phone_from = callData.customFrom;
                } else {
                    errors = { ...errors, customFrom: 'Custom number is required' };
                }
            } else if (!callData.phoneFrom) {
                errors = { ...errors, phoneFrom: 'Phone from field is required' };
            } 
            if (!callData.phoneTo) {
                errors = { ...errors, phoneTo: 'Phone from field is required' };
            }

            if (Object.keys(errors).length > 0) {
                setErrors(errors);
                setSubmitDisabled(false);
                return;
            }

            makeExternalCall(getUsFormat(callData.phoneTo));

            const response = await patientLogExternalRingOutCall(payload);
            const callLog = {...response.data.call_log, phone_to: callData.phoneTo};

            if (!callLog) {
                return;
            }

            dispatch(setCallLogAC({ callLog }));

            closeModal();
            setTimeout(() => {
                openCallResultModal();
            }, 500);
        } catch (err) {
            console.log(err);
        }
    }

    const makeExternalCall = (phone) => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = `tel:${phone}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    return (
        <Modal show={showModal} size="lg" className="custom-modal" backdrop="true" onHide={closeModal} centered>
            <Modal.Header closeButton>
                {patient
                    ? <h4 className='modal-title m-0'>Call Patient - {patient.first_name} {patient.last_name}</h4>
                    : <h4 className='modal-title m-0'>Call Patient</h4>}
            </Modal.Header>

            <Modal.Body>
                {patient
                    ? <div>
                        <div className='d-flex flex-column gap-1'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-grow-1" style={{ marginRight: '12px' }}>
                                            <div className="d-flex">
                                                <div className="flex-grow-1" style={{ marginRight: '12px' }}>
                                                    <div className="form-group custom-form-group mb-3">
                                                        <label>From:</label>
                                                        <select
                                                            id="caller_number"
                                                            name="From Number"
                                                            defaultValue={callData.phoneFrom}
                                                            className={`form-select ${errors.phoneFrom ? 'is-invalid' : ''}`}
                                                            onChange={(e) => setCallData({ ...callData, phoneFrom: e.target.value })}
                                                        >
                                                            <option value="" disabled>Select number</option>
                                                            {ringCentralNumbers.map((number, index) => <option key={index} value={number.phoneNumber}> {getUsFormat(number.phoneNumber)} </option>)}
                                                            <option value="custom_number">Custom number</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            {errors.phoneFrom}
                                                        </div>
                                                    </div>

                                                    {callData.phoneFrom === 'custom_number' && <div className="form-group custom-form-group mb-3">
                                                        <PhoneInput
                                                            phone={callData.customFrom}
                                                            setPhone={(value) => setCallData({ ...callData, customFrom: value.replace(/\D+/g, '') })}
                                                            error={!!errors.customFrom}
                                                            alwaysShowMask={true}
                                                        />
                                                        <div className="invalid-feedback">
                                                            {errors.customFrom}
                                                        </div>
                                                    </div>}
                                                </div>

                                                <div className="form-group custom-form-group flex-grow-1">
                                                    <label>To:</label>
                                                    <PhoneInput
                                                        phone={callData.phoneTo}
                                                        setPhone={(value) => setCallData({ ...callData, phoneTo: value.replace(/\D+/g, '') })}
                                                        error={!!errors.phoneTo}
                                                        alwaysShowMask={true}
                                                    />
                                                    <div className="invalid-feedback">
                                                        {errors.phoneTo}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group custom-form-group">
                                                <div className="checkbox prompt-checkbox">
                                                    <label htmlFor="prompt_call" className='d-flex gap-2' style={{ width: 'fit-content' }}>
                                                        <input
                                                            type="checkbox"
                                                            id="prompt_call"
                                                            defaultChecked={callData.playPrompt}
                                                            onChange={(e) => setCallData({ ...callData, playPrompt: e.target.checked })}
                                                        />
                                                        <span>Prompt me to press 1 before connecting the call</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex" style={{ paddingTop: '24px' }}>
                                            <button
                                                disabled={submitDisabled}
                                                className="btn btn-primary btn-large text-white"
                                                style={{ marginRight: '12px' }}
                                                onClick={call}
                                            >
                                                Call via EHR
                                            </button>
                                            <button
                                                disabled={submitDisabled}
                                                className="btn btn-primary btn-large text-white"
                                                onClick={logExternalCall}
                                            >
                                                Call via RC App
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        
                        <h5>Call Logs</h5>
                        <table className="table table-striped table-call-log m-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Called by</th>
                                    <th className="col-xs-6">Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patient.ringcentral_call_logs.length > 0
                                    ? patient.ringcentral_call_logs.map((log, index) => <tr key={index}>
                                        <td>{getFormattedDateTime(log.created_at)}</td>
                                        <td>{log.call_status_title}</td>
                                        <td>
                                            <p>
                                                {log.user?.meta.firstname} {log.user?.meta.lastname}
                                            </p>
                                        </td>
                                        <td>{log.comment}</td>
                                    </tr>)
                                    : <tr>
                                        <td colSpan="4" className="text-center p-4 h6">
                                            No data
                                        </td>
                                    </tr>}
                            </tbody>
                        </table>
                    </div>

                    : <div className="p-1 d-flex align-items-center justify-content-center" style={{ height: '230px' }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
            </Modal.Body>

            <Modal.Footer>
                <button className="btn btn-large btn-outline-primary" onClick={closeModal}>Cancel</button>
            </Modal.Footer>
        </Modal>
    )
}

export default CallModal;