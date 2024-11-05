import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import {
    acceptPatientNoteUnlockRequest,
} from "../../../../../../api/pages/doctors-requests-dashboard-page";
import {
    removeItemFromTableDataByIdAC,
    setTotalInTableAC
} from "../../../../../../store/reducers/doctorsRequestsDashboard.reducer";
import {useDispatch, useSelector} from "react-redux";

const ApprovePatientNoteUnlockModal = ({requestId, showModal, closeModal}) => {
    const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);
    const {tableParams} = useSelector(state => state.doctorsRequestsDashboard.patientNoteUnlockRequests)
    const dispatch = useDispatch();

    const tableName = 'patientNoteUnlockRequests';
    const modalTitle = 'Approve Patient Note Unlock Request';
    const modalBody = 'You are about to unlock progress note editing. Please confirm.';

    const handleConfirm = () => {
        setIsLoadingConfirm(true);

        acceptPatientNoteUnlockRequest({id: requestId})
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
            <Modal.Body>{modalBody}</Modal.Body>
            <Modal.Footer>
                <div className={'d-flex gap-2'}>
                    <button
                        className="btn btn-large btn-outline-primary"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-large btn-primary"
                        onClick={handleConfirm}
                        disabled={isLoadingConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ApprovePatientNoteUnlockModal