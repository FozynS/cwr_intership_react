import React, {useEffect} from 'react'
import {Modal, Collapse, ModalHeader} from 'react-bootstrap'
import { ChevronDown } from 'react-bootstrap-icons';
import {useState} from "react/index";
import styles from './index.module.scss';
import FormRequestLogsTable from "./components/FormRequestLog/FormRequestLogsTable";
import FormListInput from "../../Inputs/FormListInput";
import classNames from "classnames";
import {getPatientForms} from "../../../api/common/patientForms";
import CircleLoader from "../../CircleLoader";
import moment from "moment";
import MailIcon from "../../../assets/icons/mail-icon.svg";
import PhoneIcon from "../../../assets/icons/phone-icon.svg";
import CaretIcon from "../../../assets/icons/caret-icon.svg";
import ConfirmSendingDocumentRequestModal from "./components/ConfirmSendingDocumentRequestModal";
import {getInquirableFullname} from "../../../utilities/newPatientsCrmUtils";
import { DEFAULT_CANCELLATION_FEE } from "../../../constants";
import _ from 'lodash';

const fieldsToValidate = [
    {
        name: 'co_pay',
        formName: 'payment_for_service',
        required: true,
    },
    {
        name: 'self_pay',
        formName: 'payment_for_service',
        required: true,
    },
    {
        name: 'other_charges',
        formName: 'payment_for_service',
        required: false,
        requiredWith: 'other_charges_price'
    },
    {
        name: 'charge_for_cancellation',
        formName: 'payment_for_service',
        required: true,
    },
    {
        name: 'exchange_with',
        formName: 'confidential_information',
        required: true,
    },
    {
        name: 'supporting_documents',
        formName: 'supporting_documents',
        required: false,
    },
];
const sendFormsMethods = [
    {
        value: 'email',
        label: 'Email',
        icon: MailIcon,
    },
    {
        value: 'phone',
        label: 'Phone',
        icon: PhoneIcon,
    },
];

const PatientFormsModal = ({showModal, closeModal, patient}) => {
    const [patientForms, setPatientForms] = useState({});
    const [isLoadingPatientForms, setIsLoadingPatientForms] = useState(false);
    const [isAllFormsChecked, setIsAllFormsChecked] = useState(false);
    const [initialPatientForms, setInitialPatientForms] = useState(null);
    const [formData, setFormData] = useState({
        payment_for_service: {
            co_pay: '0',
            payment_for_session_not_converted: '0',
            self_pay: '0',
            charge_for_cancellation: '0',
            other_charges_price: '0',
            other_charges: '',
            comment: '',
        },
        confidential_information: {
            exchange_with: [],
        },
        supporting_documents: {
            insurance: true,
            license: true,
            supporting_documents: [],
        },
    });
    const [errors, setErrors] = useState({
        payment_for_service: {
            co_pay: false,
            self_pay: false,
            charge_for_cancellation: false,
            other_charges: false,
        },
        confidential_information: {
            exchange_with: false,
        },
        supporting_documents: {
            supporting_documents: false,
        }
    });
    const [sendFormsMethod, setSendFormsMethod] = useState(null);
    const [showSendFormsDropdown, setShowSendFormsDropdown] = useState(false);
    const [showConfirmSendingDocumentRequestModal, setShowConfirmSendingDocumentRequestModal] = useState(false);

    const formsErrors = {
        payment_for_service: errors.payment_for_service.co_pay || errors.payment_for_service.self_pay || errors.payment_for_service.charge_for_cancellation || errors.payment_for_service.other_charges,
        confidential_information: errors.confidential_information.exchange_with,
        supporting_documents: errors.supporting_documents.supporting_documents,
    };
    const isFormsInvalid = formsErrors.payment_for_service ||
        formsErrors.confidential_information ||
        formsErrors.supporting_documents;

    const selectedFormsData = Object.entries(patientForms)
        .filter(([formName, form]) => form.checked)
        .map(([formName, form]) => {
            let metadata = {};

            if (formName === 'supporting_documents') {
                const documents = [];

                if (formData.supporting_documents.insurance) {
                    documents.push('Insurance');
                }
                if (formData.supporting_documents.license) {
                    documents.push('Driver\'s License');
                }

                metadata.documents = [
                    ...documents,
                    ...formData.supporting_documents.supporting_documents.map(document => document.text),
                ];
            } else if (formName === 'confidential_information') {
                metadata.exchange_with = [
                    ...formData.confidential_information.exchange_with.map(document => document.text)
                ];
            } else {
                metadata = formName in formData ? formData[formName] : {}
            }

            return {
                name: formName,
                title: form.title,
                metadata,
            }
        });

    const fetchPatientForms = () => {
        setIsLoadingPatientForms(true);

        setPatientForms({});

        getPatientForms(patient.id)
            .then((response) => {
                const newFormData = {};

                for (const form of response.data) {
                    newFormData[form.name] = {
                        title: form.title,
                        requests: form.requests,
                        document_type_id: form.document_type_id,
                        is_required: form.is_required,
                        patient_can_skip_form: form.patient_can_skip_form,
                        visible_in_modal: form.visible_in_modal,
                        visible_in_tab: form.visible_in_tab,
                        checked: form.name !== 'credit_card_on_file',
                        isOpened: false,
                    };
                }

                if (patient.primary_insurance) {
                    setFormDataField('confidential_information', 'exchange_with', [{id: 1, text: patient.primary_insurance}])
                }

                const updatedFormData = { ...formData };

                updatedFormData['payment_for_service'] = {
                    co_pay: '0',
                    payment_for_session_not_converted: '0',
                    self_pay: '0',
                    charge_for_cancellation:'0',
                    other_charges_price: '0',
                    other_charges: ''
                };

                if (!patient.is_payment_forbidden) {
                    const { is_self_pay, visit_copay, self_pay, insurance_pay } = patient;

                    updatedFormData['payment_for_service'].co_pay = is_self_pay ? '0' : visit_copay;
                    updatedFormData['payment_for_service'].payment_for_session_not_converted = is_self_pay ? '0' : insurance_pay;
                    updatedFormData['payment_for_service'].self_pay = is_self_pay ? self_pay : '0';
                    updatedFormData['payment_for_service'].charge_for_cancellation = String(DEFAULT_CANCELLATION_FEE);
                }

                setInitialPatientForms(_.cloneDeep(updatedFormData));
                setFormData(updatedFormData);

                setPatientForms(newFormData);
            })
            .finally(() => {
                setIsLoadingPatientForms(false);
            });
    };

    useEffect(() => {
        fetchPatientForms();
    }, []);

    useEffect(() => {
        let value = true;
        let needToValidate = false;

        for (const [formName, form] of Object.entries(patientForms)) {
            if (value && !form.checked) {
                value = false;
            }

            if (!needToValidate && formsErrors[formName]) {
                needToValidate = true;
            }
        }

        if (needToValidate) {
            validate();
        }

        setIsAllFormsChecked(value);
    }, [
        patientForms.payment_for_service?.checked,
        patientForms.confidential_information?.checked,
        patientForms.credit_card_on_file?.checked,
        patientForms.supporting_documents?.checked,
        patientForms.telehealth?.checked,
    ]);

    const validate = () => {
        const newErrors = {
            payment_for_service: {
                co_pay: false,
                self_pay: false,
                charge_for_cancellation: false,
                other_charges: false,
            },
            confidential_information: {
                exchange_with: false,
            },
            supporting_documents: {
                insurance: false,
                license: false,
                supporting_documents: false,
            }
        };

        fieldsToValidate.forEach(field => {
            if (! patientForms[field.formName].checked) {
                return;
            }

            if (field.required && !formData[field.formName][field.name]) {
                newErrors[field.formName][field.name] = true;
            }

            if (field.requiredWith && !formData[field.formName][field.name] &&
                formData[field.formName][field.requiredWith] && formData[field.formName][field.requiredWith] !== '0'
            ) {
                newErrors[field.formName][field.name] = true;
            }

            if (field.name === 'exchange_with' && formData.confidential_information.exchange_with.length === 0) {
                newErrors.confidential_information.exchange_with = true;
            }

            if (field.name === 'supporting_documents') {
                if (! (formData.supporting_documents.insurance ||
                    formData.supporting_documents.license ||
                    formData.supporting_documents.supporting_documents.length > 0)
                ) {
                    newErrors.supporting_documents.supporting_documents = true;
                }
            }
        });

        setErrors(newErrors);

        return ! (newErrors.payment_for_service.co_pay || newErrors.payment_for_service.self_pay || newErrors.payment_for_service.charge_for_cancellation
            || newErrors.payment_for_service.other_charges || newErrors.confidential_information.exchange_with
            || newErrors.supporting_documents.supporting_documents);
    }

    const toggleSelectAllForms = () => {
        const value = ! isAllFormsChecked;

        const newPatientForms = {...patientForms};

        for (const formName of Object.keys(patientForms)) {
            newPatientForms[formName].checked = value;
        }

        setPatientForms(newPatientForms);

        if (isFormsInvalid) {
            validate();
        }
    }

    const setPatientFormsProperty = (formName, property, value) => {
        const newPatientForms = {...patientForms};

        newPatientForms[formName][property] = value;

        setPatientForms(newPatientForms);

        if (formsErrors[formName]) {
            validate();
        }
    };

    const setFormDataField = (formName, field, value) => {
        const newFormData = {...formData};

        newFormData[formName][field] = value;

        setFormData(newFormData);

        if (formName in errors &&
            (errors[formName][field] ||
                (formName === 'supporting_documents' && errors.supporting_documents.supporting_documents)
            )
        ) {
            validate();
        }
    };

    const getFormSentAt = (requests) => {
        return moment(requests[requests.length - 1].sent_at).format('MM/DD/YYYY hh:mm A');
    }

    const handleSendFormClick = (method) => {
        setShowSendFormsDropdown(false);

        if (validate()) {
            setSendFormsMethod(method);
            setShowConfirmSendingDocumentRequestModal(true);
        }
    }

    const handleModalClose = () => {
        setShowSendFormsDropdown(false);
        setShowConfirmSendingDocumentRequestModal(false);
        setFormData(initialPatientForms);
        closeModal();
    };

    return (
        <Modal
            show={showModal}
            onHide={handleModalClose}
            disabled={showConfirmSendingDocumentRequestModal}
            className={classNames('custom-modal', showConfirmSendingDocumentRequestModal && 'faded')}
            dialogClassName={styles.modalDialog}
            centered
        >
            <ModalHeader closeButton>
                <h5 className={'mb-0'}>Send forms to {getInquirableFullname(patient)}</h5>
            </ModalHeader>
            <Modal.Body>
                {isLoadingPatientForms ?
                    <CircleLoader /> :
                    <div className={'mb-2'}>
                        <div className="appointment-documents">
                            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                                <div className={'collapse-document__item-title'}>
                                    <input
                                        id={'selectAllForms'}
                                        type="checkbox"
                                        checked={isAllFormsChecked}
                                        onChange={toggleSelectAllForms}
                                        onClick={e => e.stopPropagation()}
                                    />
                                    <label className="control-label" htmlFor="selectAllForms">
                                        Select all
                                    </label>
                                </div>

                                <div>
                                    {isFormsInvalid &&
                                        <div className={'alert alert-danger mb-0 py-2'}>
                                            Please make sure you have filled all the required fields
                                        </div>
                                    }

                                </div>

                                <div className={classNames('dropdown dropdown-send', showSendFormsDropdown && 'open')}                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-dropdown"
                                        style={{display: 'flex', padding: 0}}
                                        disabled={isFormsInvalid || selectedFormsData.length === 0}
                                        onClick={() => setShowSendFormsDropdown(! showSendFormsDropdown)}
                                        onBlur={() => setShowSendFormsDropdown(false)}
                                    >
                                        <span className="btn__text">
                                            Send to
                                        </span>
                                        <span className="btn__caret">
                                            <img src={CaretIcon}/> 
                                        </span>
                                    </button>

                                    <ul className="dropdown-menu">
                                        {sendFormsMethods.map(item =>
                                            <li className="dropdown-menu__item" key={item.value}>
                                                <a
                                                    href={'#'}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    onClick={() => handleSendFormClick(item.value)}
                                                >
                                            <span className="menu-item__icon">
                                                <img src={item.icon} alt={`send-method-${item.value}`} />
                                            </span>
                                                    {item.label}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className={'collapse-document'}>
                                {Object.entries(patientForms).map(([formName, form]) =>
                                    <div className={classNames('collapse-document__item', formsErrors[formName] ? 'invalid' : '')} key={formName}>
                                        <div className={'el-collapse-item__header'} onClick={() => setPatientFormsProperty(formName, 'isOpened', !form.isOpened)}>
                                            <div className={'collapse-document__item-title'}>
                                                <input
                                                    type="checkbox"
                                                    checked={form.checked}
                                                    onChange={e => setPatientFormsProperty(formName, 'checked', e.target.checked)}
                                                    onClick={e => e.stopPropagation()}
                                                />
                                                {form.title}
                                                {form.requests.length !== 0 && <div className="collapse-document__item-title__date">Sent at: {getFormSentAt(form.requests)}</div>}
                                                <ChevronDown className={'el-collapse-item__arrow' + (form.isOpened ? ' is-active' : '')}/>
                                            </div>
                                        </div>

                                        <Collapse in={form.isOpened} className={'el-collapse-item__content'}>
                                            <form noValidate className={'collapse-document__item-form'}>
                                                {formName === 'payment_for_service' &&
                                                    <div>
                                                        <div className={classNames('form-group d-flex my-3', errors.payment_for_service.co_pay ? 'has-error': '')}>
                                                            <label htmlFor={'coPay'} className="col-sm-5 control-label">
                                                                Co-pay and/or co-insurance for session
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id={'coPay'}
                                                                    className="form-control"
                                                                    value={formData.payment_for_service.co_pay}
                                                                    onChange={(e) => setFormDataField(formName, 'co_pay', e.target.value)}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'form-group d-flex my-3'}>
                                                            <label htmlFor={'forSession'} className="col-sm-5 control-label">
                                                                Payment for session not covered due to deductible
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id={'payment_for_session_not_converted'}
                                                                    className="form-control"
                                                                    value={formData.payment_for_service.payment_for_session_not_converted}
                                                                    onChange={(e) => setFormDataField(formName, 'payment_for_session_not_converted', e.target.value)}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={classNames('form-group d-flex my-3', errors.payment_for_service.self_pay ? 'has-error': '')}>
                                                            <label htmlFor={'selfPay'} className="col-sm-5 control-label">
                                                                Self-pay for session when paid out-of-pocket
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id={'selfPay'}
                                                                    className="form-control"
                                                                    value={formData.payment_for_service.self_pay}
                                                                    onChange={(e) => setFormDataField(formName, 'self_pay', e.target.value)}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={classNames('form-group d-flex my-3', errors.payment_for_service.self_pay ? 'has-error': '')}>
                                                            <label htmlFor={'chargeForCancellation'} className="col-sm-5 control-label">
                                                                Charge for cancellation without 24 hours’ notice
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id="chargeForCancellation"
                                                                    className="form-control"
                                                                    value={formData.payment_for_service.charge_for_cancellation}
                                                                    onChange={(e) => setFormDataField(formName, 'charge_for_cancellation', e.target.value)}
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'form-group d-flex my-3'}>
                                                            <label htmlFor={'otherChargesPrice'} className="col-sm-5 control-label">
                                                                Other charges (price)
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id="otherChargesPrice"
                                                                    className="form-control"
                                                                    value={formData.payment_for_service.other_charges_price}
                                                                    onChange={(e) => setFormDataField(formName, 'other_charges_price', e.target.value)}
                                                                    disabled={!form.checked || patient.is_payment_forbidden}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={classNames('form-group d-flex my-3', errors.payment_for_service.other_charges ? 'has-error': '')}>
                                                            <label htmlFor={'otherCharges'} className="col-sm-5 control-label">
                                                                Other charges (specify)
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id="otherCharges"
                                                                    className="form-control long"
                                                                    value={formData.payment_for_service.other_charges}
                                                                    onChange={(e) => setFormDataField(formName, 'other_charges', e.target.value)}
                                                                    disabled={!form.checked || !formData.payment_for_service.other_charges_price || formData.payment_for_service.other_charges_price === '0' || patient.is_payment_forbidden}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'form-group d-flex my-3'}>
                                                            <label htmlFor={'comment'} className="col-sm-5 control-label">
                                                                Comment
                                                            </label>
                                                            <div className="col-sm-8">
                                                                <input
                                                                    id="comment"
                                                                    className="form-control long"
                                                                    value={formData.payment_for_service.comment}
                                                                    onChange={(e) => setFormDataField(formName, 'comment', e.target.value)}
                                                                    disabled={!form.checked}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    formName === 'confidential_information' &&
                                                    <div className={classNames('form-group d-flex my-3', errors.confidential_information.exchange_with ? 'has-error': '')}>
                                                        <div className="col-sm-8">
                                                            <FormListInput
                                                                listData={formData.confidential_information.exchange_with}
                                                                setListData={(newListData) => setFormDataField(formName, 'exchange_with', newListData)}
                                                                placeholder="Add person"
                                                                disabled={!form.checked}
                                                            />
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    formName === 'supporting_documents' &&
                                                    <div className={classNames('form-group', errors.supporting_documents.supporting_documents ? 'has-error': '')}>
                                                        <div className={'row--flex row-inputs'}>
                                                            <div className="checkbox">
                                                                <input
                                                                    id={'insurance'}
                                                                    type={'checkbox'}
                                                                    checked={formData.supporting_documents.insurance}
                                                                    onChange={(e) => setFormDataField(formName, 'insurance', e.target.checked)}
                                                                    onClick={e => e.stopPropagation()}
                                                                    disabled={!form.checked}
                                                                />
                                                                <label htmlFor={'insurance'} className={'control-label'}>
                                                                    Insurance
                                                                </label>
                                                            </div>
                                                            <div className="checkbox">
                                                                <input
                                                                    id={'license'}
                                                                    type={'checkbox'}
                                                                    checked={formData.supporting_documents.license}
                                                                    onChange={(e) => setFormDataField(formName, 'license', e.target.checked)}
                                                                    onClick={e => e.stopPropagation()}
                                                                    disabled={!form.checked}
                                                                />
                                                                <label htmlFor={'license'} className={'control-label'}>
                                                                    Driver's License
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <FormListInput
                                                            listData={formData.supporting_documents.supporting_documents}
                                                            setListData={(newListData) => setFormDataField(formName, 'supporting_documents', newListData)}
                                                            placeholder="Add document"
                                                            disabled={!form.checked}
                                                        />
                                                    </div>
                                                }

                                                <FormRequestLogsTable
                                                    logs={form.requests}
                                                    patient={patient}
                                                    needTooltip={formName === 'payment_for_service'}
                                                />
                                            </form>
                                        </Collapse>
                                    </div>
                                )}
                            </div>
                        </div>

                        {selectedFormsData.length > 0 &&
                            <ConfirmSendingDocumentRequestModal
                                showModal={showConfirmSendingDocumentRequestModal}
                                closeModal={() => setShowConfirmSendingDocumentRequestModal(false)}
                                patient={patient}
                                selectedFormsData={selectedFormsData}
                                sendFormsMethod={sendFormsMethod}
                                onSuccessfulSend={fetchPatientForms}
                            />
                        }
                    </div>
                }
            </Modal.Body>
        </Modal>
    )
}

export default PatientFormsModal;