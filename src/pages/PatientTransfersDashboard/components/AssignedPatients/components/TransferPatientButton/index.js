import CircleLoader from "../../../../../../components/CircleLoader";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import styles from '../../../../index.module.scss'
import {setAssignedPatientsTransferDataPatientIdAC} from "../../../../../../store/reducers/patientTransfersDashboard.reducer";

const TransferPatientButton = ({patientId}) => {
    const dispatch = useDispatch();

    const { transferData, unassignData } = useSelector(state => state.patientTransfersDashboard.assignedPatients);

    const handleButtonClick = () => {
        dispatch(setAssignedPatientsTransferDataPatientIdAC({patientId}));
    };

    const isLoadingTransfer = transferData.loadingPatients.includes(patientId);
    const isLoadingUnassign = unassignData.loadingPatients.includes(patientId);

    return (
        <button
            onClick={handleButtonClick}
            disabled={isLoadingTransfer || isLoadingUnassign}
            className={classNames('btn btn-sm btn-primary d-flex justify-content-center align-items-center',
                styles.tableActionButton
            )}
            style={{width: '75px'}}
        >
            {isLoadingTransfer ? (
                <CircleLoader
                    color={"#fff"}
                    size={"sm"}
                />
            ) : (
                "Transfer"
            )}
        </button>
    )
}

export default TransferPatientButton;