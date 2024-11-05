import React, { useContext, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import classNames from "classnames";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { getSelectStyles } from "../../../../../../utilities/react-select-styles";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import {
    changeReauthorizationRequestFormStage
} from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import {
    APPROVAL_RECEIVED_STAGE_ID,
    AUTH_UPDATED_STAGE_ID,
} from "../../../../../../constants/reauthorization-request-dashboard";

import * as ReauthorizationRequestsDashboardReducer from "../../../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import CommentModal from "../CommentModal";
import HelpIcon from "../../../../../../components/HelpIcon";
import ApprovalReceivedStageModal from "../ApprovalReceivedStageModal";
import styles from "./index.module.scss";
import AuthUpdatedStageModal from "../AuthUpdatedStageModal";
import {getStageChangeHistory} from "../../../../../../utilities/reauthorizationRequestsDashboardUtils";

const StageSelect = ({ requestForm }) => {
    const dispatch = useDispatch();

    const { tableData, tableParams, stages, selectedStages } = useSelector(
        (state) =>
            state.reauthorizationRequestsDashboard
                .submittedReauthorizationRequestForms,
    );

    const [showCommentModal, setShowCommentModal] = useState(false);
    const [showApprovalReceivedStageModal, setShowApprovalReceivedStageModal] =
        useState(false);
    const [showAuthUpdatedStageModal, setShowAuthUpdatedStageModal] =
        useState(false);
    const [selectedStageId, setSelectedStageId] = useState(null);

    const tableName = "submittedReauthorizationRequestForms";

    const { enqueueNotification } = useContext(NotificationsContext);

    const getCurrentStageValue = () => {
        const currentStage = stages.find(
            (stage) => stage.id === requestForm.stage,
        );

        return { value: currentStage.id, label: currentStage.name };
    };

    const calculateLastPage = (total) => {
        return Math.max(1, Math.ceil(total / tableParams.per_page));
    };

    const updateTableData = (newData) => {
        dispatch(
            ReauthorizationRequestsDashboardReducer.setDataInTableAC({
                tableName,
                value: newData,
            }),
        );

        if (newData.length !== tableParams.total) {
            dispatch(
                ReauthorizationRequestsDashboardReducer.setTotalInTableAC({
                    tableName,
                    value: newData.length,
                }),
            );
        }

        const lastPage = calculateLastPage(newData.length);

        if (lastPage !== tableParams.last_page) {
            dispatch(
                ReauthorizationRequestsDashboardReducer.setLastPageInTableAC({
                    tableName,
                    value: lastPage,
                }),
            );
        }
    };

    const handleSaveCommentClick = async (comment) => {
        return await setStage(selectedStageId, comment);
    };

    const handleChangeStageToApprovalReceived = async (
        authNumberData,
        comment,
    ) => {
        const newData = tableData
            .filter((el) => {
                if (el.id === requestForm.id && selectedStages.length > 0) {
                    return selectedStages.some(
                        (stage) => stage.value === APPROVAL_RECEIVED_STAGE_ID,
                    );
                }
                return true;
            })
            .map((el) => {
                if (el.id === requestForm.id) {
                    return {
                        ...el,
                        stage: APPROVAL_RECEIVED_STAGE_ID,
                        stage_changed_on: moment().format("MM/DD/YYYY"),
                        future_auth_number_data: authNumberData,
                        stage_comment: comment,
                    };
                }
                return el;
            });

        await setStage(APPROVAL_RECEIVED_STAGE_ID, comment);

        updateTableData(newData);
    };

    const handleChangeStageToAuthUpdated = async (authNumberData) => {
        const newData = tableData
            .filter((el) => {
                if (el.id === requestForm.id && selectedStages.length > 0) {
                    return selectedStages.some(
                        (stage) => stage.value === APPROVAL_RECEIVED_STAGE_ID,
                    );
                }
                return true;
            })
            .map((el) => {
                if (el.id === requestForm.id) {
                    return {
                        ...el,
                        stage: AUTH_UPDATED_STAGE_ID,
                        stage_changed_on: moment().format("MM/DD/YYYY"),
                        auth_number_data: {
                            ...el.auth_number_data,
                            insurance_authorization_number:
                                authNumberData.auth_number,
                            insurance_visits_auth: authNumberData.visits_auth,
                            insurance_visits_auth_left:
                                authNumberData.visits_auth,
                            insurance_eff_start_date:
                                authNumberData.eff_start_date,
                            insurance_eff_stop_date:
                                authNumberData.eff_stop_date,
                        },
                        stage_comment: '',
                    };
                }
                return el;
            });

        await setStage(AUTH_UPDATED_STAGE_ID);

        updateTableData(newData);
    };

    const setStage = async (stageId, comment = null) => {
        const response = await changeReauthorizationRequestFormStage(requestForm.id, {
            stage_id: stageId,
            comment,
        });

        const newRequestForm = response.data;

        const newData = tableData
            .filter((el) => {
                if (el.id === requestForm.id && selectedStages.length > 0) {
                    return selectedStages.some(
                        (stage) => stage.value === stageId,
                    );
                }
                return true;
            })
            .map((el) => {
                if (el.id === requestForm.id) {
                    return {
                        ...el,
                        stage: stageId,
                        stage_changed_on: moment().format("MM/DD/YYYY"),
                        stage_comment: comment,
                        stage_change_history: getStageChangeHistory(newRequestForm),
                    };
                }
                return el;
            });

        setSelectedStageId(null);

        updateTableData(newData);
        enqueueNotification("Success", "Stage successfully changed");
    };

    const setStageHandle = (stageId) => {
        setSelectedStageId(stageId);

        if (stageId === APPROVAL_RECEIVED_STAGE_ID) {
            return setShowApprovalReceivedStageModal(true);
        }

        if (stageId === AUTH_UPDATED_STAGE_ID) {
            return setShowAuthUpdatedStageModal(true);
        }

        return setShowCommentModal(true);
    };

    const selectStyles = getSelectStyles({
        backgroundColor: "rgb(243, 246, 249)",
        fontSize: "12px",
    });
    const customSelectStyles = {
        ...selectStyles,
        container: (baseStyles) => ({
            ...baseStyles,
            position: "static",
            height: "24px",
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            ...selectStyles.menu,
            height: "24px",
            minHeight: "1px",
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            ...selectStyles.menu,
            top: "",
            width: "140px",
            transform: "translateY(-4px)",
        }),
        menuList: (baseStyles) => ({
            ...baseStyles,
            overflow: "visible",
            maxHeight: "fit-content",
        }),
        indicatorsContainer: (baseStyles) => ({
            ...baseStyles,
            height: "100%",
        }),
        indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            height: "14px",
            margin: "4px 0",
        }),
    };

    const getHelpIconWithTooltip = () => {
        if (requestForm.stage === APPROVAL_RECEIVED_STAGE_ID) {
            let authNumber = "N/A";
            let visitsAuth = "N/A";
            let effStartDate = "N/A";
            let effStopDate = "N/A";

            if (requestForm.future_auth_number_data) {
                authNumber =
                    requestForm.future_auth_number_data.auth_number || "N/A";
                visitsAuth =
                    requestForm.future_auth_number_data.visits_auth || "N/A";
                effStartDate = requestForm.future_auth_number_data
                    .eff_start_date
                    ? moment(
                          requestForm.future_auth_number_data.eff_start_date,
                      ).format("MM/DD/YYYY")
                    : "N/A";
                effStopDate = requestForm.future_auth_number_data.eff_stop_date
                    ? moment(
                          requestForm.future_auth_number_data.eff_stop_date,
                      ).format("MM/DD/YYYY")
                    : "N/A";
            }

            return (
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip style={{ maxWidth: "300px" }}>
                            <div>
                                <div className="d-flex gap-1 align-items-center">
                                    <span className={styles.tooltipFieldName}>
                                        Comment:
                                    </span>
                                    <span>{requestForm.stage_comment}</span>
                                </div>

                                <hr className="m-0 mb-1 mt-1" />

                                <div className="d-flex gap-1 align-items-center">
                                    <span className={styles.tooltipFieldName}>
                                        Authorization Number:
                                    </span>
                                    <span>{authNumber}</span>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <span className={styles.tooltipFieldName}>
                                        Visits Auth:
                                    </span>
                                    <span>{visitsAuth}</span>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <span className={styles.tooltipFieldName}>
                                        Eff. Start Date:
                                    </span>
                                    <span>{effStartDate}</span>
                                </div>
                                <div className="d-flex gap-1 align-items-center">
                                    <span className={styles.tooltipFieldName}>
                                        Eff. Stop Date:
                                    </span>
                                    <span>{effStopDate}</span>
                                </div>
                            </div>
                        </Tooltip>
                    }>
                    <div>
                        <HelpIcon />
                    </div>
                </OverlayTrigger>
            );
        }

        if (requestForm.stage_comment) {
            return (
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip>
                            <div>{requestForm.stage_comment}</div>
                        </Tooltip>
                    }>
                    <div>
                        <HelpIcon />
                    </div>
                </OverlayTrigger>
            );
        }

        return <></>;
    };

    const isAlmostOverdue = () => {
        if (!requestForm.auth_number_data) {
            return false;
        }

        const {
            insurance_authorization_number,
            insurance_visits_auth_left,
            insurance_eff_stop_date,
            reauthorization_notification_days_count,
            reauthorization_notification_visits_count,
        } = requestForm.auth_number_data;

        if (
            !insurance_authorization_number ||
            !insurance_visits_auth_left ||
            !insurance_eff_stop_date
        ) {
            return false;
        }

        const daysDiff = moment(insurance_eff_stop_date, "YYYY-MM-DD").diff(
            moment(),
            "days",
        );

        if (daysDiff <= 0 || insurance_visits_auth_left <= 0) {
            return false;
        }

        return (
            daysDiff <= reauthorization_notification_days_count ||
            insurance_visits_auth_left <=
                reauthorization_notification_visits_count
        );
    };

    const isOverdue = () => {
        if (!requestForm.auth_number_data) {
            return true;
        }

        const {
            insurance_authorization_number,
            insurance_visits_auth_left,
            insurance_eff_stop_date,
        } = requestForm.auth_number_data;
        if (
            !insurance_authorization_number ||
            !insurance_visits_auth_left ||
            !insurance_eff_stop_date
        ) {
            return true;
        }

        const daysDiff = moment(insurance_eff_stop_date, "YYYY-MM-DD").diff(
            moment(),
            "days",
        );

        return daysDiff <= 0 || insurance_visits_auth_left <= 0;
    };

    const stageIsDisabled = (stageId) => {
        if (requestForm.stage === stageId) {
            return true;
        }

        if (stageId === AUTH_UPDATED_STAGE_ID) {
            return !isOverdue() && !isAlmostOverdue();
        }

        return false;
    };

    const closeCommentModal = () => {
        setShowCommentModal(false);
        setSelectedStageId(null);
    }

    const stageValue = getCurrentStageValue();

    return (
        <div className="d-flex align-items-center gap-1">
            <Select
                value={stageValue}
                onChange={(selectedOption) =>
                    setStageHandle(selectedOption.value)
                }
                options={stages.map((item) => ({
                    value: item.id,
                    label: item.name,
                    isDisabled: stageIsDisabled(item.id),
                }))}
                isSearchable={false}
                styles={customSelectStyles}
                className={classNames(styles.stageSelect, "w-100")}
            />
            <div>{getHelpIconWithTooltip()}</div>

            <ApprovalReceivedStageModal
                parentCallback={handleChangeStageToApprovalReceived}
                show={showApprovalReceivedStageModal}
                closeModal={() => setShowApprovalReceivedStageModal(false)}
                requestForm={requestForm}
            />

            <AuthUpdatedStageModal
                parentCallback={handleChangeStageToAuthUpdated}
                show={showAuthUpdatedStageModal}
                closeModal={() => setShowAuthUpdatedStageModal(false)}
                requestForm={requestForm}
            />

            <CommentModal
                handleClick={handleSaveCommentClick}
                show={showCommentModal}
                closeModal={() => closeCommentModal()}
                requestForm={requestForm}
                newStageId={selectedStageId}
            />
        </div>
    );
};

export default StageSelect;
