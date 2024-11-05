import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const SourceTag = ({ source, size = "small" }) => {
    return (
        <div
            className={classNames(
                "badge bg-primary d-flex align-items-center",
                styles.sourceTag,
                size === "lg" && styles.sourceTageLarge,
            )}>
            {source.name}
        </div>
    );
};

export default SourceTag;
