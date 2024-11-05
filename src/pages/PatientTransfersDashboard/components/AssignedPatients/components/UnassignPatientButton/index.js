import CircleLoader from "../../../../../../components/CircleLoader";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import styles from '../../../../index.module.scss'
import {setAssignedPatientsUnassignDataPatientIdAC} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";

const UnassignPatientButton = ({patientId}) => {
    const dispatch = useDispatch();

    const { transferData, unassignData } = useSelector(state => state.patientTransfersDashboard.assignedPatients);

    const handleButtonClick = () => {
        dispatch(setAssignedPatientsUnassignDataPatientIdAC({patientId}));
    };

    const isLoadingUnassign = unassignData.loadingPatients.includes(patientId);
    const isLoadingTransfer = transferData.loadingPatients.includes(patientId);

    return (
        <button
            onClick={handleButtonClick}
            disabled={isLoadingUnassign || isLoadingTransfer}
            className={classNames('btn btn-sm btn-primary d-flex justify-content-center align-items-center',
                styles.tableActionButton
            )}
            style={{width: '75px'}}
        >
            {isLoadingUnassign ? (
                <CircleLoader
                    color={"#fff"}
                    size={"sm"}
                />
            ) : (
                "Unassign"
            )}
        </button>
    )
}

export default UnassignPatientButton;