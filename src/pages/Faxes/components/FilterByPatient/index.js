import React, { useContext } from "react";

import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";
import FaxPageContext from "../../../../contexts/FaxPageContext";
import {
    getFaxesByPatientId,
    getFaxesByPatientLeadId,
    searchFaxesByPatient,
} from "../../../../api/pages/faxes-page";

const FilterByPatient = ({ cell }) => {
    const {
        activeTab,
        setTableData,
        setTableParams,
        setSearchBarState,
        setButtonBackState,
        setLoading,
        searchParams,
        setSearchParams,
    } = useContext(FaxPageContext);

    const clickHandler = (cell, event) => {
        const value = cell.value;
        event.stopPropagation();
        if (value) {
            let getFaxesMethod;
            if (cell.row.original.patient_id) {
                getFaxesMethod = getFaxesByPatientId(
                    cell.row.original.patient_id,
                );
            } else {
                getFaxesMethod = getFaxesByPatientLeadId(
                    cell.row.original.patient_lead_id,
                );
            }
            setSearchBarState(false);
            setButtonBackState(true);
            setLoading(true);
            getFaxesMethod
                .then((response) => {
                    setTableData(response.data.faxes);
                    setTableParams(response.data.meta);
                })
                .finally(() => {
                    setLoading(false);
                    setSearchParams(value);
                });
        }
    };

    return (
        <>
            {cell.value && (
                <div
                    role={"button"}
                    className={`d-flex p-1 pt-0 pb-0 ${
                        activeTab === "targetSearch" ? "d-none" : ""
                    }`}
                    onClick={(event) => clickHandler(cell, event)}>
                    {!searchParams && <SearchIcon />}
                </div>
            )}
        </>
    );
};

export default FilterByPatient;
