import React from "react";
import { useSelector } from "react-redux";
import Table from "../../../../components/Table";

const LostPatients = ({ tableName }) => {
    const { secretaryDashboard } = useSelector((state) => state);

    const table = secretaryDashboard[tableName];

    return (
        <div className="dashboard-table-wrapper">
            <Table
                columns={table.tableColumns}
                data={table.tableData}
                dataIsLoaded={table.dataIsLoaded}
                options={{applyMinHeightToHeader: true}}
            />
        </div>
    );
};

export default LostPatients;
