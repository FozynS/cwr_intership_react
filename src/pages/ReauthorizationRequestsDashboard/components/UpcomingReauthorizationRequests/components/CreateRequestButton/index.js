import React, { useContext, useState } from "react";
import { createReauthorizationRequestForm } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import _ from "lodash";
import {
    setCurrentPageInTableAC,
    setDataInTableAC,
    setLastPageInTableAC,
    setTotalInTableAC,
} from "../../../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import classNames from "classnames";
import styles from "./index.module.scss";
import CircleLoader from "../../../../../../components/CircleLoader";

const CreateRequestButton = ({ patientId }) => {
    const dispatch = useDispatch();

    const { app, reauthorizationRequestsDashboard } = useSelector(
        (state) => state,
    );

    const [isLoading, setIsLoading] = useState(false);

    const { enqueueNotification } = useContext(NotificationsContext);

    const getInsuranceAuthorizationNumberData = (patient) => {
        if (!patient.insurance_plan) {
            return null;
        }

        return {
            insurance_requires_verification: patient.insurance_plan.is_verification_required,
            insurance_authorization_number: patient.auth_number,
            insurance_visits_auth: patient.visits_auth,
            insurance_visits_auth_left: patient.visits_auth_left,
            insurance_eff_start_date: patient.eff_start_date,
            insurance_eff_stop_date: patient.eff_stop_date,
            reauthorization_notification_visits_count:
                patient.insurance_plan.reauthorization_notification_visits_count,
            reauthorization_notification_days_count:
                patient.insurance_plan.reauthorization_notification_days_count,
        };
    };

    const calculateLastPage = (total) => {
        return Math.max(
            1,
            Math.ceil(
                total /
                    reauthorizationRequestsDashboard
                        .submittedReauthorizationRequestForms.tableParams
                        .per_page,
            ),
        );
    };

    const updateUpcomingReauthorizationRequestsTableData = () => {
        const tableName = "upcomingReauthorizationRequests";

        const { tableData } =
            reauthorizationRequestsDashboard.upcomingReauthorizationRequests;

        const newTableData = tableData.map((row) => {
            if (row.patient_id === patientId) {
                return { ...row, can_create_reauthorization_form: false };
            }

            return row;
        });

        dispatch(setDataInTableAC({ tableName, value: newTableData }));
    };

    const updateSubmittedReauthorizationRequestFormsTableData = (
        newRequest,
    ) => {
        const tableName = "submittedReauthorizationRequestForms";
        const user = app.user;
        const patient = newRequest.patient;
        const { tableData, tableParams } = reauthorizationRequestsDashboard.submittedReauthorizationRequestForms;
        const newTableData = _.cloneDeep(tableData);

        const newReauthorizationRequestForm = {
            id: newRequest.id,
            patient_id: patient.id,
            patient_name: `${patient.first_name} ${patient.last_name}`,
            insurance: patient.primary_insurance || patient.secondary_insurance || "-",
            patient_status: patient.status,
            logs:  [],
            document: null,
            auth_number_data: getInsuranceAuthorizationNumberData(patient),
            submitted_by: `${user.firstname} ${user.lastname}`,
            submitted_at: moment(newRequest.created_at).format("MM/DD/YYYY"),
            send_method: "-",
            sent_at: "-",
            stage: newRequest.stage_id,
            stage_changed_on: newRequest.stage_changed_at
                ? moment(newRequest.stage_changed_at).format("MM/DD/YYYY")
                : "-",
            stage_comment: newRequest.comment,
        };

        newTableData.unshift(newReauthorizationRequestForm);

        dispatch(setCurrentPageInTableAC({ tableName, value: 1 }));
        dispatch(setDataInTableAC({ tableName, value: newTableData }));
        dispatch(setTotalInTableAC({ tableName, value: newTableData.length }));

        const lastPage = calculateLastPage(newTableData.length);

        if (lastPage !== tableParams.last_page) {
            dispatch(setLastPageInTableAC({ tableName, value: lastPage }));
        }
    };

    const handleClick = () => {
        setIsLoading(true);

        const payload = {
            patient_id: patientId,
        };
        createReauthorizationRequestForm(payload)
            .then(({ data }) => {
                updateUpcomingReauthorizationRequestsTableData();
                updateSubmittedReauthorizationRequestFormsTableData(data);

                enqueueNotification(
                    "Success",
                    "Reauthorization request form successfully created",
                );
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <button
            onClick={handleClick}
            className={classNames("btn btn-primary", styles.tableActionButton)}>
            {isLoading ? (
                <CircleLoader color={"#fff"} size={"sm"} />
            ) : (
                <span>Create request</span>
            )}
        </button>
    );
};

export default CreateRequestButton;
