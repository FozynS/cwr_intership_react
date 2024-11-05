import CircleLoader from "../../../../../../components/CircleLoader";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import styles from '../../../../index.module.scss'
import {setUnassignedPatientsArchiveDataPatientId} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";

const ArchivePatientButton = ({patientId}) => {
    const dispatch = useDispatch();

    const { assignData, archiveData } = useSelector(state => state.patientTransfersDashboard.unassignedPatients);

    const handleButtonClick = () => {
        dispatch(setUnassignedPatientsArchiveDataPatientId({patientId}));
    };

    const isLoadingAssign = assignData.loadingPatients.includes(patientId);
    const isLoadingArchive = archiveData.loadingPatients.includes(patientId);

    return (
        <button
            onClick={handleButtonClick}
            disabled={isLoadingAssign || isLoadingArchive}
            className={classNames('btn btn-sm btn-danger d-flex justify-content-center align-items-center',
                styles.tableActionButton
            )}
            style={{width: '60px'}}
        >
            {isLoadingArchive ? (
                <CircleLoader
                    color={"#fff"}
                    size={"sm"}
                />
            ) : (
                "Archive"
            )}
        </button>
    )
}

export default ArchivePatientButton;