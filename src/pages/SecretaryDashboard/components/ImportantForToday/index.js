import React from 'react'
import TabMate from '../../../../components/TabMate'
import { useDispatch, useSelector } from 'react-redux'
import ToggleSwitch from '../../../../components/ToggleSwitch'
import classNames from 'classnames'
import styles from '../../index.module.scss'
import { getDataForImportantForTodayCard } from '../../../../api/pages/secretary-dashboard-page'
import { setDataInTableAC, setDataIsLoadedAC, setLastPageInTableAC, setTotalInTableAC } from '../../../../store/reducers/secretaryDashboard.reducer'
import moment from '../../../../utilities/moment-config';
import ImportantForTodayTable from '../ImportantForTodayTable'

const ImportantForToday = () => {
    const dispatch = useDispatch();

    const { secretaryDashboard } = useSelector(state => state)

    const { withoutCompletedForms,
        requireEligibilityCheck,
        withDeductible,
        withNegativeCreditCardBalance,
        withNoFutureAppointments,
        cashPayment } = secretaryDashboard

    const tableNames = [
        'withoutCompletedForms',
        'requireEligibilityCheck',
        'withDeductible',
        'withNegativeCreditCardBalance',
        'withNoFutureAppointments',
        'cashPayment']

    const buttons = [
        { id: "tab-btn-1", value: "previous_week", label: "Previous week" },
        { id: "tab-btn-2", value: "yesterday", label: "Yesterday" },
        { id: "tab-btn-3", value: "today", label: "Today" },
        { id: "tab-btn-4", value: "tomorrow", label: "Tomorrow" },
        { id: "tab-btn-5", value: "this_week", label: "This week" },
        { id: "tab-btn-6", value: "this_month", label: "This month" },
    ]

    const [activeTab, setActiveTab] = React.useState(buttons[2].value)

    const tabs = [{
        eventKey: 'without_completed_forms',
        title: 'Without Completed Forms',
        numberOfRecords: withoutCompletedForms.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="withoutCompletedForms" />
    },
    {
        eventKey: 'require_eligibility_check',
        title: 'Require Eligibility Check',
        numberOfRecords: requireEligibilityCheck.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="requireEligibilityCheck" />
    },
    {
        eventKey: 'withDeductible',
        title: 'With Deductible',
        numberOfRecords: withDeductible.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="withDeductible" />
    },
    {
        eventKey: 'with_negative_credit_card_balance',
        title: 'With Negative Balance',
        numberOfRecords: withNegativeCreditCardBalance.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="withNegativeCreditCardBalance" />
    },
    {
        eventKey: 'with_no_future_appointments',
        title: 'Without Future Appointments',
        numberOfRecords: withNoFutureAppointments.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="withNoFutureAppointments" />
    },
    {
        eventKey: 'cash_payment',
        title: 'Cash Payment',
        numberOfRecords: cashPayment.tableParams.total,
        disabled: false,
        component: <ImportantForTodayTable tableName="cashPayment" />
    }]

    const changeTabHandler = (value) => {
        setActiveTab(value)
    }

    const getTimeFrame = (value) => {
        if (value === 'previous_week') {
            return {
                startDate: moment().subtract(1, 'week').startOf('isoWeek').format('YYYY-MM-DD'),
                endDate: moment().subtract(1, 'week').endOf('isoWeek').format('YYYY-MM-DD')
            };
        }
        if (value === 'yesterday') {
            return {
                startDate: moment().subtract(1, 'day').format('YYYY-MM-DD'),
                endDate: moment().subtract(1, 'day').format('YYYY-MM-DD')
            };
        }
        if (value === 'today') {
            return {
                startDate: moment().format('YYYY-MM-DD'),
                endDate: moment().format('YYYY-MM-DD')
            };
        }
        if (value === 'tomorrow') {
            return {
                startDate: moment().add(1, 'day').format('YYYY-MM-DD'),
                endDate: moment().add(1, 'day').format('YYYY-MM-DD')
            };
        }
        if (value === 'this_week') {
            return {
                startDate: moment().startOf('isoWeek').format('YYYY-MM-DD'),
                endDate: moment().endOf('isoWeek').format('YYYY-MM-DD')
            };
        }
        if (value === 'this_month') {
            return {
                startDate: moment().startOf('month').format('YYYY-MM-DD'),
                endDate: moment().endOf('month').format('YYYY-MM-DD')
            };
        }
    }

    const getTableNameFromKey = (key) => {
        if (key === 'without_forms') {
            return 'withoutCompletedForms'
        }
        if (key === 'with_required_eligibility') {
            return 'requireEligibilityCheck'
        }
        if (key === 'with_deductible') {
            return 'withDeductible'
        }
        if (key === 'with_negative_balance') {
            return 'withNegativeCreditCardBalance';
        }
        if (key === 'patient_last_appointments') {
            return 'withNoFutureAppointments'
        }
        if (key === 'with_cash') {
            return 'cashPayment';
        }
    }

    const getPatientFullName = (patient) => {
        return `${patient.first_name} ${patient.last_name} ${patient.middle_initial || ''}`
    }

    const getTableData = (tableName, data) => {
        if (tableName === 'withoutCompletedForms') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    appointment_status: el.status.status,
                    patient_name: getPatientFullName(el.patient),
                    patient_id: el.patient.id,
                    patient_status: el.patient.status,
                    date: el.date_of_service.date,
                    time: el.date_of_service.time,
                    therapist_name: el.provider?.provider_name,
                    first_visit: el.patient.first_visit_date
                        ? moment(el.patient.first_visit_date, 'YYYY-MM-DD').format('MM/DD/YYYY')
                        : null,
                    count_visits: el.patient.appointments_count,
                    form_status: el.patient.last_document_request,
                })
            })
            return tableData; 
        }
        if (tableName === 'requireEligibilityCheck' || tableName === 'withDeductible') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    appointment_status: el.status.status,
                    patient_name: getPatientFullName(el.patient),
                    patient_id: el.patient.id,
                    patient_status: el.patient.status,
                    date: el.date_of_service.date,
                    time: el.date_of_service.time,
                    therapist_name: el.provider?.provider_name,
                    credit_card: el.patient.credit_card,
                    last_eligibility_check: el.patient.alert ? moment(el.patient.alert.date_created, 'YYYY-MM-DD').format('MM/DD/YYYY') : '-',
                    message: el.patient.alert ? el.patient.alert.message : '-',
                    co_pay: el.patient.alert ? el.patient.alert.co_pay : '-',
                    deductible: el.patient.alert ? el.patient.alert.deductible : '-',
                    deductible_met: el.patient.alert ? el.patient.alert.deductible_met : '-',
                    deductible_remaining: el.patient.alert ? el.patient.alert.deductible_remaining : '-',
                    insurance_pay: el.patient.alert ? el.patient.alert.insurance_pay : '-',
                    reference_number: el.patient.alert ? (el.patient.alert.reference_number || '-') : '-',
                })
            })
            return tableData; 
        }
        if (tableName === 'withNegativeCreditCardBalance') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    appointment_status: el.status.status,
                    patient_name: getPatientFullName(el.patient),
                    patient_id: el.patient.id,
                    patient_status: el.patient.status,
                    date: el.date_of_service.date,
                    time: el.date_of_service.time,
                    therapist_name: el.provider?.provider_name,
                    first_visit: el.patient.first_visit_date
                        ? moment(el.patient.first_visit_date, 'YYYY-MM-DD').format('MM/DD/YYYY')
                        : null,
                    count_visits: el.patient.appointments_count,
                    credit_card: el.patient.credit_card,
                    current_balance: ((el.patient.preprocessed_balance && el.patient.preprocessed_balance.balance_after_transaction ? el.patient.preprocessed_balance.balance_after_transaction : 0) / 100) + '$',
                    co_payment: (el.patient.visit_copay ? el.patient.visit_copay : 0) + '$'
                })
            })
            return tableData;
        }
        if (tableName === 'withNoFutureAppointments') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    appointment_status: el.status.status,
                    patient_name: getPatientFullName(el.patient),
                    patient_id: el.patient.id,
                    patient_status: el.patient.status,
                    date: el.date_of_service.date,
                    time: el.date_of_service.time,
                    therapist_name: el.provider?.provider_name,
                    first_visit: el.patient.first_visit_date
                        ? moment(el.patient.first_visit_date, 'YYYY-MM-DD').format('MM/DD/YYYY')
                        : null,
                    count_visits: el.patient.appointments_count,
                })
            })
            return tableData;
        }
        if (tableName === 'cashPayment') {
            const tableData = [];
            data.forEach(el => {
                tableData.push({
                    id: el.id,
                    appointment_status: el.status.status,
                    patient_name: getPatientFullName(el.patient),
                    patient_id: el.patient.id,
                    patient_status: el.patient.status,
                    date: el.date_of_service.date,
                    time: el.date_of_service.time,
                    therapist_name: el.provider?.provider_name,
                    first_visit: el.patient.first_visit_date
                        ? moment(el.patient.first_visit_date, 'YYYY-MM-DD').format('MM/DD/YYYY')
                        : null,
                    credit_card: el.patient.credit_card,
                    co_payment: (el.patient.visit_copay ? el.patient.visit_copay : 0) + '$'
                })
            })
            return tableData;
        }
    }

    React.useEffect(() => {
        tableNames.forEach(tableName => {
            dispatch(setDataInTableAC({ tableName, value: [] }))
            dispatch(setDataIsLoadedAC({ tableName, value: false }))
        })


        const timeFrame = getTimeFrame(activeTab);

        getDataForImportantForTodayCard(timeFrame).then(({ data }) => {
            Object.keys(data).forEach(key => {
                const tableName = getTableNameFromKey(key);

                const tableData = getTableData(tableName, data[key].data)
                dispatch(setDataInTableAC({ tableName, value: tableData }))

                const total = data[key].meta.total
                dispatch(setTotalInTableAC({ tableName, value: total }))

                const table = secretaryDashboard[tableName]

                const lastPage = Math.ceil(total / table.tableParams.per_page)

                if (lastPage !== table.tableData.last_page) {
                    dispatch(setLastPageInTableAC({ tableName, value: lastPage }))
                }

                dispatch(setDataIsLoadedAC({ tableName, value: true }))
            })
        })
    }, [activeTab])

    return (
        <div className={classNames('dashboardCard', 'p-3 pt-0')}>
            <div className='d-flex align-items-center justify-content-between pt-3 pb-3'>
                <h1 className={styles.title}>Important for today</h1>
                <ToggleSwitch type="radio"
                    name="tabs-buttons"
                    value={activeTab}
                    onChange={changeTabHandler}
                    buttons={buttons} />
            </div>

            <TabMate defaultActiveKey={tabs[0].eventKey} tabs={tabs} />
        </div>
    )
}


export default ImportantForToday