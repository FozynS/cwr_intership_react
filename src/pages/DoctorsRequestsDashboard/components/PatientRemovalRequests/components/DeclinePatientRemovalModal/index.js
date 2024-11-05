import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import {
    declinePatientRemovalRequest,
} from "../../../../../../api/pages/doctors-requests-dashboard-page";
import {
    removeItemFromTableDataByIdAC,
    setTotalInTableAC
} from "../../../../../../store/reducers/doctorsRequestsDashboard.reducer";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import styles from "../../../../index.module.scss";

const DeclinePatientRemovalModal = ({requestId, showModal, closeModal}) => {
    const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
    const [reason, setReason] = useState('');
    const [reasonError, setReasonError] = useState('');
    const {tableParams} = useSelector(state => state.doctorsRequestsDashboard.patientNoteUnlockRequests)
    const dispatch = useDispatch();

    const tableName = 'patientRemovalRequests';
    const modalTitle = 'Decline Patient Removal Request';
    const modalBody = 'You are about to decline patient removal request. Please confirm.';

    const handleConfirm = () => {
        if (! reason) {
            setReasonError('The reason is required');

            return;
        } else {
            setReasonError('');
        }

        setIsLoadingConfirm(true);

        declinePatientRemovalRequest({id: requestId, reason})
            .then(() => {
                dispatch(removeItemFromTableDataByIdAC({tableName, id: requestId}));
                dispatch(setTotalInTableAC({tableName, value: tableParams.total - 1}));

                setIsLoadingConfirm(false);
                closeModal();
            })
    }

    return (
        <Modal
            show={showModal}
            onHide={closeModal}
            className={"custom-modal"}
            centered
        >
            <Modal.Header closeButton>
                <div>{modalTitle}</div>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {modalBody}
                </div>
                <div
                    className={classNames('form-group', styles.formGroup, reasonError ? styles.formGroupHasError : '')}>
                    <label htmlFor="unassignReason" className={classNames('control-label mb-1', styles.formLabel)}>
                        Comment:
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
            </Modal.Body>
            <Modal.Footer>
                <div className={'d-flex gap-2'}>
                    <button
                        className="btn btn-large btn-outline-primary"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-large btn-danger"
                        onClick={handleConfirm}
                        disabled={isLoadingConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default DeclinePatientRemovalModal;