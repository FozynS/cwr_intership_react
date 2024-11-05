import React, {useEffect} from 'react'
import Table from '../../../../components/Table';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../../index.module.scss'
import ArchivePatientModal from "./сomponents/ArchivePatientModal";
import Select from "react-select";
import {
    setUnassignedPatientsCurrentPageAC,
    setUnassignedPatientsFilteredTableDataAC,
    setUnassignedPatientsFiltersDateOfPatientCreationAC,
    setUnassignedPatientsFiltersDateOfUnassignAC,
    setUnassignedPatientsFiltersOldProviderAC,
    setUnassignedPatientsFiltersSearchAC,
    setUnassignedPatientsFiltersStatusesAC,
    setUnassignedPatientsFiltersInsuranceAC,
    setUnassignedPatientsIsLoadingAC,
    setUnassignedPatientsTableDataAC,
    setUnassignedPatientsFiltersShowArchivedPatientsAC,
    updateUnassignedPatientsFilteredTableDataAC,
} from "../../../../store/reducers/patientTransfersDashboard.reducer";
import { selectStyles } from "../../selectStyles";
import classNames from "classnames";
import Pagination from "../../../../components/Pagination";
import AssignPatientModal from "./сomponents/AssignPatientModal";
import CrossSvg from "../../../../components/CrossSvg";
import {getPatientTransfers} from "../../../../api/pages/patient-transfer-dashboard-page";
import moment from "../../../../utilities/moment-config";

const PAGE_SIZE = 25;

const UnassignedPatients = () => {
    const dispatch = useDispatch();

    const { filtersData, unassignedPatients } = useSelector(state => state.patientTransfersDashboard);

    const {
        isLoading,
        tableData,
        filteredTableData,
        tableColumns,
        currentPage,
        filters,
    } = unassignedPatients;

    const {
        providersData,
        statusesData,
        insurancesData,
        dateOfUnassignmentData,
        dateOfPatientCreationData,
    } = filtersData;

    const paginationParams = {
        last_page: Math.ceil(filteredTableData.length / PAGE_SIZE) || 1,
    };

    const handleClearOldProviderInput = () => {
        dispatch(setUnassignedPatientsFiltersOldProviderAC({id: null, provider_name: ''}));
    };

    const handleClearInsuranceInput = () => {
        dispatch(setUnassignedPatientsFiltersInsuranceAC({id: null, insurance: ''}));
    };

    const defaultSelectStyles = {
        ...selectStyles,
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.valueContainer(baseStyles, state),
            paddingRight: '25px',
        }),
    };
    const multiSelectStyles = {
        ...selectStyles,
        control: (baseStyles, state) => ({
            ...baseStyles,
            ...selectStyles.control(baseStyles, state),
            width: '300px',
        }),
    };

    useEffect(() => {
        dispatch(setUnassignedPatientsIsLoadingAC({value: true}));

        getPatientTransfers()
            .then((response) => {
                dispatch(setUnassignedPatientsTableDataAC({
                    data: response.data.data,
                }));
            })
            .finally(() => {
                dispatch(setUnassignedPatientsIsLoadingAC({value: false}));
            });
    }, []);

    useEffect(() => {
        dispatch(updateUnassignedPatientsFilteredTableDataAC());
    }, [tableData, filters.old_provider.id, filters.search, filters.statuses, filters.insurance.id, filters.date_of_unassignment.value, filters.date_of_patient_creation, filters.show_archived_patients])

    return (
        <div>
            <div className="d-flex flex-column gap-2">
                <div className={'d-flex flex-wrap align-items-stretch gap-2 px-1'}>
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading && 'text-muted')}>Old Therapist Name</div>
                        <div className={'position-relative'}>
                            <Select
                                value={filters.old_provider?.id && {value: filters.old_provider.id, label: filters.old_provider.provider_name}}
                                onChange={(selectedOption) => {dispatch(setUnassignedPatientsFiltersOldProviderAC({id: selectedOption.value, provider_name: selectedOption.label}))}                    }
                                options={providersData.providers.map((provider) => ({
                                    value: provider.id,
                                    label: provider.provider_name,
                                }))}
                                isLoading={providersData.isLoading}
                                isDisabled={isLoading}
                                isSearchable={true}
                                styles={defaultSelectStyles}
                            />
                            {filters.old_provider?.id !== null && (
                                <CrossSvg
                                    handleClick={
                                        handleClearOldProviderInput
                                    }
                                    className={classNames(
                                        styles.cross,
                                        styles.selectCross,
                                    )}
                                />
                            )}
                        </div>
                    </div>
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading && 'text-muted')}>Patient Name</div>
                        <input
                            value={filters.search}
                            disabled={isLoading}
                            onChange={(e) => dispatch(setUnassignedPatientsFiltersSearchAC({value: e.target.value}))}
                            className={classNames('form-control', styles.searchInput)}
                            placeholder="Search..."
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading && 'text-muted')}>Patient Status</div>
                        <Select
                            value={filters.statuses.length && filters.statuses.map(status => ({
                                value: status.id,
                                label: status.status,
                            }))}
                            options={statusesData.statuses.map((status) => ({
                                value: status.id,
                                label: status.status,
                            }))}
                            onChange={(options) => dispatch(setUnassignedPatientsFiltersStatusesAC({options}))}
                            isLoading={statusesData.isLoading}
                            isDisabled={isLoading}
                            isMulti={true}
                            isSearchable={false}
                            closeMenuOnSelect={false}
                            styles={multiSelectStyles}
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading)}>Patient Insurance</div>
                        <div className={'position-relative'}>
                            <Select
                                value={filters.insurance?.id && {value: filters.insurance.id, label: filters.insurance.insurance}}
                                options={insurancesData.insurances.map((insurance) => ({
                                    value: insurance.id,
                                    label: insurance.insurance,
                                }))}
                                onChange={(selectedOption) => {dispatch(setUnassignedPatientsFiltersInsuranceAC({id: selectedOption.value, insurance: selectedOption.label}))}                    }
                                isLoading={insurancesData.isLoading}
                                isDisabled={isLoading}
                                isSearchable={true}
                                styles={defaultSelectStyles}
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
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading && 'text-muted')}>Date of Unassignment</div>
                        <Select
                            value={filters.date_of_unassignment}
                            options={dateOfUnassignmentData.intervals}
                            onChange={(selectedOption) => dispatch(setUnassignedPatientsFiltersDateOfUnassignAC(selectedOption))}
                            isDisabled={isLoading}
                            isSearchable={false}
                            styles={selectStyles}
                        />
                    </div>
                    <div className={classNames(styles.selectBlock, isLoading && styles.disabled)}>
                        <div className={classNames('fw-bold', isLoading && 'text-muted')}>Date of Pt. Creation</div>
                        <Select
                            value={filters.date_of_patient_creation}
                            options={dateOfPatientCreationData.intervals}
                            onChange={(selectedOption) => dispatch(setUnassignedPatientsFiltersDateOfPatientCreationAC(selectedOption))}
                            isDisabled={isLoading}
                            isSearchable={false}
                            styles={selectStyles}
                        />
                    </div>
                </div>

                <div className={'d-flex flex-wrap align-items-stretch gap-2 px-1'}>
                    <div className={'d-flex align-items-center'} style={{minHeight: '38px', marginTop: 'auto'}}>
                        <div className={classNames('form-check', styles.formCheck, isLoading && styles.disabled)}>
                            <input
                                type="checkbox"
                                id="show-archived-patients"
                                className={classNames('form-check-input', styles.formCheckInput)}
                                disabled={isLoading}
                                checked={filters.show_archived_patients}
                                onChange={(event) => dispatch(setUnassignedPatientsFiltersShowArchivedPatientsAC({value: event.target.checked}))}
                            />
                            <label
                                htmlFor="show-archived-patients"
                                className={classNames(styles.formCheckLabel, 'fw-bold', isLoading && 'text-muted')}
                            >
                                Show archived patients
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles.dashboardTableWrapper}>
                    <Table
                        columns={tableColumns}
                        data={filteredTableData}
                        currentPage={currentPage}
                        pageSize={PAGE_SIZE}
                        dataIsLoaded={! isLoading}
                    />
                </div>

                <div className={'d-flex justify-content-center mb-2'}>
                    <Pagination
                        params={paginationParams}
                        currentPage={currentPage}
                        setCurrentPage={(value) => dispatch(setUnassignedPatientsCurrentPageAC({value}))}
                        loading={isLoading}
                    />
                </div>
            </div>

            <AssignPatientModal />
            <ArchivePatientModal />
        </div>
    )
}

export default UnassignedPatients