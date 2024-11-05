import React from "react";
import { useSelector } from "react-redux";
import Table from "../../../../components/Table";

const NewPatients = () => {
    const { newPatients } = useSelector((state) => state.secretaryDashboard);

    return (
        <div className="dashboard-table-wrapper">
            <Table
                columns={newPatients.tableColumns}
                data={newPatients.tableData}
                dataIsLoaded={newPatients.dataIsLoaded}
                options={{applyMinHeightToHeader: true}}
            />
        </div>
    );
};

export default NewPatients;
