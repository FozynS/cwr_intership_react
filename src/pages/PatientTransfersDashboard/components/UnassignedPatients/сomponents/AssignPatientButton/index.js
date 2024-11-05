import CircleLoader from "../../../../../../components/CircleLoader";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import styles from '../../../../index.module.scss'
import {setUnassignedPatientsAssignDataPatientId} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";

const AssignPatientButton = ({patientId}) => {
    const dispatch = useDispatch();

    const { assignData, archiveData } = useSelector(state => state.patientTransfersDashboard.unassignedPatients);

    const handleButtonClick = () => {
        dispatch(setUnassignedPatientsAssignDataPatientId({patientId}));
    };

    const isLoadingAssign = assignData.loadingPatients.includes(patientId);
    const isLoadingArchive = archiveData.loadingPatients.includes(patientId);

    return (
        <button
            onClick={handleButtonClick}
            disabled={isLoadingAssign || isLoadingArchive}
            className={classNames('btn btn-sm btn-primary d-flex justify-content-center align-items-center',
                styles.tableActionButton
            )}
            style={{width: '60px'}}
        >
            {isLoadingAssign ? (
                <CircleLoader
                    color={"#fff"}
                    size={"sm"}
                />
            ) : (
                "Assign"
            )}
        </button>
    )
}

export default AssignPatientButton;