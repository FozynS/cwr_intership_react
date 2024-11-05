import React, {useEffect, useState} from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../../../../../../components/CircleLoader";
import {
    assignProviderToPatient,
} from "../../../../../../api/pages/patient-transfer-dashboard-page";
import {
    addPatientIdToUnassignedPatientsAssignDataLoadingPatients,
    removePatientIdFromUnassignedPatientsAssignDataLoadingPatients,
    setUnassignedPatientsAssignDataPatientId,
    deletePatientFromUnassignedPatientTableData,
} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";
import Select from "react-select";
import classNames from "classnames";
import styles from "./../../../../index.module.scss";
import {selectStyles} from "../../../../selectStyles";

const AssignPatientModal = () => {
    const dispatch = useDispatch();

    const [isLoadingAssign, setIsLoadingAssign] = useState(false);
    const [providerId, setProviderId] = useState(null)
    const [providerIdError, setProviderIdError] = useState('');

    const { unassignedPatients, filtersData } = useSelector(
        state => state.patientTransfersDashboard,
    );

    const { assignData, tableData } = unassignedPatients;

    const { providers } = filtersData.providersData;

    useEffect(() => {
        if (assignData.patientId) {
            localStorage.setItem(
                'currentAssignPatientId',
                assignData.patientId,
            );
            setProviderId(null);
            setProviderIdError('');
            setIsLoadingAssign(false);
        }
    }, [assignData.patientId]);

    const patientData = tableData[tableData.findIndex(item => item.patient_id === assignData.patientId)];

    if (! patientData) {
        return null;
    }

    const providerName = providerId
        ? providers.filter(item => item.id === providerId)[0]?.provider_name
        : '';

    const validate = () => {
        if (! providerId) {
            setProviderIdError('The provider is required');

            return false;

        } else {
            setProviderIdError('');

            return true;
        }
    }

    const handleClose = () => {
        dispatch(setUnassignedPatientsAssignDataPatientId({patientId: null}));
    };

    const handleAssign = () => {
        if (! validate()) {
            return;
        }

        setIsLoadingAssign(true);
        dispatch(addPatientIdToUnassignedPatientsAssignDataLoadingPatients({patientId: assignData.patientId}));

        assignProviderToPatient({patientId: assignData.patientId, providerId})
            .then(() => {
                dispatch(deletePatientFromUnassignedPatientTableData({
                    patientId: assignData.patientId,
                }))

                if (localStorage.getItem('currentAssignPatientId') === patientData.patient_id) {
                    handleClose();
                }
            },
        ).finally(() => {
            setIsLoadingAssign(false);
            dispatch(removePatientIdFromUnassignedPatientsAssignDataLoadingPatients({patientId: assignData.patientId}));
        });
    };

    const providerIdSelectStyles = {
        ...selectStyles,
        control: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.control(baseStyles, state),
            width: "100%",
        }),
    };

    return (
        <Modal
            show={assignData.patientId}
            onHide={handleClose}
            className="custom-modal"
            centered>
            <ModalHeader closeButton>
                <div>Assign patient: {patientData.patient_name}</div>
            </ModalHeader>
            <ModalBody>
                <div className="fs-16">
                    Patient: <b>{patientData.patient_name}</b>
                </div>

                <div
                    className={classNames('form-group', styles.formGroup, providerIdError ? styles.formGroupHasError : '')}>
                    <label htmlFor="assignProviderId" className={classNames('control-label mb-1', styles.formLabel)}>
                        Provider <span className={"text-danger"}>*</span>
                    </label>
                    <Select
                        value={providerId && {value: providerId, label:providerName}}
                        onChange={(selectedOption) => {setProviderId(selectedOption.value)}}
                        options={providers.map((provider) => ({
                            value: provider.id,
                            label: provider.provider_name,
                        }))}
                        className={providerIdError && "has-error"}
                        isSearchable={true}
                        styles={providerIdSelectStyles}
                        id={'assignProviderId'}
                    />
                    {providerIdError &&
                        <div className={styles.formErrors}>
                            {providerIdError}
                        </div>
                    }
                </div>

                <div className="d-flex gap-3 justify-content-end">
                    <button
                        className="btn btn-large btn-outline-primary"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAssign}
                        className="btn btn-large btn-primary d-flex align-items-center justify-content-center gap-1"
                        style={{width: '125px'}}
                        disabled={isLoadingAssign}
                    >
                        {isLoadingAssign ?
                            <CircleLoader
                                color={"#fff"}
                                size={"small"}
                            /> :
                            "Assign"
                        }
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default AssignPatientModal;
