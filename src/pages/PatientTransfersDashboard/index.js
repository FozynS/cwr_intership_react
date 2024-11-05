import React, {useEffect} from "react";
import AppMainLayout from "../../layouts/AppMainLayout";
import {useDispatch, useSelector} from "react-redux";
import AssignedPatients from "./components/AssignedPatients";
import UnassignedPatients from "./components/UnassignedPatients";
import styles from "./index.module.scss";
import TabMate from "../../components/TabMate";
import {
    getPatientStatuses,
    getAllProviders,
    getAllInsurances,
} from "../../api/pages/patient-transfer-dashboard-page";
import {
    setFiltersDataStatusesDataIsLoadingAC,
    setFiltersDataStatusesDataStatusesAC,
    setFiltersDataProvidersDataIsLoadingAC,
    setFiltersDataProvidersDataProvidersAC,
    setFiltersDataInsurancesDataInsurancesAC,
    setFiltersDataInsurancesDataIsLoadingAC,
} from "../../store/reducers/patientTransfersDashboard.reducer";
import CircleLoader from "../../components/CircleLoader";

const PatientTransfersDashboard = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.app);
    const { assignedPatients, unassignedPatients, filtersData } = useSelector(state => state.patientTransfersDashboard);

    const tabs = [
        {
            eventKey: 'assigned_patients',
            title: 'Assigned Patients',
            numberOfRecords: assignedPatients.filteredTableData.length,
            disabled: false,
            component: <AssignedPatients />
        },
        {
            eventKey: 'unassigned_patients',
            title: 'Unassigned Patients',
            numberOfRecords: unassignedPatients.filteredTableData.length,
            disabled: false,
            component: <UnassignedPatients />
        },
    ];

    const tabStyles = {
        minHeight: '518px',
        overflow: 'hidden',
        borderRadius: '4px',
    }

    useEffect(() => {
        if (! filtersData.providersData.providers.length && ! filtersData.providersData.isLoading) {
            dispatch(setFiltersDataProvidersDataIsLoadingAC({value: true}));

            getAllProviders()
                .then((response) => {
                    dispatch(setFiltersDataProvidersDataProvidersAC({
                        data: response.data,
                    }));
                })
                .finally(() => {
                    dispatch(setFiltersDataProvidersDataIsLoadingAC({value: false}));
                });
        }

        if (! filtersData.insurancesData.insurances.length && ! filtersData.insurancesData.isLoading) {
            dispatch(setFiltersDataInsurancesDataIsLoadingAC({value: true}));

            getAllInsurances()
                .then((response) => {
                    dispatch(setFiltersDataInsurancesDataInsurancesAC({
                        data: response.data,
                    }));
                })
                .finally(() => {
                    dispatch(setFiltersDataInsurancesDataIsLoadingAC({value: false}));
                });
        }

        if (! filtersData.statusesData.statuses.length && ! filtersData.statusesData.isLoading) {
            dispatch(setFiltersDataStatusesDataIsLoadingAC({value: true}));

            getPatientStatuses()
                .then((response) => {
                    dispatch(setFiltersDataStatusesDataStatusesAC({
                        data: response.data,
                    }));
                })
                .finally(() => {
                    dispatch(setFiltersDataStatusesDataIsLoadingAC({value: false}));
                });
        }
    }, []);

    return (
        <AppMainLayout>
            <div className={`container-fluid ${styles.secretaryDashboard}`}>
                {! userData.isLoadedIsOnlyAdmin ? (
                    <CircleLoader absolute={true} />
                ) : (
                    <div className={'dashboardCard d-flex flex-column flex-columm gap-2 p-3'}>
                        <h4>Patients Management</h4>

                        <TabMate
                            tabs={tabs}
                            defaultActiveKey={tabs[0].eventKey}
                            tabStyles={tabStyles}
                            className="mb-2"
                        />
                    </div>
                )}
            </div>
        </AppMainLayout>
    )
};

export default PatientTransfersDashboard;
