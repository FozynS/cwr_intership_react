import {Modal, ModalBody,  ModalHeader} from "react-bootstrap";
import React from "react";
import Table from "../../../../../../components/Table";
import {sortingDate} from "../../../../../../mixins/sorting-functions";
import styles from "./index.module.scss"
import {dateValueCell} from "../../../../../../mixins/cells-functions";

const tableColumns = [
    {
        accessor: "user_name",
        Header: "User",
        disableSortBy: true,
        width: 150,
    },
    {
        accessor: "old_stage",
        Header: "Old Stage",
        disableSortBy: true,
        width: 130,
    },
    {
        accessor: "new_stage",
        Header: "New Stage",
        disableSortBy: true,
        width: 130,
    },
    {
        accessor: "comment",
        Header: "Comment",
        disableSortBy: true,
        width: 200,
    },
    {
        accessor: "created_at",
        Header: "Stage changed on",
        Cell: dateValueCell,
        sortType: sortingDate,
        width: 120,
    },
];

const StageChangeHistoryModal = ({ requestForm, show, closeModal }) => {
    const tableData = requestForm.stage_change_history || [];

    const tableParams = {
        total: tableData.length,
    };

    return (
        <Modal
            show={show}
            size="lg"
            onHide={closeModal}
            centered
            className={"custom-modal"}>
            <ModalHeader className="h6" closeButton>
                Stage Change History: {requestForm.patient_name}
            </ModalHeader>
            <ModalBody className="container p-3">
                <div className={styles.tableWrapper}>
                    <div className="d-flex align-items-center gap-2 w-100">
                        <Table
                            pageSize={tableParams.per_page}
                            columns={tableColumns}
                            currentPage={tableParams.current_page}
                            data={tableData}
                            dataIsLoaded={true}
                        />
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default StageChangeHistoryModal;