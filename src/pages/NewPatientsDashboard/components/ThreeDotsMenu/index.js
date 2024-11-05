import React, { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import DotsVerticalIcon from "../../../../assets/icons/dots-vertical.svg";
import styles from "./index.module.scss";

const ThreeDotsMenu = ({ onAction, text, disabled = false }) => {
    const [showMenu, setShowMenu] = useState(false);
    const dotsRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleAction = (e, action) => {
        e.stopPropagation();
        setShowMenu(false);
        if (onAction) {
            onAction(action);
        }
    };

    useOnClickOutside(menuRef, (e) => {
        if (!dotsRef.current || !dotsRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    });

    return (
        <div className="position-relative">
            <div ref={dotsRef} className={styles.dotsIcon} onClick={toggleMenu}>
                <img src={DotsVerticalIcon} alt="dots-icon" />
            </div>
            {showMenu && (
                <button
                    ref={menuRef}
                    className={styles.menuDialog}
                    disabled={disabled}
                    onClick={handleAction}>
                    {text}
                </button>
            )}
        </div>
    );
};

export default ThreeDotsMenu;
