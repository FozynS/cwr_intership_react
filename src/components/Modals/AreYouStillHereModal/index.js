import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { LOGOUT_TIMEOUT_IF_MODAL_OPEN, STILL_HERE_MODAL_TIMEOUT } from '../../../constants';
import { debounce } from 'throttle-debounce';

const AreYouStillHereModal = () => {
    const showModalTimeout = STILL_HERE_MODAL_TIMEOUT;
    let showModalTimeoutId = null;

    const logoutTimeout = LOGOUT_TIMEOUT_IF_MODAL_OPEN;
    let logoutTimeoutId = null;

    // used to open/close a modal window
    const [modalHasShownState, setModalHasShownState] = useState(false);

    // used to check if the modal window is open in the resetTimer method
    let modalHasShown = false;

    const show_modal_timeout_ms = showModalTimeout * 1000;
    const show_modal_timeout_mins = Math.round(showModalTimeout / 60);
    const logout_timeout_ms = logoutTimeout * 1000;

    const storageEventListener = (event) => {
        if (event.key === 'are_you_still_modal_has_shown' && !JSON.parse(event.newValue)) {
            closeModal();
            resetTimer();
        }
    };

    useEffect(() => {
        setupTimers();

        localStorage.setItem('are_you_still_modal_has_shown', false.toString());

        window.addEventListener('storage', storageEventListener);

        return () => {
            window.removeEventListener('storage', storageEventListener);
        };
    }, []);

    const debounceResetTimerOnServer = debounce(30 * 1000, function () {
        axios.post('/empty-request');
    });

    const startTimer = () => {
        showModalTimeoutId = setTimeout(handleShowModalTimeout, show_modal_timeout_ms)
    };

    const resetTimer = () => {
        if (!modalHasShown) {
            localStorage.setItem('are_you_still_modal_has_shown', false.toString());

            clearTimeout(showModalTimeoutId);

            if (logoutTimeoutId) {
                clearTimeout(logoutTimeoutId);
            }

            startTimer();
            debounceResetTimerOnServer();
        }
    }

    const setupTimers = () => {
        document.addEventListener("keypress", resetTimer);
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("mousedown", resetTimer);
        document.addEventListener("touchmove", resetTimer);

        startTimer();
    };

    const handleShowModalTimeout = () => {
        localStorage.setItem('are_you_still_modal_has_shown', true.toString());
        setModalHasShownState(true);
        modalHasShown = true;
        logoutTimeoutId = setTimeout(handleLogoutTimeout, logout_timeout_ms);
    };

    const handleLogoutTimeout = () => {
        document.getElementById('logout-form').submit();
    };

    const handleYesButtonClick = () => {
        axios.post('/empty-request');
        closeModal();
        resetTimer();
        localStorage.setItem('are_you_still_modal_has_shown', false.toString());
    };

    const closeModal = () => {
        setModalHasShownState(false);
        modalHasShown = false;
    };

    return (
        <Modal show={modalHasShownState} centered style={{ zIndex: 9999 }}>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 style={{ fontSize: '18px' }} className="m-0">
                        Are you still here?
                    </h4>
                </div>
                <div className="modal-body">
                    No activity for {show_modal_timeout_mins} minutes. Are you still here?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary text-white" onClick={handleYesButtonClick}>
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default AreYouStillHereModal;
