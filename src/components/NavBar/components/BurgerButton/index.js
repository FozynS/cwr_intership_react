import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import "./index.scss";
import { Navbar } from "react-bootstrap";

const BurgerButton = ({ click, on, setRef }) => {
    const ref = useRef();

    useEffect(() => {
        setRef(ref);
    }, []);
    return (
        <div onClick={click} className="burger-button" ref={ref}>
            <Navbar.Toggle
                className="shadow-none"
                aria-controls="basic-navbar-nav">
                <div className={classNames("burger-icon", on && "show")}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </Navbar.Toggle>
        </div>
    );
};

export default BurgerButton;
