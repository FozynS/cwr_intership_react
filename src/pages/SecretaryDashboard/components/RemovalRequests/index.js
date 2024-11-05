import React from 'react'
import styles from '../../index.module.scss'
import Table from '../../../../components/Table'
import { useSelector } from 'react-redux'
import RemoveRowFromTableContext from '../../../../contexts/RemoveRowFromTableContext'

const RemovalRequests = () => {
    const { removalRequests } = useSelector(state => state.secretaryDashboard);

    const [data, setData] = React.useState(removalRequests?.tableData);

    React.useEffect(() => {
        setData(removalRequests.tableData)
    },[removalRequests.tableData])

    const removeRow = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <RemoveRowFromTableContext.Provider value={removeRow}>
            <div className={styles.dashboardTableWrapper}>
                <Table
                    columns={removalRequests.tableColumns}
                    data={data}
                    dataIsLoaded={removalRequests.dataIsLoaded}
                />
            </div>
        </RemoveRowFromTableContext.Provider>
    )
}

export default RemovalRequests