import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import classNames from "classnames";
import { Overlay, Tooltip } from "react-bootstrap";

const TooltipIcon = ({ path, size, tooltipText, className, onClick }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const targetRef = useRef(null);

    return (
        <div>
            <Overlay show={showTooltip} target={targetRef} placement="bottom">
                <Tooltip id="tooltip">{tooltipText}</Tooltip>
            </Overlay>

            <Icon
                path={path}
                size={size}
                className={classNames(className, "cursor-pointer")}
                ref={targetRef}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={onClick}
            />
        </div>
    );
};

export default TooltipIcon;
