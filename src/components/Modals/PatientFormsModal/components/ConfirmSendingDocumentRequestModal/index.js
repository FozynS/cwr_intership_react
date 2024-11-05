import React, {useContext, useEffect, useState} from 'react'
import {Modal, ModalHeader} from 'react-bootstrap'
import styles from './index.module.scss';
import CheckIcon from "../../../../../assets/icons/check-icon.svg";
import classNames from "classnames";
import {sendPatientForms} from "../../../../../api/common/patientForms";
import CircleLoader from "../../../../CircleLoader";
import NotificationsContext from "../../../../../contexts/NotificationsContext";
import InputMask from "react-input-mask";
import {isValidEmail} from "../../../../../utilities/validation";
import {getInquirableFullname} from "../../../../../utilities/newPatientsCrmUtils";

const ConfirmSendingDocumentRequestModal = ({showModal, closeModal, patient, selectedFormsData, sendFormsMethod, onSuccessfulSend}) => {
    const isSendMethodEmail = sendFormsMethod === 'email';
    const isSendMethodPhone = sendFormsMethod === 'phone';

    const getFormattedPhone = (rawPhone) => {
        return rawPhone
            ? '(' + rawPhone.slice(0, 3) + ')-' + rawPhone.slice(3, 7) + '-' + rawPhone.slice(7)
            : '';
    }
    const getRawPhone = (formattedPhone) => {
        return formattedPhone.replace(/[-_()]/g, '');
    };

    const [email, setEmail] = useState(isSendMethodEmail ? patient.email : '');
    const [phone, setPhone] = useState(isSendMethodPhone ? getFormattedPhone(patient.cell_phone) : '');
    const [errors, setErrors] = useState({
        email: '',
        phone: '',
    });
    const [isLoadingSendForms, setIsLoadingSendForms] = useState(false);
    const { enqueueNotification } = useContext(NotificationsContext);

    useEffect(() => {
        if (showModal) {
            if (isSendMethodEmail) {
                setEmail(patient.email);
            }
            if (isSendMethodPhone) {
                setPhone(getFormattedPhone(patient.cell_phone));
            }
        }
    }, [showModal]);

    const handleSave = () => {
        if (validate()) {
            const data = {
                forms: selectedFormsData,
                send_via_email: isSendMethodEmail,
                send_via_sms: isSendMethodPhone,
            }

            if (isSendMethodEmail) {
                data.email = email;
            }
            if (isSendMethodPhone) {
                data.phone = phone;
            }

            setErrors({
                email: '',
                phone: '',
            });

            setIsLoadingSendForms(true);

            sendPatientForms(patient.id, data)
                .then(() => {
                    enqueueNotification("Success", 'Successfully sent request for documents');
                    handleModalClose();
                    onSuccessfulSend();
                })
                .catch(error => {
                    enqueueNotification("Error", 'Something went wrong');
                    console.log(error);
                })
                .finally(() => {
                    setIsLoadingSendForms(false);
                })
        }
    };

    const handleModalClose = () => {
        setEmail('');
        setPhone('');
        setErrors({
            email: '',
            phone: '',
        });
        closeModal();
    }

    const validate = () => {
        const newErrors = {
            email: '',
            phone: '',
        }

        if (isSendMethodEmail) {
            if (!email) {
                newErrors.email = 'Email is required';
            } else if (! isValidEmail(email)) {
                newErrors.email = 'The field must be valid email address';
            }
        }

        if (isSendMethodPhone) {
            if (!phone) {
                newErrors.phone = 'Phone number is required';
            } else if (getRawPhone(phone).length !== 10) {
                newErrors.phone = 'The field must be a valid phone number';
            }
        }

        setErrors(newErrors);

        return ! (newErrors.email || newErrors.phone);
    }

    return (
        <Modal
            show={showModal}
            onHide={handleModalClose}
            className={'custom-modal'}
            dialogClassName={styles.modalDialog}
            centered
        >
            <ModalHeader closeButton>
                <h5 className={'mb-0'}>Request for documents from {getInquirableFullname(patient)}</h5>
            </ModalHeader>
            <Modal.Body className={'d-block py-3'}>
                <p>Are you sure you have selected all required forms and supporting documents to be included in this request for signature?</p>
                <p>Forms and documents selected to be sent:</p>
                <div className={'requested-documents__list'}>
                    {selectedFormsData.map((form, index) =>
                        <div className={'requested-documents__list-item'} key={form.name}>
                            <p>{index + 1}. {form.title}</p>
                            <ul className={styles.unordered}>
                                {form.name === 'confidential_information' && form.metadata.exchange_with.map(item =>
                                    <li key={form.name + '-' + item}>
                                        <img src={CheckIcon} alt="check-icon"/>
                                        <span className={'ms-1'}>{item}</span>
                                    </li>
                                )}
                                {form.name === 'supporting_documents' && form.metadata.documents.map(item =>
                                    <li key={form.name + '-' + item}>
                                        <img src={CheckIcon} alt="check-icon"/>
                                        <span className={'ms-1'}>{item}</span>
                                    </li>
                                )}
                            </ul>

                        </div>
                    )}
                </div>
                {isSendMethodEmail &&
                    <div className={classNames('form-group', styles.formGroup, errors.email ? styles.formGroupHasError : '')}>
                        <label htmlFor="sendFormEmail" className={classNames('control-label mb-1', styles.formLabel)}>
                            Enter the email address:
                        </label>
                        <input
                            id={'sendFormEmail'}
                            className={classNames('form-control', styles.formInput)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email &&
                            <div className={styles.formErrors}>
                                {errors.email}
                            </div>
                        }
                    </div>
                }
                {isSendMethodPhone &&
                    <div className={classNames('form-group', styles.formGroup, errors.phone ? styles.formGroupHasError : '')}>
                        <label htmlFor="sendFormPhone" className={classNames('control-label mb-1', styles.formLabel)}>
                            Enter the phone number:
                        </label>
                        <InputMask
                            id={'sendFormPhone'}
                            className={classNames('form-control', styles.formInput)}
                            mask="(999)-999-9999"
                            alwaysShowMask={true}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {/*<input*/}
                        {/*    id={'sendFormPhone'}*/}
                        {/*    className={classNames('form-control', styles.formInput)}*/}
                        {/*    value={phone}*/}
                        {/*    onChange={(e) => setPhone(e.target.value)}*/}
                        {/*/>*/}
                        {errors.phone &&
                            <div className={styles.formErrors}>
                                {errors.phone}
                            </div>
                        }
                    </div>
                }
            </Modal.Body>
            <Modal.Footer className={'py-2'} style={{borderTop: '1px solid #dee2e6'}}>
                <button
                    className="btn btn-large btn-primary d-flex justify-content-center align-items-center"
                    onClick={handleSave}
                    disabled={isLoadingSendForms}
                    style={{ width: "100px" }}
                >
                    {isLoadingSendForms ?
                        <CircleLoader
                            color={"#fff"}
                            size={"small"}
                        /> :
                        'Send'
                    }
                </button>
                <button
                    className="btn btn-large btn-outline-primary ms-3"
                    onClick={handleModalClose}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmSendingDocumentRequestModal;