import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import PhoneIcon from '../../../../assets/icons/telephone-fill.svg';

import CallModal from '../../../../components/CallModal';
import CallResultModal from '../../../../components/CallResultModal';

const CallButtonWithModals = ({ patientId, disabled }) => {
    const [showCallModal, setShowCallModal] = React.useState(false);
    const [showCallResultModal, setShowCallResultModal] = React.useState(false);

    const handleShowModal = () => {
        if (showCallModal) {
            return;
        }

        setShowCallModal(true);
    };

    const handleCloseCallModal = () => {
        setShowCallModal(false);
    };

    const handleShowCallResultModal = () => {
        if (showCallResultModal) {
            return;
        }

        setShowCallResultModal(true);
    };

    const handleCloseCallResultModal = () => {
        setShowCallResultModal(false);
    };

    return (
        <div>
            <button
                type="button"
                className={classNames('callButton', styles.callButton, 'badge', 'd-flex', 'gap-1', 'align-items-center')}
                disabled={disabled}
                onClick={handleShowModal}
            >
                <img src={PhoneIcon} alt="phone_icon" />
                <span>Call</span>
            </button>

            <CallModal
                patientId={patientId}
                patientType={'patient'}
                showModal={showCallModal}
                closeModal={handleCloseCallModal}
                openCallResultModal={handleShowCallResultModal}
            />
            <CallResultModal
                showModal={showCallResultModal}
                closeModal={handleCloseCallResultModal}
            />
        </div>
    )
}

export default CallButtonWithModals;