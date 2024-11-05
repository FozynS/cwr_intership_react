import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import { useOnClickOutside } from "usehooks-ts";
import styles from "./../../../../index.module.scss";
import ApprovePatientRemovalModal from "../ApprovePatientRemovalModal";
import DeclinePatientRemovalModal from "../DeclinePatientRemovalModal";

const ActionsButton = ({ requestId }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showApprovePatientRemovalModal, setShowApprovePatientRemovalModal] = useState(false);
    const [showDeclinePatientRemovalModal, setShowDeclinePatientRemovalModal] = useState(false);

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
        setShowApprovePatientRemovalModal(true);
    };

    const handleDeclineClick = () => {
        setShowDeclinePatientRemovalModal(true);
    };

    const handleCloseApprovePatientRemovalModal = () => {
        setShowApprovePatientRemovalModal(false);
    };

    const handleCloseDeclinePatientRemovalModal = () => {
        setShowDeclinePatientRemovalModal(false);
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

            <ApprovePatientRemovalModal
                requestId={requestId}
                showModal={showApprovePatientRemovalModal}
                closeModal={handleCloseApprovePatientRemovalModal}
            />
            <DeclinePatientRemovalModal
                requestId={requestId}
                showModal={showDeclinePatientRemovalModal}
                closeModal={handleCloseDeclinePatientRemovalModal}
            />
        </div>
    );
};

export default ActionsButton;
