import React, {useEffect, useState} from 'react'
import Table from '../../../../components/Table';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../../index.module.scss'
import Select from "react-select";
import {
    setAssignedPatientsIsLoadedAC,
    setAssignedPatientsIsLoadingAC,
    setAssignedPatientsTableDataAC,
    setAssignedPatientsCurrentPageAC,
    setAssignedPatientsFiltersSearchAC,
    setAssignedPatientsFiltersStatusesAC,
    setAssignedPatientsFiltersProviderAC,
    setAssignedPatientsFilteredTableDataAC,
    setAssignedPatientsFiltersInsuranceAC, updateAssignedPatientsFilteredTableDataAC,
} from "../../../../store/reducers/patientTransfersDashboard.reducer";
import {getPatientsByProviderId} from "../../../../api/pages/patient-transfer-dashboard-page";
import UnassignPatientModal from "./components/UnassignPatientModal";
import classNames from "classnames";
import Pagination from "../../../../components/Pagination";
import {selectStyles} from "../../selectStyles";
import TransferPatientModal from "./components/TransferPatientModal";
import CrossSvg from "../../../../components/CrossSvg";

const PAGE_SIZE = 25;

const AssignedPatients = () => {
    const dispatch = useDispatch();

    const {
        filters,
        tableColumns,
        tableData,
        filteredTableData,
        currentPage,
        isLoaded,
        isLoading,
    } = useSelector(state => state.patientTransfersDashboard.assignedPatients);

    const {
        statusesData,
        providersData,
        insurancesData,
    } = useSelector(state => state.patientTransfersDashboard.filtersData);

    const resetData = () => {
        dispatch(setAssignedPatientsCurrentPageAC({value: 1}));
        dispatch(setAssignedPatientsFiltersSearchAC({value: ''}))
        dispatch(setAssignedPatientsFiltersStatusesAC({options: []}))
        dispatch(setAssignedPatientsFiltersInsuranceAC({id: null, insurance: ''}))
        dispatch(setAssignedPatientsTableDataAC({data: []}));
    }

    useEffect(() => {
        if (filters.provider.id) {
            resetData();

            dispatch(setAssignedPatientsIsLoadingAC({value: true}));

            getPatientsByProviderId(filters.provider.id)
                .then((response) => {
                    dispatch(setAssignedPatientsTableDataAC({
                        data: response.data.data,
                        meta: response.data.meta,
                    }));
                })
                .finally(() => {
                    dispatch(setAssignedPatientsIsLoadingAC({value: false}));

                    if (!isLoaded) {
                        dispatch(setAssignedPatientsIsLoadedAC({value: true}));
                    }
                });
        }
    }, [filters.provider.id])

    useEffect(() => {
        dispatch(updateAssignedPatientsFilteredTableDataAC());
    }, [tableData, filters.search, filters.statuses, filters.insurance.id])

    const paginationParams = {
        last_page: Math.ceil(filteredTableData.length / PAGE_SIZE) || 1,
    };

    const statusesSelectStyles = {
        ...selectStyles,
        control: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.control(baseStyles, state),
            width: '300px',
        }),
    };

    const insuranceSelectStyles = {
        ...selectStyles,
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.valueContainer(baseStyles, state),
            paddingRight: '25px',
        }),
    };

    const handleClearInsuranceInput = () => {
        dispatch(setAssignedPatientsFiltersInsuranceAC({id: null, insurance: ''}));
    };

    return (
        <div>
            <div className="d-flex flex-column gap-2">
                <div className={'d-flex flex-wrap gap-2 px-1'}>
                    <div className={styles.selectBlock}>
                        <div className="fw-bold">Therapist Name</div>
                        <Select
                            value={filters.provider.id && {value: filters.provider.id, label: filters.provider.provider_name}}
                            onChange={(selectedOption) => {dispatch(setAssignedPatientsFiltersProviderAC({id: selectedOption.value, provider_name: selectedOption.label}))}                    }
                            options={providersData.providers.map((provider) => ({
                                value: provider.id,
                                label: provider.provider_name,
                            }))}
                            isLoading={providersData.isLoading}
                            isSearchable={true}
                            styles={selectStyles}
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, !filters.provider.id && styles.disabled)}>
                        <div className={classNames('fw-bold', !filters.provider.id && 'text-muted')}>Patient Name</div>
                        <input
                            value={filters.search}
                            disabled={! filters.provider.id}
                            onChange={(e) => dispatch(setAssignedPatientsFiltersSearchAC({value: e.target.value}))}
                            className={classNames('form-control', styles.searchInput)}
                            placeholder="Search..."
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, !filters.provider.id && styles.disabled)}>
                        <div className={classNames('fw-bold', !filters.provider.id && 'text-muted')}>Patient Status</div>
                        <Select
                            value={filters.statuses.length && filters.statuses.map(status => ({
                                value: status.id,
                                label: status.status,
                            }))}
                            options={statusesData.statuses.map((status) => ({
                                value: status.id,
                                label: status.status,
                            }))}
                            onChange={(options) => dispatch(setAssignedPatientsFiltersStatusesAC({options}))}
                            isLoading={statusesData.isLoading}
                            isDisabled={! filters.provider.id}
                            isMulti={true}
                            isSearchable={false}
                            closeMenuOnSelect={false}
                            styles={statusesSelectStyles}
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, !filters.provider.id && styles.disabled)}>
                        <div className={classNames('fw-bold', !filters.provider.id && 'text-muted')}>Patient Insurance</div>
                        <div className={'position-relative'}>
                            <Select
                                value={filters.insurance?.id && {value: filters.insurance.id, label: filters.insurance.insurance}}
                                options={insurancesData.insurances.map((insurance) => ({
                                    value: insurance.id,
                                    label: insurance.insurance,
                                }))}
                                onChange={(selectedOption) => {dispatch(setAssignedPatientsFiltersInsuranceAC({id: selectedOption.value, insurance: selectedOption.label}))}                    }
                                isLoading={insurancesData.isLoading}
                                isDisabled={!filters.provider.id}
                                isSearchable={true}
                                styles={insuranceSelectStyles}
                            />
                            {filters.insurance.id !== null && (
                                <CrossSvg
                                    handleClick={
                                        handleClearInsuranceInput
                                    }
                                    className={classNames(
                                        styles.cross,
                                        styles.selectCross,
                                    )}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.dashboardTableWrapper}>
                    <Table
                        columns={tableColumns}
                        data={filteredTableData}
                        currentPage={currentPage}
                        pageSize={PAGE_SIZE}
                        dataIsLoaded={isLoaded && !isLoading}
                        showLabelNotLoaded={!filters.provider.id}
                        labelNotLoaded={'Choose provider...'}
                    />
                </div>

                <div className={'d-flex justify-content-center mb-2'}>
                    <Pagination
                        params={paginationParams}
                        currentPage={currentPage}
                        setCurrentPage={(value) => dispatch(setAssignedPatientsCurrentPageAC({value}))}
                        loading={!isLoaded || isLoading}
                    />
                </div>
            </div>

            <UnassignPatientModal />
            <TransferPatientModal />
        </div>
    )
}

export default AssignedPatients;