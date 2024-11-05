import React, { useEffect, useState } from "react";
import AppMainLayout from "../../layouts/AppMainLayout";
import {
    getSupervisees,
    getSupervisors,
} from "../../api/pages/supervisor-dashboard-page";
import { useDispatch, useSelector } from "react-redux";
import { setSuperviseesAC } from "../../store/reducers/supervisorDashboard.reducer";
import SuperviseeBlock from "./components/SuperviseeBlock";
import CircleLoader from "../../components/CircleLoader";
import Select from "react-select";
import { PROVIDER_ROLE_ID } from "../../constants";
import styles from "./index.module.scss";
import { getSelectStyles } from "../../utilities/react-select-styles";

const SupervisorDashboard = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.app);

    const [supervisorsList, setSupervisorsList] = useState(null);
    const [selectedSupervisorId, setSelectedSupervisorId] = useState(null);

    const { supervisees } = useSelector((state) => state.supervisorDashboard);

    const userIsProvider = user.role.id === PROVIDER_ROLE_ID;
    const selectStyles = getSelectStyles();

    const getContentForSupervisor = () => {
        if (!supervisees) {
            return <CircleLoader absolute={true} />;
        }
        if (!supervisees.length) {
            return (
                <div
                    className="dashboardCard d-flex align-items-center justify-content-center"
                    style={{ height: "54px", fontSize: "16px" }}>
                    There are no supervisees yet
                </div>
            );
        }
        return supervisees.filter((supervisee) => !!supervisee.provider).map((supervisee) => (
            <SuperviseeBlock key={supervisee.id} supervisee={supervisee} />
        ));
    };

    const getSelectedSupervisorValue = () => {
        if (selectedSupervisorId) {
            const supervisor = supervisorsList.find(
                (supervisor) => supervisor.id === selectedSupervisorId,
            );
            return { value: supervisor.id, label: supervisor.provider_name };
        }
        return { value: "", label: "" };
    };

    const selectedSupervisorValue = getSelectedSupervisorValue();

    const getContentForSecretary = () => {
        if (!supervisorsList) {
            return <CircleLoader absolute={true} />;
        }
        if (supervisorsList) {
            return (
                <div className="d-flex flex-column gap-2">
                    <div className={styles.selectSupervisorBlock}>
                        <div className="fw-bold ps-1">Supervisor Name</div>
                        <Select
                            value={selectedSupervisorValue}
                            onChange={(selectedOption) =>
                                setSelectedSupervisorId(selectedOption.value)
                            }
                            options={supervisorsList.map((supervisor) => ({
                                value: supervisor.id,
                                label: supervisor.provider_name,
                            }))}
                            isSearchable={false}
                            styles={selectStyles}
                        />
                    </div>
                    {selectedSupervisorId && getContentForSupervisor()}
                </div>
            );
        }
    };

    useEffect(() => {
        if (userIsProvider) {
            return getSupervisees().then((res) =>
                dispatch(setSuperviseesAC({ data: res.data })),
            );
        }

        getSupervisors().then((res) => setSupervisorsList(res.data));
    }, []);

    useEffect(() => {
        if (!userIsProvider && selectedSupervisorId) {
            dispatch(setSuperviseesAC({ data: null }));

            getSupervisees({ supervisor_id: selectedSupervisorId }).then(
                (res) => dispatch(setSuperviseesAC({ data: res.data })),
            );
        }
    }, [selectedSupervisorId]);

    return (
        <AppMainLayout>
            <div className="container-fluid">
                <div className="d-flex flex-column gap-2">
                    {userIsProvider
                        ? getContentForSupervisor()
                        : getContentForSecretary()}
                </div>
            </div>
        </AppMainLayout>
    );
};

export default SupervisorDashboard;
