import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../../../../../../components/CircleLoader";
import {
    addAssignedPatientsTransferDataLoadingPatientsAC,
    removePatientIdFromAssignedPatientsTransferDataLoadingPatientsAC,
    deletePatientFromAssignedPatientsTableDataAC,
    setAssignedPatientsTransferDataPatientIdAC,
} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";
import classNames from "classnames";
import styles from "./../../../../index.module.scss";
import {
    transferPatient,
} from "../../../../../../api/pages/patient-transfer-dashboard-page";
import Select from "react-select";
import {selectStyles} from "../../../../selectStyles";
import UnassignPatientInfo from "../UnassignPatientInfo";
import UnassignPatientHelpText from "../UnassignPatientHelpText";
import UnassignPatientAlert from "../UnassignPatientAlert";

const TransferPatientModal = () => {
    const dispatch = useDispatch();

    const [isLoadingUnassign, setIsLoadingUnassign] = useState(false);
    const [reason, setReason] = useState('');
    const [newProviderId, setNewProviderId] = useState('');
    const [errors, setErrors] = useState({
        reason: '',
        newProviderId: '',
    });

    const {
        userData,
        assignedPatients,
        filtersData,
    } = useSelector(state => state.patientTransfersDashboard);

    const {
        transferData,
        tableData,
        filters,
    } = assignedPatients;

    const { providers } = filtersData.providersData;

    useEffect(() => {
        if (transferData.patientId) {
            localStorage.setItem(
                'currentTransferPatientId',
                transferData.patientId,
            );
            setReason('');
            setNewProviderId(null);
            setErrors({
                reason: '',
                newProviderId: '',
            });
            setIsLoadingUnassign(false);
        }
    }, [transferData.patientId]);

    const patientData = tableData[tableData.findIndex(item => item.patient_id === transferData.patientId)];

    if (! patientData) {
        return null;
    }

    const newProviderName = newProviderId
        ? providers.filter(item => item.id === newProviderId)[0]?.provider_name
        : '';

    const oldProvider = filters.provider;
    const supervisor = patientData.patient_has_providers.filter(item => item.supervisee_id === oldProvider.id)[0];
    const otherProviders = patientData.patient_has_providers
        .filter(item => item.providers_id !== oldProvider.id && ! item.chart_read_only);
    const hasDraftsAndProgressNotes = patientData.drafts_count && patientData.missing_notes_count;
    const canUnassignProvider = userData.isOnlyAdmin || ! hasDraftsAndProgressNotes;
    const validate = () => {
        let hasError = false;

        const newErrors = {...errors};

        if (! reason) {
            newErrors.reason = 'Reason of unassignment is required';
            hasError = true;
        }
        if (! newProviderId) {
            newErrors.newProviderId = 'New provider is required';
            hasError = true;
        }

        setErrors(newErrors);

        return ! hasError;
    }

    const handleClose = () => {
        dispatch(setAssignedPatientsTransferDataPatientIdAC({patientId: null}));
    };

    const handleUnassign = () => {
        if (! canUnassignProvider || ! validate()) {
            return;
        }

        setIsLoadingUnassign(true);
        dispatch(addAssignedPatientsTransferDataLoadingPatientsAC({patientId: patientData.patient_id}));

        transferPatient({
            patientId: patientData.patient_id,
            oldProviderId: oldProvider.id,
            newProviderId,
            reason,
        })
            .then(() => {
                dispatch(deletePatientFromAssignedPatientsTableDataAC({patientId: patientData.patient_id}));
                if (localStorage.getItem('currentTransferPatientId') === patientData.patient_id.toString()) {
                    handleClose();
                }
            })
            .finally(() => {
                setIsLoadingUnassign(false);
                dispatch(removePatientIdFromAssignedPatientsTransferDataLoadingPatientsAC({patientId: patientData.patient_id}));
            });
    };

    const newProviderIdSelectStyles = {
        ...selectStyles,
        control: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.control(baseStyles, state),
            width: "100%",
        }),
    };

    return (
        <Modal
            show={oldProvider.id}
            onHide={handleClose}
            className={'custom-modal'}
            centered
        >
            <ModalHeader closeButton>
                <div>Transfer patient</div>
            </ModalHeader>
            <ModalBody style={{gap: '24px', paddingBottom: '20px'}}>
                {hasDraftsAndProgressNotes
                    ? <UnassignPatientAlert patientData={patientData}/>
                    : null
                }

                <UnassignPatientInfo
                    patientData={patientData}
                    provider={oldProvider}
                    supervisor={supervisor}
                    otherProviders={otherProviders}
                />

                <div>
                    <div
                        className={classNames('form-group', styles.formGroup, errors.newProviderId ? styles.formGroupHasError : '')}
                    >
                        <label htmlFor="assignProviderId" className={classNames('control-label mb-1', styles.formLabel)}>
                            Provider <span className={"text-danger"}>*</span>
                        </label>
                        <Select
                            value={newProviderId && {value: newProviderId, label:newProviderName}}
                            onChange={(selectedOption) => {setNewProviderId(selectedOption.value)}}
                            options={providers.map((provider) => ({
                                value: provider.id,
                                label: provider.provider_name,
                            }))}
                            className={errors.newProviderId && "has-error"}
                            isSearchable={true}
                            styles={newProviderIdSelectStyles}
                            id={'assignProviderId'}
                        />
                        {errors.newProviderId &&
                            <div className={styles.formErrors}>
                                {errors.newProviderId}
                            </div>
                        }
                    </div>

                    <div
                        className={classNames('form-group mt-2', styles.formGroup, errors.reason ? styles.formGroupHasError : '')}
                    >
                        <label htmlFor="unassignReason" className={classNames('control-label mb-1', styles.formLabel)}>
                            Reason <span className={"text-danger"}>*</span>
                        </label>
                        <input
                            id={'unassignReason'}
                            className={classNames('form-control', styles.formInput)}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        {errors.reason &&
                            <div className={styles.formErrors}>
                                {errors.reason}
                            </div>
                        }
                    </div>
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
                            "Transfer"
                        }
                    </button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default TransferPatientModal;
