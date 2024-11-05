import classNames from "classnames";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import styles from "./index.module.scss";

const TabMate = ({
    defaultActiveKey,
    id,
    className,
    tabs,
    tabStyles,
    onSelect,
}) => {
    const [activeKey, setActiveKey] = React.useState(defaultActiveKey);
    const handleSelect = (key) => {
        setActiveKey(key);

        if (onSelect) {
            onSelect(key);
        }
    };

    const getTitle = (numberOfRecords, title, active) => {
        return (
            <div
                className={classNames(
                    "d-flex flex-column align-items-center justify-content-center",
                    active && styles.active,
                    styles.title,
                )}>
                <div
                    className={classNames(
                        "fw-bold",
                        active ? "text-white" : "text-primary",
                    )}
                    style={{ marginBottom: "2px" }}>
                    {numberOfRecords}
                </div>
                <div
                    className={classNames(styles.text, active && "text-white")}>
                    {title}
                </div>
            </div>
        );
    };

    return (
        <Tab.Container id={id} activeKey={activeKey} onSelect={handleSelect}>
            <div className={styles.tabsContainer}>
                <Col className={classNames(styles.tabs, "p-0")}>
                    <Nav
                        fill
                        variant="tabs"
                        style={{ flexWrap: "nowrap", border: "none" }}>
                        {tabs.map((tab, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    className={styles.tab}
                                    style={{ border: "none" }}
                                    eventKey={tab.eventKey}>
                                    {getTitle(
                                        tab.numberOfRecords,
                                        tab.title,
                                        activeKey === tab.eventKey,
                                    )}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
            </div>
            <Row className="flex-grow-1">
                <Col>
                    <Tab.Content>
                        {tabs.map((tab, index) => (
                            <Tab.Pane key={index} eventKey={tab.eventKey}>
                                <div id={tab.id}></div>
                                <div style={tabStyles}>{tab.component}</div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default TabMate;
