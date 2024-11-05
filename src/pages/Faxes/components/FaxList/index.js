import React, { useContext } from "react";

import FaxPageContext from "../../../../contexts/FaxPageContext";

import { formattedFaxDate } from "../../../../utilities/formattedFaxDate";
import FilterByPatient from "../FilterByPatient";
import Table from "../../../../components/Table";
import ButtonBack from "../ButtonBack";
import SearchBar from "../SearchBar";
import { colorCondition } from "../../../../utilities/patientStatusColor";

const FaxList = () => {
    const { tableData, tableParams, searchBarState, buttonBackState } =
        useContext(FaxPageContext);

    const hasLink = (cell) => {
        return !! (cell.row.original.patient_id || cell.row.original.inquiry_id);
    }

    const getLink = (cell) => {
        return cell.row.original.patient_id
            ? `/chart/${cell.row.original.patient_id}`
            : `/new-patients-dashboard?selectedCard=${cell.row.original.inquiry_id}`;
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Date",
                accessor: "received_at",
                width: 115,
                Cell: ({ value }) => formattedFaxDate(value),
                disableSortBy: true,
                isVerticallyCentered: true,
            },
            {
                Header: "From",
                accessor: "phone",
                width: 110,
                disableSortBy: true,
                isVerticallyCentered: true,
            },
            {
                Header: "Assigned to",
                accessor: (cell) => {
                    if (cell.patient) {
                        return cell.patient;
                    }
                    if (cell.patient_lead) {
                        return `${cell.patient_lead}`;
                    }
                },
                width: 140,
                isVerticallyCentered: true,
                textColor: (cell) =>
                    colorCondition(cell.patient_status || "Not created"),
                Cell: (cell) => (
                    <div className="ms-1 d-flex align-items-center">
                        <div>
                            {hasLink(cell) ?
                                <a
                                    type={'button'}
                                    className={`${cell.column.textColor(cell.row.original)} text-decoration-none`}
                                    href={getLink(cell)}
                                >
                                    {cell.value}
                                </a> :
                                <span  className={cell.column.textColor(cell.row.original)}>
                                    {cell.value}
                                </span>
                            }
                            
                            {cell.row.original.patient_lead && (
                                <div>(Not created)</div>
                            )}
                        </div>
                        <FilterByPatient cell={cell} />
                    </div>
                ),
                disableSortBy: true,
            },
        ],
        [],
    );

    return (
        <>
            {searchBarState && (
                <div className={"mb-3"}>
                    <SearchBar />
                </div>
            )}

            {buttonBackState && (
                <div className={"mb-4"}>
                    <ButtonBack />
                </div>
            )}

            <Table
                pageSize={tableParams.per_page}
                dataIsLoaded={true}
                columns={columns}
                data={tableData ? tableData : []}
                withCheckbox={true}
                checkboxVerticallyCentered={true}
                className="faxes"
                rowIsClickable={true}
            />
        </>
    );
};

export default FaxList;
