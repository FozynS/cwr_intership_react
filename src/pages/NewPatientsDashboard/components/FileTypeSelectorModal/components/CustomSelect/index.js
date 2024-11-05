import React, { useRef, useState } from "react";
import CustomOption from "../CustomOption";
import styles from "./index.module.scss";
import classNames from "classnames";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import { useOnClickOutside } from "usehooks-ts";

const CustomSelect = ({ options, selectedOption, onSelect }) => {
    const optionsRef = useRef(null);

    const [showOptions, setShowOptions] = useState(false);

    useOnClickOutside(optionsRef, (e) => {
        if (!optionsRef.current || !optionsRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    });

    const toggleOptions = (e) => {
        e.stopPropagation();
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (value) => {
        setShowOptions(false);
        onSelect(value);
    };

    return (
        <div className="position-relative">
            <div
                className={classNames(
                    styles.selectInput,
                    showOptions && styles.isFocused,
                )}
                onClick={toggleOptions}>
                <div>{selectedOption}</div>
                <Icon
                    className={styles.arrow}
                    path={showOptions ? mdiMenuUp : mdiMenuDown}
                    size={1}
                />
            </div>
            {showOptions && (
                <div ref={optionsRef} className={styles.options}>
                    {options.map((option) => (
                        <CustomOption
                            key={option.id}
                            option={option}
                            onSelect={handleOptionClick}
                            level={1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
