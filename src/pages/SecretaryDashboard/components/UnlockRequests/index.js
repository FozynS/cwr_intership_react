import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../index.module.scss';
import Table from '../../../../components/Table';
import RemoveRowFromTableContext from "../../../../contexts/RemoveRowFromTableContext";

const UnlockRequests = () => {
    const { unlockRequests } = useSelector(state => state.secretaryDashboard);
    const [data, setData] = React.useState(unlockRequests?.tableData);

    React.useEffect(() => {
        setData(unlockRequests.tableData)
    },[unlockRequests.tableData])

    const removeRow = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <RemoveRowFromTableContext.Provider value={removeRow}>
            <div className={styles.dashboardTableWrapper}>
                <Table
                    columns={unlockRequests.tableColumns}
                    data={data}
                    dataIsLoaded={unlockRequests.dataIsLoaded}
                />
            </div>
        </RemoveRowFromTableContext.Provider>
    )
}

export default UnlockRequests