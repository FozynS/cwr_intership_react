import React from "react";
import { useSelector } from "react-redux";
import Table from "../../../../components/Table";

const ImportantForTodayTable = ({ tableName }) => {
    const state = useSelector((state) => state.secretaryDashboard);

    const table = state[tableName];

    return (
        <div className="dashboard-table-wrapper">
            <Table
                pageSize={table.tableParams.per_page}
                columns={table.tableColumns}
                data={table.tableData}
                dataIsLoaded={table.dataIsLoaded}
                options={{applyMinHeightToHeader: true}}
            />
        </div>
    );
};

export default ImportantForTodayTable;
