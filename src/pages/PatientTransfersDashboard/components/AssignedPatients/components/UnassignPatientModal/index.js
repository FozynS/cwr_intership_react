import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../../../../../../components/CircleLoader";
import {
    addAssignedPatientsUnassignDataLoadingPatientsAC,
    removePatientIdFromAssignedPatientsUnassignDataLoadingPatientsAC,
    deletePatientFromAssignedPatientsTableDataAC,
    setAssignedPatientsUnassignDataPatientIdAC,
    setUnassignedPatientsIsLoadingAC,
    setUnassignedPatientsTableDataAC,
} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";
import classNames from "classnames";
import styles from "./../../../../index.module.scss";
import {
    getPatientTransfers,
    unassignProviderFromPatient
} from "../../../../../../api/pages/patient-transfer-dashboard-page";
import UnassignPatientInfo from "../UnassignPatientInfo";
import UnassignPatientHelpText from "../UnassignPatientHelpText";
import UnassignPatientAlert from "../UnassignPatientAlert";

const UnassignPatientModal = () => {
    const dispatch = useDispatch();

    const [isLoadingUnassign, setIsLoadingUnassign] = useState(false);
    const [reason, setReason] = useState('');
    const [unassignAllProviders, setUnassignAllProviders] = useState(false);
    const [reasonError, setReasonError] = useState('');

    const {
        userData,
        assignedPatients,
    } = useSelector(state => state.patientTransfersDashboard);

    const {
        unassignData,
        tableData,
        filters,
    } = assignedPatients;

    useEffect(() => {
        if (unassignData.patientId) {
            localStorage.setItem(
                'currentUnassignPatientId',
                unassignData.patientId,
            );
            setReason('');
            setUnassignAllProviders(false);
            setReasonError('');
            setIsLoadingUnassign(false);
        }
    }, [unassignData.patientId]);

    const patientData = tableData[tableData.findIndex(item => item.patient_id === unassignData.patientId)];

    if (! patientData) {
        return null;
    }

    const provider = filters.provider;
    const supervisor = patientData.patient_has_providers.filter(item => item.supervisee_id === provider.id)[0];
    const otherProviders = patientData.patient_has_providers
        .filter(item => item.providers_id !== provider.id && ! item.chart_read_only);
    const hasDraftsAndProgressNotes = patientData.drafts_count && patientData.missing_notes_count;
    const canUnassignProvider = userData.isOnlyAdmin || ! hasDraftsAndProgressNotes;

    const fetchPatientTransfers = () => {
        dispatch(setUnassignedPatientsIsLoadingAC({value: true}));

        getPatientTransfers()
            .then((response) => {
                dispatch(setUnassignedPatientsTableDataAC({
                    data: response.data.data,
                }));
            })
            .finally(() => {
                dispatch(setUnassignedPatientsIsLoadingAC({value: false}));
            });
    }

    const handleClose = () => {
        dispatch(setAssignedPatientsUnassignDataPatientIdAC({patientId: null}));
    };

    const handleUnassign = () => {
        if (! canUnassignProvider) {
            return;
        }

        if (! reason) {
            setReasonError('Reason of unassignment is required');

            return;
        } else {
            setReasonError('');
        }

        setIsLoadingUnassign(true);
        dispatch(addAssignedPatientsUnassignDataLoadingPatientsAC({patientId: patientData.patient_id}));

        unassignProviderFromPatient({
            patientId: patientData.patient_id,
            providerId: provider.id,
            reason,
            unassignAllProviders
        })
            .then(() => {
                dispatch(deletePatientFromAssignedPatientsTableDataAC({patientId: patientData.patient_id}));
                fetchPatientTransfers();
                if (localStorage.getItem('currentUnassignPatientId') === patientData.patient_id.toString()) {
                    handleClose();
                }
            })
            .finally(() => {
                setIsLoadingUnassign(false);
                dispatch(removePatientIdFromAssignedPatientsUnassignDataLoadingPatientsAC({patientId: patientData.patient_id}));
            });
    };

    return (
        <Modal
            show={provider.id}
            onHide={handleClose}
            className={'custom-modal'}
            centered
        >
            <ModalHeader closeButton>
                <div>Unassign patient</div>
            </ModalHeader>
            <ModalBody style={{gap: '24px', paddingBottom: '20px'}}>
                {hasDraftsAndProgressNotes
                    ? <UnassignPatientAlert patientData={patientData}/>
                    : null
                }

                <UnassignPatientInfo
                    patientData={patientData}
                    provider={provider}
                    supervisor={supervisor}
                    otherProviders={otherProviders}
                />

                <div>
                    <div
                        className={classNames('form-group', styles.formGroup, reasonError ? styles.formGroupHasError : '')}>
                        <label htmlFor="unassignReason" className={classNames('control-label mb-1', styles.formLabel)}>
                            Reason <span className={"text-danger"}>*</span>
                        </label>
                        <input
                            id={'unassignReason'}
                            className={classNames('form-control', styles.formInput)}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        {reasonError &&
                            <div className={styles.formErrors}>
                                {reasonError}
                            </div>
                        }
                    </div>

                    {otherProviders.length !== 0 &&
                        <div className={classNames('form-check mt-3', styles.formCheck)}>
                            <input
                                type="checkbox"
                                id="unassign-all-providers"
                                className={classNames('form-check-input', styles.formCheckInput)}
                                checked={unassignAllProviders}
                                onChange={(event) => setUnassignAllProviders(event.target.checked)}
                            />
                            <label
                                htmlFor="unassign-all-providers"
                                className={styles.formCheckLabel}
                            >
                                Unassign all providers from this patient
                            </label>
                        </div>
                    }
                </div>

                <UnassignPatientHelpText patientData={patientData} supervisor={supervisor}/>
            </ModalBody>
            <ModalFooter>
                <div className="d-flex gap-3 justify-content-end">
                    <button
                        className="btn btn-large btn-outline-primary"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUnassign}
                        className="btn btn-large btn-primary d-flex align-items-center justify-content-center gap-1"
                        style={{width: '125px'}}
                        disabled={isLoadingUnassign || ! canUnassignProvider}
                    >
                        {isLoadingUnassign ?
                            <CircleLoader
                                color={"#fff"}
                                size={"small"}
                            /> :
                            "Unassign"
                        }
                    </button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default UnassignPatientModal;
