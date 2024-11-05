import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppMainLayout from "../../layouts/AppMainLayout";
import UpcomingReauthorizationRequests from "./components/UpcomingReauthorizationRequests";
import SubmittedReauthorizationRequestForms from "./components/SubmittedReauthorizationRequestForms";
import TabMate from "../../components/TabMate";
import Pagination from "../../components/Pagination";
import CircleLoader from "../../components/CircleLoader";
import * as ReauthorizationRequestsDashboardReducer from "../../store/reducers/reauthorizationRequestsDashboard.reducer";
import * as ReauthorizationRequestsDashboardApi from "../../api/pages/reauthorization-request-dashboard-page";

const ReauthorizationRequestsDashboard = () => {
    const dispatch = useDispatch();

    const { reauthorizationRequestsDashboard } = useSelector((state) => state);
    const {
        upcomingReauthorizationRequests,
        submittedReauthorizationRequestForms,
    } = reauthorizationRequestsDashboard;

    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const tabs = [
        {
            id: "upcoming-reauthorization-requests",
            eventKey: "upcoming_reauthorization_requests",
            title: "Upcoming Reauthorization Requests",
            numberOfRecords: upcomingReauthorizationRequests.tableParams.total,
            disabled: false,
            component: <UpcomingReauthorizationRequests />,
        },
        {
            id: "submitted-reauthorization-request-forms",
            eventKey: "submitted_reauthorization_request_forms",
            title: "Submitted Reauthorization Request Forms",
            numberOfRecords:
                submittedReauthorizationRequestForms.tableParams.total,
            disabled: false,
            component: <SubmittedReauthorizationRequestForms />,
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].eventKey);

    const tabStyles = {
        border: "0.5px solid #D9D9D9",
        overflow: "hidden",
        borderRadius: "4px",
    };

    const getTableNameFromKey = (key) => {
        if (key === "upcoming_reauthorization_requests") {
            return "upcomingReauthorizationRequests";
        }
        if (key === "submitted_reauthorization_request_forms") {
            return "submittedReauthorizationRequestForms";
        }
    };

    const currentTableName = getTableNameFromKey(activeTab);
    const tableParams =
        reauthorizationRequestsDashboard[currentTableName].tableParams;

    const loadingData = async () => {
        const responses = await Promise.all([
            ReauthorizationRequestsDashboardApi.getReauthorizationRequestFormStages(),
            ReauthorizationRequestsDashboardApi.getPatientStatuses(),
            ReauthorizationRequestsDashboardApi.getProvidersList(),
            ReauthorizationRequestsDashboardApi.getDocumentDefaultFaxesList(),
            ReauthorizationRequestsDashboardApi.getDocumentDefaultEmailsList(),
            ReauthorizationRequestsDashboardApi.getExpirationsList(),
        ]);

        const actions = [
            ReauthorizationRequestsDashboardReducer.setRequestFormStagesAC,
            ReauthorizationRequestsDashboardReducer.setPatientStatusesAC,
            ReauthorizationRequestsDashboardReducer.setProvidersListAC,
            ReauthorizationRequestsDashboardReducer.setDocumentDefaultFaxesListAC,
            ReauthorizationRequestsDashboardReducer.setDocumentDefaultEmailsListAC,
            ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationExpirationsListAC,
        ];

        actions.forEach((action, index) => {
            dispatch(action({ value: responses[index].data }));
        });

        setDataIsLoaded(true);
    };

    useEffect(() => {
        loadingData();
    }, []);

    return (
        <AppMainLayout>
            <div className="container-fluid">
                {!dataIsLoaded ? (
                    <CircleLoader absolute={true} />
                ) : (
                    <div className="dashboardCard d-flex flex-column flex-columm gap-2 p-3">
                        <h4>Reauthorization Requests</h4>
                        <TabMate
                            defaultActiveKey={activeTab}
                            tabs={tabs}
                            className="mb-2"
                            tabStyles={tabStyles}
                            onSelect={(tabKey) => setActiveTab(tabKey)}
                        />
                        <div className="w-100 d-flex justify-content-center">
                            <Pagination
                                params={tableParams}
                                currentPage={tableParams.current_page}
                                setCurrentPage={(value) =>
                                    dispatch(
                                        ReauthorizationRequestsDashboardReducer.setCurrentPageInTableAC(
                                            {
                                                tableName: currentTableName,
                                                value,
                                            },
                                        ),
                                    )
                                }
                                loading={false}
                            />
                        </div>
                    </div>
                )}
            </div>
        </AppMainLayout>
    );
};

export default ReauthorizationRequestsDashboard;
