import { mdiStar, mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./index.module.scss";

const StarRating = ({
    value,
    fieldName,
    handleStarClick = () => {},
    readOnly = false,
}) => {
    const [hoveredIndexService, setHoveredIndexService] = useState(-1);

    const handleStarHoverService = (index) => {
        setHoveredIndexService(index);
    };

    const getPath = (index) => {
        if (readOnly) {
            return index < value ? mdiStar : mdiStarOutline;
        }
        return index <= hoveredIndexService || index < value
            ? mdiStar
            : mdiStarOutline;
    };

    const handleMouseEnter = (index) => {
        if (readOnly) {
            return;
        }

        handleStarHoverService(index);
    };

    const handleMouseLeave = () => {
        if (readOnly) {
            return;
        }

        setHoveredIndexService(-1);
    };

    const getClassName = (index) => {
        if (readOnly) {
            return "";
        }
        return classNames(
            styles.star,
            index <= hoveredIndexService && styles.starHover,
        );
    };

    return (
        <div className="d-flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
                <Icon
                    key={index}
                    path={getPath(index)}
                    size={0.9}
                    onClick={() => handleStarClick(index, fieldName)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={getClassName(index)}
                />
            ))}
        </div>
    );
};

export default StarRating;
