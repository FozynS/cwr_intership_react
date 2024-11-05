import React, { forwardRef, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { ReactComponent as ArrowLeft } from "../../../../assets/icons/arrow-left.svg";
import { ReactComponent as IconPlus } from "../../../../assets/icons/plus.svg";
import { ReactComponent as InputClearIcon } from "../../../../assets/icons/clear-circle.svg";

import styles from "./index.module.scss";

import { colorCondition } from "../../../../utilities/patientStatusColor";
import { useNavigate } from "react-router-dom";

const AssigneeForm = ({
    handlePatientSearch,
    handlePatientChoice,
    attachButtonHandler,
    row,
    disabled,
}) => {
    const navigate = useNavigate();

    const Toggle = forwardRef(({ onClick }, ref) => (
        <button
            className={
                "d-flex align-items-center text-white btn btn-primary me-2"
            }
            disabled={disabled}
            ref={ref}
            onClick={(event) => {
                event.preventDefault();
                onClick(event);
            }}>
            <span className={"me-2"}>Assign to patient</span>
            <IconPlus />
        </button>
    ));

    const DropDownMenu = forwardRef(({ children, style, className }, ref) => {
        const [attachStage, setAttachStage] = useState(1);
        const [patientsList, setPatientsList] = useState([]);

        const [faxPatient, setFaxPatient] = useState([]);
        const [faxComment, setFaxComment] = useState("");
        const [faxName, setFaxName] = useState("");
        const [faxStatus, setFaxStatus] = useState(true);

        const searchInputRef = useRef();

        return (
            <>
                <div
                    ref={ref}
                    style={style}
                    className={`${className} ${styles.formWrapper}`}
                    onClick={(event) => event.stopPropagation()}>
                    <div
                        className={
                            attachStage === 1 ? `visible` : "visually-hidden"
                        }
                        style={{ width: "200px" }}>
                        <div className={styles.title}>
                            Search by patient:
                        </div>

                        <div className={styles.patientSearch}>
                            <input
                                autoFocus
                                type="text"
                                ref={searchInputRef}
                                className={styles.input}
                                placeholder="Start typing name"
                                onInput={(event) =>
                                    handlePatientSearch(
                                        event.target.value,
                                        setPatientsList,
                                    )
                                }
                            />

                            {searchInputRef.current?.value && (
                                <InputClearIcon
                                    className={styles.patientSearchClear}
                                    onClick={() => {
                                        handlePatientSearch(
                                            "",
                                            setPatientsList,
                                        );
                                        searchInputRef.current.value = "";
                                    }}
                                />
                            )}
                        </div>

                        <ul className={styles.list}>
                            {patientsList.map((item, index) => {
                                if (item.patient_status) {
                                    return (
                                        <li
                                            key={index}
                                            className={colorCondition(
                                                item.patient_status,
                                            )}
                                            onClick={(event) =>
                                                handlePatientChoice(
                                                    event,
                                                    item,
                                                    setFaxPatient,
                                                    setAttachStage,
                                                )
                                            }>
                                            {item.patient}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            key={index}
                                            onClick={(event) =>
                                                handlePatientChoice(
                                                    event,
                                                    item,
                                                    setFaxPatient,
                                                    setAttachStage,
                                                )
                                            }>
                                            {item.patient} (Not Created)
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>

                    <div
                        className={
                            attachStage === 2
                                ? `${styles.stepTwo} visible`
                                : "visually-hidden"
                        }
                        style={{ width: "367px" }}>
                        <div
                            role="button"
                            className={styles.buttonBack}
                            onClick={() => setAttachStage(1)}>
                            <div className={"d-flex me-2 flex-shrink-0"}>
                                <ArrowLeft />
                            </div>
                            <div className={"d-flex"}>
                                <small>Back to search</small>
                            </div>
                        </div>

                        <div className={styles.patient}>
                            <small>Assign Fax to patient:</small>
                            <small
                                className={`flex-shrink-0 ms-2 ${colorCondition(
                                    faxPatient.patient_status,
                                )}`}>
                                {faxPatient.patient}
                            </small>
                        </div>

                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className={styles.textareaBox}>
                                <textarea
                                    rows={3}
                                    required={true}
                                    value={faxComment}
                                    className={styles.textarea}
                                    placeholder="Add comment which will be added to patient’s chart*"
                                    onChange={(event) =>
                                        setFaxComment(event.target.value)
                                    }
                                />

                                <input
                                    type={"text"}
                                    checked={faxStatus}
                                    id={"set-fax-name"}
                                    placeholder="Set fax name"
                                    className={`${styles.textarea} mb-1`}
                                    onChange={(event) =>
                                        setFaxName(event.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.checkbox}>
                                <input
                                    id={"make-private"}
                                    type={"checkbox"}
                                    checked={faxStatus}
                                    onChange={(event) =>
                                        setFaxStatus(event.target.checked)
                                    }
                                />

                                <div className={"d-grid m-0 ms-2"}>
                                    <label
                                        htmlFor={"make-private"}
                                        className={"m-0"}>
                                        Make private
                                    </label>
                                    <span>
                                        (visible for Admin and Secretary only)
                                    </span>
                                </div>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white"
                                    onClick={() =>
                                        attachButtonHandler(
                                            row,
                                            faxPatient,
                                            faxName,
                                            faxStatus,
                                            faxComment,
                                        )
                                    }>
                                    Assign to {faxPatient.patient}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    });

    return (
        <Dropdown>
            <Dropdown.Toggle as={Toggle} />
            <Dropdown.Menu
                as={DropDownMenu}
                align={"end"}
                renderOnMount={true}
            />
        </Dropdown>
    );
};

export default AssigneeForm;
