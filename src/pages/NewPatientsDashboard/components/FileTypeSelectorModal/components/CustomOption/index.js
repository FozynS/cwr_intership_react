import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const CustomOption = ({ option, onSelect, level }) => {
    const handleClick = () => {
        if (option.options) {
            return;
        }
        onSelect(option.value);
    };

    const optionStyle = {
        paddingLeft: `${level * 7}px`,
    };

    const isGroupTitle = !!option.options;

    return (
        <div className={styles.optionComponent}>
            <div
                onClick={handleClick}
                className={classNames(
                    isGroupTitle ? styles.groupTitle : styles.option,
                )}
                style={optionStyle}>
                {option.label}
            </div>
            {option.options && (
                <div className="nested-options">
                    {option.options.map((childOption, index) => (
                        <CustomOption
                            key={index}
                            option={childOption}
                            onSelect={onSelect}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomOption;
