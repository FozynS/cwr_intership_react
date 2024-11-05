import React, {useEffect} from 'react'
import styles from '../../index.module.scss'
import Table from '../../../../components/Table'
import {useDispatch, useSelector} from 'react-redux'
import Select from "react-select";
import { selectStyles } from "../../selectStyles";
import {
    setCurrentPageInTableAC,
    setDataInTableAC, setDataIsLoadedAC, setLastPageInTableAC,
    setRequestStatusesFilterInTable, setTotalInTableAC
} from "../../../../store/reducers/doctorsRequestsDashboard.reducer";
import moment from "../../../../utilities/moment-config";
import {
    getPatientRemovalRequestsList
} from "../../../../api/pages/doctors-requests-dashboard-page";
import Pagination from "../../../../components/Pagination";

const PatientRemovalRequests = () => {
    const dispatch = useDispatch();
    const { patientRemovalRequests, filtersData } = useSelector(state => state.doctorsRequestsDashboard);

    const {
        filters,
        tableParams,
    } = patientRemovalRequests;

    const {
        requestStatusesData
    } = filtersData;

    const tableName = 'patientRemovalRequests';

    const getTableData = (tableName, data) => {
        const tableData = [];

        data.forEach(el => {
            tableData.push({
                id: el.id,
                therapist_name: el.provider?.provider_name,
                patient_id: el.patient_id,
                patient_name: el.patient?.full_name,
                reason: el.reason,
                requested_at: moment(el.created_at).format('MM/DD/YYYY hh:mm:ss'),
                request_status: {
                    id: el.status,
                    label: filtersData.requestStatusesData.requestStatuses.find(item => item.id === el.status)?.label,
                },
                approver: {
                    id: el.approver?.id,
                    name: el.approver?.meta?.full_name
                },
                approver_comment: el.approver_comment,
                approved_at: el.approved_at
                    ? moment(el.approved_at).format('MM/DD/YYYY hh:mm:ss')
                    : null,
            })
        })

        return tableData;
    }

    const getParams = () => {
        const params = {};

        if (filters.requestStatuses.length) {
            params.request_statuses = filters.requestStatuses.map(item => item.id);
        }

        return params;
    };

    const calculateLastPage = (total) => {
        return Math.max(1, Math.ceil(total / tableParams.per_page));
    };

    useEffect(() => {
        dispatch(setDataIsLoadedAC({ tableName, value: false }))

        getPatientRemovalRequestsList(getParams())
            .then(response => {
                const tableData = getTableData(tableName, response.data.data);

                dispatch(setDataInTableAC({ tableName, value: tableData }))

                dispatch(setTotalInTableAC({ tableName, value: response.data.meta.total }));

                dispatch(setDataIsLoadedAC({ tableName, value: true }))

                const lastPage = calculateLastPage(response.data.meta.total);

                if (lastPage !== tableParams.last_page) {
                    dispatch(setLastPageInTableAC({ tableName, value: lastPage }));
                }
            });
    }, [filters.requestStatuses]);

    const multiSelectStyles = {
        ...selectStyles,
        control: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.control(baseStyles, state),
            width: '340px',
        }),
    };

    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-wrap align-items-stretch gap-2 px-1">
                <div className={styles.selectBlock}>
                    <div className={'fw-bold'}>Request Status</div>
                    <Select
                        value={filters.requestStatuses.length && filters.requestStatuses.map(status => ({
                            value: status.id,
                            label: status.label,
                        }))}
                        options={requestStatusesData.requestStatuses.map((status) => ({
                            value: status.id,
                            label: status.label,
                        }))}
                        onChange={(options) => dispatch(setRequestStatusesFilterInTable({tableName, options}))}
                        isMulti={true}
                        isSearchable={false}
                        closeMenuOnSelect={false}
                        styles={multiSelectStyles}
                    />
                </div>
            </div>

            <div className={styles.dashboardTableWrapper}>
                <Table
                    columns={patientRemovalRequests.tableColumns}
                    data={patientRemovalRequests.tableData}
                    pageSize={tableParams.per_page}
                    currentPage={tableParams.current_page}
                    dataIsLoaded={patientRemovalRequests.dataIsLoaded}
                />
            </div>

            <div className="w-100 d-flex justify-content-center">
                <Pagination
                    params={tableParams}
                    currentPage={tableParams.current_page}
                    setCurrentPage={(value) => dispatch(setCurrentPageInTableAC({tableName, value}))}
                    loading={false}
                />
            </div>
        </div>
    );
}

export default PatientRemovalRequests;