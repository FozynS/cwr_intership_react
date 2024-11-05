import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import classNames from "classnames";
import Icon from "@mdi/react";
import { getDiagnoses } from "../../../../../../api/pages/new-patients-dashboard-page";
import { setDiagnosesAC } from "../../../../../../store/reducers/newPatientsDashboard.reducer";
import styles from "./index.module.scss";

const DiagnosesSelect = ({ formData, setFormData }) => {
    const dispatch = useDispatch();

    const titleRef = useRef(null);
    const optionsRef = useRef(null);

    const { diagnoses } = useSelector((state) => state.newPatientsDashboard);

    const [showOptions, setShowOptions] = useState(false);
    const [searchDiagnosesText, setSearchDiagnosesText] = useState("");

    const handleOptionChange = (e, diagnose) => {
        if (e.target.checked) {
            const newDiagnoses = [...formData.diagnoses, diagnose];
            setFormData({ ...formData, diagnoses: newDiagnoses });
        } else {
            const newDiagnoses = formData.diagnoses.filter(
                (item) => item.id !== diagnose.id,
            );
            setFormData({ ...formData, diagnoses: newDiagnoses });
        }
    };

    useEffect(() => {
        if (searchDiagnosesText) {
            getDiagnoses({ query: searchDiagnosesText }).then((res) =>
                dispatch(setDiagnosesAC({ data: res.data.diagnoses })),
            );
            setShowOptions(true);
        }
    }, [searchDiagnosesText]);

    useOnClickOutside(optionsRef, (e) => {
        if (!titleRef.current || !titleRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    });

    const handleTitleClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className={styles.diagnosesSelect}>
            <div
                ref={titleRef}
                className={classNames(
                    styles.header,
                    showOptions && styles.showOptions,
                )}
                onClick={handleTitleClick}>
                {formData.diagnoses.map((diagnose) => (
                    <div className={styles.diagnose}>{diagnose.full_name}</div>
                ))}
                <div className={styles.inputSelect}>
                    <input
                        value={searchDiagnosesText}
                        onChange={(e) => setSearchDiagnosesText(e.target.value)}
                        className="form-control"
                    />
                    <Icon
                        className={styles.arrow}
                        path={showOptions ? mdiMenuUp : mdiMenuDown}
                        size={1}
                    />
                </div>
            </div>
            {showOptions && (
                <div ref={optionsRef} className={styles.options}>
                    {diagnoses.length ? (
                        diagnoses.map((diagnose) => (
                            <div className={styles.option} key={diagnose.id}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={diagnose}
                                    id={`option-${diagnose.id}`}
                                    checked={formData.diagnoses.some(
                                        (selectedDiagnose) =>
                                            selectedDiagnose.id === diagnose.id,
                                    )}
                                    onChange={(e) =>
                                        handleOptionChange(e, diagnose)
                                    }
                                />
                                <label htmlFor={`option-${diagnose.id}`}>
                                    {diagnose.full_name}
                                </label>
                            </div>
                        ))
                    ) : (
                        <div className={classNames(styles.noData, "p-2")}>
                            No data
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DiagnosesSelect;
