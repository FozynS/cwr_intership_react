import React, { useEffect } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import {getTridiuumAppointmentsData, restartTridiuumParsers} from "../../../../api/pages/secretary-dashboard-page";
import { useDispatch, useSelector } from "react-redux";
import {
    setIsRestartingTridiuumParsersAC,
    setTridiuumAppointmentsCountAC
} from "../../../../store/reducers/secretaryDashboard.reducer";
import CircleLoader from "../../../CircleLoader";
import PageLoader from "../../../../assets/icons/page-loader.gif"
import SyncIcon from "../../../../assets/icons/sync-icon.svg"

const CHECK_TRIDIUUM_APPOINTMENTS_DATA_TIMEOUT = 60000; // timeout 1 minute (milliseconds)

const TridiumAppointmentsInfo = () => {
    const dispatch = useDispatch();

    const { tridiuumAppointmentsCount, isRestartingTridiuumParsers } = useSelector(
        (state) => state.secretaryDashboard,
    );

    const loadTridiuumAppointmentsData = () => {
        getTridiuumAppointmentsData().then(({ data }) => {
            dispatch(setTridiuumAppointmentsCountAC({ value: data.count }));
            dispatch(setIsRestartingTridiuumParsersAC({ value: data.is_restarting_tridiuum_parsers }));

            if (data.is_restarting_tridiuum_parsers) {
                checkTridiuumAppointmentsDataWithTimeout();
            }
        });
    }

    const checkTridiuumAppointmentsDataWithTimeout = () => {
        setTimeout(() => {
            loadTridiuumAppointmentsData();
        }, CHECK_TRIDIUUM_APPOINTMENTS_DATA_TIMEOUT);
    }

    useEffect(() => {
        loadTridiuumAppointmentsData();
    }, []);

    const handleRestartTridiuumParsers = () => {
        if (isRestartingTridiuumParsers) {
            return;
        }

        dispatch(setIsRestartingTridiuumParsersAC({ value: true }));

        checkTridiuumAppointmentsDataWithTimeout();

        restartTridiuumParsers()
            .catch(() => {
                console.log('Error restarting tridiuum parsers');
            });
    }

    return (
        <div
            className={classNames(
                styles.tridiumAppointmentsInfo,
                "dashboardCard",
            )}>
            <span>Today's appointments from Lucet:</span>
            {tridiuumAppointmentsCount !== null ? (
                <div className={'d-flex align-items-center justify-content-between flex-grow-1'}>
                    <span>{tridiuumAppointmentsCount}</span>

                    {isRestartingTridiuumParsers ?
                        <img
                            src={PageLoader}
                            alt="restart-tridiuum-parsers-loader"
                            title={'Synchronizing appointments with Lucet'}
                            style={{ height: "18px" }}
                        /> :
                        <img
                            src={SyncIcon}
                            alt="restart-tridiuum-parsers"
                            className={styles.btnRestartTridiuumParsers}
                            title={'Sync appointments with Lucet'}
                            onClick={handleRestartTridiuumParsers}
                        />
                    }
                </div>
            ) : (
                <span
                    className="d-flex align-items-center"
                    style={{ height: "19px" }}>
                    <CircleLoader size="sm" />
                </span>
            )}
        </div>
    );
};

export default TridiumAppointmentsInfo;
