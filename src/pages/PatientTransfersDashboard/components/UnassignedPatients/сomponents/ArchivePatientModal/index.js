import React, {useEffect, useState} from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "../../../../../../components/CircleLoader";
import {archivePatientById} from "../../../../../../api/pages/patient-transfer-dashboard-page";
import {
    addPatientIdToUnassignedPatientsArchiveDataLoadingPatients,
    removePatientIdFromUnassignedPatientsArchiveDataLoadingPatients,
    setUnassignedPatientsArchiveDataPatientId,
    deletePatientFromUnassignedPatientTableData,
} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";
import classNames from "classnames";
import styles from "../../../../index.module.scss";

const ArchivePatientModal = () => {
    const dispatch = useDispatch();

    const [isLoadingArchive, setIsLoadingArchive] = useState(false);
    const [comment, setComment] = useState('');
    const [commentError, setCommentError] = useState('');

    const { archiveData, tableData } = useSelector(
        state => state.patientTransfersDashboard.unassignedPatients,
    );

    useEffect(() => {
        if (archiveData.patientId) {
            localStorage.setItem(
                'currentArchivePatientId',
                archiveData.patientId,
            );
            setComment('');
            setCommentError('');
            setIsLoadingArchive(false);
        }
    }, [archiveData.patientId]);

    const patientData = tableData[tableData.findIndex(item => item.patient_id === archiveData.patientId)];

    if (! patientData) {
        return null;
    }

    const handleClose = () => {
        setIsLoadingArchive(false);
        dispatch(setUnassignedPatientsArchiveDataPatientId({patientId: null}));
    };

    const handleArchive = () => {
        if (! comment) {
            setCommentError('The comment is required');

            return;
        } else {
            setCommentError('');
        }

        setIsLoadingArchive(true);
        dispatch(addPatientIdToUnassignedPatientsArchiveDataLoadingPatients({patientId: archiveData.patientId}));

        archivePatientById({
            patientId: archiveData.patientId,
            comment: comment,
        })
            .then(() => {
                dispatch(deletePatientFromUnassignedPatientTableData({
                    patientId: patientData.patient_id,
                }));
                setComment('');
                if (localStorage.getItem('currentArchivePatientId') === patientData.patient_id) {
                    handleClose();
                }
            },
        ).finally(() => {
            setIsLoadingArchive(false);
            dispatch(removePatientIdFromUnassignedPatientsArchiveDataLoadingPatients({patientId: archiveData.patientId}));
        });
    };

    return (
        <Modal
            show={archiveData.patientId}
            onHide={handleClose}
            className="custom-modal"
            centered>
            <ModalHeader closeButton>
                <div className="text-danger">Archive patient: {patientData.patient_name}</div>
            </ModalHeader>
            <ModalBody>
                <div className="fs-16">
                    Are you sure you want to archive this patient?
                </div>

                <div
                    className={classNames('form-group', styles.formGroup, commentError ? styles.formGroupHasError : '')}>
                    <label htmlFor="unassignReason" className={classNames('control-label mb-1', styles.formLabel)}>
                        Comment <span className={"text-danger"}>*</span>
                    </label>
                    <input
                        id={'unassignReason'}
                        className={classNames('form-control', styles.formInput)}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    {commentError &&
                        <div className={styles.formErrors}>
                            {commentError}
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
                        onClick={handleArchive}
                        className="btn btn-large btn-danger d-flex align-items-center justify-content-center gap-1"
                        style={{width: '125px'}}
                        disabled={isLoadingArchive}
                    >
                        {isLoadingArchive ?
                            <CircleLoader
                                color={"#fff"}
                                size={"small"}
                            /> :
                            "Archive"
                        }
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ArchivePatientModal;
