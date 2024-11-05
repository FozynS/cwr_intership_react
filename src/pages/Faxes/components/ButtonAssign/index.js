import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { debounce } from "throttle-debounce";

import { ReactComponent as IconMinus } from "../../../../assets/icons/minus.svg";

import NotificationsContext from "../../../../contexts/NotificationsContext";
import FaxPageContext from "../../../../contexts/FaxPageContext";

import {
    attachFaxToPatient,
    attachFaxToPatientLead,
    detachFaxFromPatient,
    detachFaxFromPatientLead,
    getFaxes,
    searchByPatient,
} from "../../../../api/pages/faxes-page";

import FaxDetachAlert from "../../../../components/Modals/FaxDetachAlert";
import AssigneeForm from "../AssigneeForm";

const ButtonAssign = ({ state }) => {
    const { enqueueNotification } = useContext(NotificationsContext);
    const { selectedRow, setLoading, updateData, activeTab, currentPage } =
        useContext(FaxPageContext);

    const [alertState, setAlertState] = useState(false);

    const attachButtonHandler = (
        selectedRow,
        faxPatient,
        faxName,
        faxStatus,
        faxComment,
    ) => {
        if (!faxComment.length) {
            return false;
        } else {
            let attachMethod;
            if (faxPatient.patient_status) {
                attachMethod = attachFaxToPatient;
            } else {
                attachMethod = attachFaxToPatientLead;
            }
            attachMethod(
                selectedRow,
                faxPatient,
                faxName,
                faxStatus,
                faxComment,
            )
                .then(() => {
                    setLoading(true);
                    getFaxes(activeTab, currentPage).then((response) => {
                        updateData(response);
                        const recipient = selectedRow.phone
                            ? selectedRow.phone
                            : "Fax";
                        enqueueNotification(
                            "Success",
                            `${recipient} successfully assigned to ${faxPatient.patient}`,
                        );
                    });
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handlePatientChoice = (
        event,
        item,
        setPatientChoice,
        setAttachStage,
    ) => {
        event.stopPropagation();
        setPatientChoice(item);
        setAttachStage(2);
    };

    const handleSearchRequest = (value, setPatientsList) => {
        if (value.trim().length) {
            searchByPatient(value.trim()).then((response) => {
                if (response.status === 404) {
                    setPatientsList([]);
                } else {
                    setPatientsList(response.data.data);
                }
            });
        } else {
            setPatientsList([]);
        }
    };

    const debounceHandleSearchRequest = debounce(300, handleSearchRequest);

    const detachAlertState = (state) => {
        setAlertState(state);
    };

    const detachButtonHandler = (selectedRow) => {
        let detachMethod;
        if (selectedRow.patient) {
            detachMethod = detachFaxFromPatient;
        } else {
            detachMethod = detachFaxFromPatientLead;
        }

        detachMethod(selectedRow).then(() => {
            setLoading(true);
            detachAlertState(false);
            getFaxes(activeTab, currentPage)
                .then((response) => {
                    updateData(response);
                    enqueueNotification("Success", `Successfully unattached`);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    };

    return (
        <>
            {selectedRow?.patient || selectedRow?.patient_lead ? (
                <Button
                    className={"d-flex align-items-center text-white me-2"}
                    disabled={state}
                    onClick={() => detachAlertState(true)}>
                    <span className={"me-2"}>Detach Fax </span>
                    <IconMinus />
                </Button>
            ) : (
                <AssigneeForm
                    row={selectedRow}
                    disabled={state}
                    handlePatientSearch={debounceHandleSearchRequest}
                    attachButtonHandler={attachButtonHandler}
                    handlePatientChoice={handlePatientChoice}
                />
            )}

            <FaxDetachAlert
                data={selectedRow}
                state={alertState}
                handleAccept={() => detachButtonHandler(selectedRow)}
                handleDecline={() => detachAlertState(false)}
            />
        </>
    );
};

export default ButtonAssign;
