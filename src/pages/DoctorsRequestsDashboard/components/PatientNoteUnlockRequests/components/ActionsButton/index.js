import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import { useOnClickOutside } from "usehooks-ts";
import styles from "./../../../../index.module.scss";
import ApprovePatientNoteUnlockModal from "../ApprovePatientNoteUnlockModal";
import DeclinePatientNoteUnlockModal from "../DeclinePatientNoteUnlockModal";

const ActionsButton = ({ requestId }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showApprovePatientNoteUnlockModal, setShowApprovePatientNoteUnlockModal] = useState(false);
    const [showDeclinePatientNoteUnlockModal, setShowDeclinePatientNoteUnlockModal] = useState(false);

    const dotsRef = useRef(null);
    const menuRef = useRef(null);

    useOnClickOutside(menuRef, (e) => {
        if (!dotsRef.current || !dotsRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    });

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleApproveClick = () => {
        setShowApprovePatientNoteUnlockModal(true);
    };

    const handleDeclineClick = () => {
        setShowDeclinePatientNoteUnlockModal(true);
    };

    const handleCloseApprovePatientNoteUnlockModal = () => {
        setShowApprovePatientNoteUnlockModal(false);
    };

    const handleCloseDeclinePatientNoteUnlockModal = () => {
        setShowDeclinePatientNoteUnlockModal(false);
    };

    return (
        <div>
            <div className={styles.actionsButton} onClick={toggleMenu}>
                <div ref={dotsRef}>
                    <Icon path={mdiDotsVertical} size={1} />
                </div>
                {showMenu && (
                    <div ref={menuRef} className={styles.menuDialog}>
                        <div
                            className={styles.menuItem}
                            onClick={handleApproveClick}
                        >
                            Approve
                        </div>
                        <div
                            className={styles.menuItem}
                            onClick={handleDeclineClick}
                        >
                            Decline
                        </div>
                    </div>
                )}
            </div>

            <ApprovePatientNoteUnlockModal
                requestId={requestId}
                showModal={showApprovePatientNoteUnlockModal}
                closeModal={handleCloseApprovePatientNoteUnlockModal}
            />
            <DeclinePatientNoteUnlockModal
                requestId={requestId}
                showModal={showDeclinePatientNoteUnlockModal}
                closeModal={handleCloseDeclinePatientNoteUnlockModal}
            />
        </div>
    );
};

export default ActionsButton;
