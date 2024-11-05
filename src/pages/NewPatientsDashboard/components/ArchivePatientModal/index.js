import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import BinIcon from "../../../../assets/icons/bin-white.svg";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import { archiveInquiry } from "../../../../api/pages/new-patients-dashboard-page";
import CircleLoader from "../../../../components/CircleLoader";

const ArchivePatientModal = () => {
    const dispatch = useDispatch();

    const { removeCardData, eventBus } = useSelector(
        (state) => state.newPatientsDashboard,
    );

    const [comment, setComment] = useState("");
    const [showHelpText, setShowHelpText] = useState(false);
    const [isLoadingArchive, setIsLoadingArchive] = useState(false);

    const close = () => {
        dispatch(
            NewPatientsDashboardReducer.setRemoveCardDataAC({ data: null }),
        );
        setComment("");
        setShowHelpText(false);
    };

    const archive = () => {
        setIsLoadingArchive(true);

        archiveInquiry({ id: removeCardData.cardId, data: { comment } }).then(
            (res) => {
                dispatch(
                    NewPatientsDashboardReducer.deleteCardAC({
                        laneId: removeCardData.laneId,
                        cardId: removeCardData.cardId,
                    }),
                );
                eventBus.publish({
                    type: "REMOVE_CARD",
                    laneId: removeCardData.laneId,
                    cardId: removeCardData.cardId,
                });

                dispatch(
                    NewPatientsDashboardReducer.setSelectedCardDataAC({
                        data: null,
                    }),
                );

                close();
            },
        ).finally(() => {
            setIsLoadingArchive(false);
        });
    };

    const handleArchiveClick = () => {
        if (comment) {
            archive();
        } else {
            setShowHelpText(true);
        }
    };

    const inputComment = (e) => {
        setComment(e.target.value);
        setShowHelpText(false);
    };

    if (!removeCardData) {
        return <></>;
    }

    return (
        <Modal
            show={removeCardData}
            onHide={close}
            className="custom-modal"
            centered>
            <ModalHeader closeButton>
                <div className="text-danger">Archive inquiry:</div>
                <div className="name">{removeCardData.patientName}</div>
            </ModalHeader>
            <ModalBody>
                <div className="fs-16">
                    Are you sure you want to archive inquiry for: "
                    {removeCardData.patientName}"
                </div>
                <div className="custom-form-group">
                    <label>
                        <div>
                            Enter your comment{" "}
                            <span className={"text-danger"}>*</span>
                        </div>
                    </label>
                    <input
                        placeholder="Add your comment..."
                        className={classNames(
                            "form-control",
                            showHelpText && "is-invalid",
                        )}
                        style={{ backgroundColor: "#fcfcfc" }}
                        autoFocus
                        value={comment}
                        onChange={inputComment}
                    />
                    <div className="invalid-feedback">
                        Comment field is required.
                    </div>
                </div>
                <div className="d-flex gap-3 justify-content-end">
                    <button
                        className="btn btn-large btn-outline-primary"
                        onClick={close}>
                        Cancel
                    </button>
                    <button
                        onClick={handleArchiveClick}
                        className="btn btn-large btn-danger d-flex align-items-center justify-content-center gap-1"
                        style={{width: '125px'}}
                        disabled={isLoadingArchive}
                    >
                        {isLoadingArchive ?
                            <CircleLoader
                                color={"#fff"}
                                size={"small"}
                            /> : <>
                                <img src={BinIcon} alt="bin-icon" />
                                <div>Archive</div>
                            </>
                        }
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ArchivePatientModal;
