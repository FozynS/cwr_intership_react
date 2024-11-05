import classNames from 'classnames'
import moment from '../../../../utilities/moment-config';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataForNewLostPatiendCard } from '../../../../api/pages/secretary-dashboard-page'
import TabMate from '../../../../components/TabMate'
import { setDataInTableAC, setDataIsLoadedAC, setLastPageInTableAC, setTotalInTableAC } from '../../../../store/reducers/secretaryDashboard.reducer'
import styles from '../../index.module.scss'
import LostPatients from '../LostPatients'
import NewPatients from '../NewPatients'

const NewLostPatients = () => {
    const dispatch = useDispatch()

    const { secretaryDashboard } = useSelector(state => state)

    const { newPatients, inactivePatients, lostPatients } = secretaryDashboard

    const tabs = [
        {
            eventKey: 'new_patients',
            title: 'New Patients Last 3 Months',
            numberOfRecords: newPatients.tableParams.total,
            disabled: false,
            component: <NewPatients />
        },
        {
            eventKey: 'inactive_patients',
            title: 'Inactive Patients Last 3 Months',
            numberOfRecords: inactivePatients.tableParams.total,
            disabled: false,
            component: <LostPatients tableName='inactivePatients' />
        },
        {
            eventKey: 'lost_patients',
            title: 'Lost Patients Last 3 Months',
            numberOfRecords: lostPatients.tableParams.total,
            disabled: false,
            component: <LostPatients tableName='lostPatients' />
        },
    ]

    const getFullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`
    }

    const getTableNameFromKey = (key) => {
        if (key === 'new_patients') {
            return 'newPatients'
        }
        if (key === 'inactive_patients') {
            return 'inactivePatients'
        }
        if (key === 'lost_patients') {
            return 'lostPatients';
        }
    }

    const getPatientStatusData = (el) => {
      return {
          status:el.status.status,
          hex_color:el.status.hex_color,
          status_updated_at:el.status_updated_at,
      };
  };

    const getTableData = (tableName, data) => {
        if (tableName === 'newPatients') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    patient_id: el.id,
                    patient_name: getFullName(el.first_name, el.last_name),
                    patient_status: getPatientStatusData(el),
                    patient_status_updated_at: el.status_updated_at,
                    patient_creation_date: moment(el.created_patient_date || el.created_at).format("MM/DD/YYYY"),
                    count_calls: el.ringcentral_call_logs_count,
                    date_of_last_call: el.last_ringcentral_call_log
                        ? moment(el.last_ringcentral_call_log.created_at).format("MM/DD/YYYY")
                        : '-',
                    caller: el.last_ringcentral_call_log && el.last_ringcentral_call_log.user && el.last_ringcentral_call_log.user.meta
                        ? getFullName(el.last_ringcentral_call_log.user.meta.firstname, el.last_ringcentral_call_log.user.meta.lastname)
                        : '-',
                    comment: el.last_ringcentral_call_log && el.last_ringcentral_call_log.comment
                        ? el.last_ringcentral_call_log.comment 
                        : '-',
                    cell_phone: el.cell_phone,
                })
            })
            return tableData;
        }
        if (tableName === 'inactivePatients' || tableName === 'lostPatients') {
            const tableData = []
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    patient_id: el.id,
                    patient_name: getFullName(el.first_name, el.last_name),
                    patient_status: getPatientStatusData(el),
                    patient_status_updated_at: el.status_updated_at,
                    therapist_name: el.last_appointment?.provider.provider_name || "-",
                    count_visits: el.appointments_count,
                    date_of_last_visit: el.last_appointment?.date_of_service.date || "-",
                })
            })
            return tableData;
        }
    }

    React.useEffect(() => {
        getDataForNewLostPatiendCard().then(({ data }) => {
            Object.keys(data).forEach(key => {
                const tableName = getTableNameFromKey(key);

                const tableData = getTableData(tableName, data[key].data)

                dispatch(setDataInTableAC({ tableName, value: tableData}))

                const total = data[key].meta.count
                dispatch(setTotalInTableAC({ tableName, value: total }))

                const table = secretaryDashboard[tableName]

                const lastPage = Math.ceil(total / table.tableParams.per_page)

                if (lastPage !== table.tableData.last_page) {
                    dispatch(setLastPageInTableAC({ tableName, value: lastPage }))
                }

                dispatch(setDataIsLoadedAC({ tableName, value: true }))
            })
        })
    }, [])

    return (
        <div className={classNames('dashboardCard', 'p-3')}>
            <div className='d-flex align-items-center justify-content-between mb-3'>
                <h1 className={styles.title}>New/Lost Patients</h1>
            </div>

            <TabMate defaultActiveKey={tabs[0].eventKey} tabs={tabs} />
        </div>
    )
}

export default NewLostPatients
