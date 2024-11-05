import React, { useContext, useEffect, useState } from "react";
import AppMainLayout from "../../layouts/AppMainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getRingCentralNumbers } from "../../api/common/ringCentral";
import _ from "lodash";
import NotificationsContext from "../../contexts/NotificationsContext";
import EditIcon from "../../assets/icons/edit.svg";
import FilterMultipleSelect from "./components/FilterMultipleSelect";
import ArchivePatientModal from "./components/ArchivePatientModal";
import AddPatientModal from "./components/AddPatientModal";
import CallModal from "../../components/CallModal";
import CircleLoaderWithOverlay from "../../components/CircleLoaderWithOverlay";
import CallResultModal from "../../components/CallResultModal";
import PatientDetailsModal from "./components/PatientDetailsModal";
import CardMoveAcrossLanesModal from "./components/CardMoveAcrossLanesModal";
import FileTypeSelectorModal from "./components/FileTypeSelectorModal";
import * as AppReducer from "../../store/reducers/app.reducer";
import * as NewPatientsDashboardReducer from "../../store/reducers/newPatientsDashboard.reducer";
import * as NewPatientsDashboardApi from "../../api/pages/new-patients-dashboard-page";
import "./index.scss";
import SearchInput from "../../components/SearchInput";
import { ARCHIVED_INQUIRIES_LANE_ID } from "../../constants/new-patients-dashboard";
import EnhancedTrelloBoard from "./components/EnhancedTrelloBoard";
import { columnRules, processCardData } from "./utils";

const NewPatientsDashboard = () => {
    const dispatch = useDispatch();

    const { newPatientsDashboard, app } = useSelector((state) => state);
    const { userData, queryParams } = app;
    const { filters, lanes, searchValue, callModalData, loading } = newPatientsDashboard;

    const [boardData, setBoardData] = useState({ lanes: [] });
    const [isLoadedData, setIsLoadedData] = useState(false);
    const [showCallResultModal, setShowCallResultModal] = React.useState(false);
    const [isShowArchived, setIsShowArchived] = useState(false);
    const [searchValueState, setSearchValueState] = useState(searchValue);
    const [filtersState, setFiltersState] = useState(filters);

    const { enqueueNotification } = useContext(NotificationsContext);

    const setEventBus = (event) => {
        dispatch(
            NewPatientsDashboardReducer.setEventBusAC({ eventBus: event }),
        );
    };

    const handleCloseCallModal = () => {
        dispatch(
            NewPatientsDashboardReducer.setCallModalDataAC({ data: null }),
        );
    };

    const handleShowCallResultModal = () => {
        if (showCallResultModal) {
            return;
        }

        setShowCallResultModal(true);
    };

    const handleCloseCallResultModal = () => {
        setShowCallResultModal(false);
    };

    const handleDragEnd = (
        cardId,
        sourceLaneId,
        targetLaneId,
        position,
        cardDetails,
    ) => {
        if (
            sourceLaneId === ARCHIVED_INQUIRIES_LANE_ID ||
            targetLaneId === ARCHIVED_INQUIRIES_LANE_ID
        ) {
            return false;
        }

        if (sourceLaneId === targetLaneId) {
            return true;
        }

        const columnRule = columnRules[targetLaneId];
        if (columnRule) {
            const errorMessage = columnRule.check(cardDetails);
            if (errorMessage) {
                enqueueNotification("Error", errorMessage);
                return false;
            }
        }

        const data = {
            fromLaneId: sourceLaneId,
            toLaneId: targetLaneId,
            cardId,
            index: position,
            cardDetails,
        };

        dispatch(NewPatientsDashboardReducer.setMoveCardDataAC({ data }));

        return false;
    };

    const handleAddPatientDealClick = () => {
        dispatch(
            NewPatientsDashboardReducer.setShowAddPatientModalAC({
                value: true,
            }),
        );
    };

    const handleShowClick = () => {
        const newLanes = lanes.map((column) => {
            return { ...column, currentPage: 1 };
        });

        dispatch(
            NewPatientsDashboardReducer.setLanesInTableAC({ data: newLanes }),
        );
        dispatch(
            NewPatientsDashboardReducer.setFiltersAC({ data: filtersState }),
        );
        dispatch(
            NewPatientsDashboardReducer.setSearchValueAC({
                value: searchValueState,
            }),
        );
    };

    const serializeLaneData = (data) => {
        return data.map((item) => processCardData(item));
    };

    const uploadInquiries = async () => {
        dispatch(NewPatientsDashboardReducer.setLoadingAC({ value: true }));

        /* Archived inquiries */
        const boardLanes = lanes.filter(
            (lane) => lane.id !== ARCHIVED_INQUIRIES_LANE_ID,
        );

        const promisesArray = [];
        boardLanes.forEach((column) => {
            const { id, currentPage } = column;

            let promise;

            const params = {
                page: currentPage,
                search_text: searchValue,
                source_id: filters.source,
            };

            if (id === ARCHIVED_INQUIRIES_LANE_ID) {
                promise = NewPatientsDashboardApi.getArchivedInquiries(params);
            } else {
                params.stage_id = id;
                promise = NewPatientsDashboardApi.getInquiriesByStage(params);
            }

            promisesArray.push(promise);
        });

        const inquirableResponses = await Promise.all(promisesArray);

        inquirableResponses.forEach((response, index) => {
            const { data, meta } = response.data;

            const laneId = boardLanes[index].id;

            const serializedData = serializeLaneData(data, laneId);
            dispatch(
                NewPatientsDashboardReducer.setDataInLaneAC({
                    data: serializedData,
                    meta,
                    laneId,
                }),
            );
        });

        dispatch(NewPatientsDashboardReducer.setLoadingAC({ value: false }));
    };

    const loadInitialData = async () => {
        try {
            const registrationMethodsPromise =
                NewPatientsDashboardApi.getRegistrationMethods();
            const channelsPromise = NewPatientsDashboardApi.getChannels();
            const sourcesPromise = NewPatientsDashboardApi.getSources();
            const documentTypesPromise =
                NewPatientsDashboardApi.getDocumentTypesTree();
            const providersDatasetPromise =
                NewPatientsDashboardApi.getProvidersDatasetForTribute();
            const therapyTypesPromise =
                NewPatientsDashboardApi.getTherapyTypes();
            const callNumbersPromise = getRingCentralNumbers();

            const [
                registrationMethods,
                channels,
                sources,
                documentTypes,
                providersDataset,
                therapyTypes,
                callNumbersResponse,
            ] = await Promise.all([
                registrationMethodsPromise,
                channelsPromise,
                sourcesPromise,
                documentTypesPromise,
                providersDatasetPromise,
                therapyTypesPromise,
                callNumbersPromise,
            ]);

            dispatch(
                NewPatientsDashboardReducer.setRegistrationMethodsAC({
                    data: registrationMethods.data,
                }),
            );
            dispatch(
                NewPatientsDashboardReducer.setChannelsAC({
                    data: channels.data,
                }),
            );
            dispatch(
                NewPatientsDashboardReducer.setSourcesAC({
                    data: sources.data,
                }),
            );

            const sourceIds = sources.data.map((source) => source.id);
            const newFilters = { ...filters, source: sourceIds };
            setFiltersState(newFilters);
            dispatch(
                NewPatientsDashboardReducer.setFiltersAC({ data: newFilters }),
            );

            dispatch(
                NewPatientsDashboardReducer.setDocumentTypesAC({
                    data: documentTypes.data,
                }),
            );
            dispatch(
                NewPatientsDashboardReducer.setProvidersDatasetForTributeAC({
                    data: providersDataset.data,
                }),
            );

            dispatch(
                AppReducer.setRingCentralNumbersAC({
                    numbers: callNumbersResponse.data,
                }),
            );

            dispatch(
                NewPatientsDashboardReducer.setTherapyTypesAC({
                    data: therapyTypes.data.therapy_types,
                }),
            );

            await uploadInquiries();

            setIsLoadedData(true);
        } catch (e) {
            //
        }
    };

    const processSelectedCard = () => {
        let selectedCard;

        const selectedCardId = queryParams.selectedCard;

        if (selectedCardId) {
            Object.values(lanes).forEach((lane) => {
                if (selectedCard) {
                    return;
                }
                selectedCard = lane.cards.find(
                    (card) => card.id === selectedCardId,
                );
                console.log(selectedCard);

                if (selectedCard) {
                    return;
                }
            });
        }
        if (selectedCard) {
            const {
                inquirable,
                id,
                stageId,
                source,
                registrationMethod,
                isPatientCreated,
            } = selectedCard;
            dispatch(
                NewPatientsDashboardReducer.setSelectedCardDataAC({
                    data: {
                        ...inquirable,
                        inquiry_id: id,
                        stageId,
                        source,
                        registrationMethod,
                        isPatientCreated,
                    },
                }),
            );
        }
    };

    const handleLaneScroll = async (page, laneId) => {
        const currentLane = lanes.find((column) => column.id === laneId);
        const nextPage = currentLane.currentPage + 1;

        if (nextPage <= currentLane.lastPage) {
            await loadMoreInquiries(nextPage, laneId);
        }

        return Promise.resolve();
    };

    const updateBoardData = () => {
        let newLanes = _.cloneDeep(lanes);

        if (!isShowArchived) {
            newLanes = newLanes.filter(
                (column) => column.id !== ARCHIVED_INQUIRIES_LANE_ID,
            );
        }

        setBoardData((prevBoardData) => ({
            ...prevBoardData,
            lanes: newLanes,
        }));
    };

    useEffect(() => {
        updateBoardData();
        loadInitialData();
    }, []);

    useEffect(() => {
        if (!isLoadedData) {
            return;
        }

        updateBoardData();
        processSelectedCard();
    }, [isLoadedData]);

    useEffect(() => {
        if (!isLoadedData) {
            return;
        }

        updateBoardData();
    }, [isShowArchived]);

    useEffect(() => {
        if (!isLoadedData) {
            return;
        }

        uploadInquiries();
    }, [searchValue, filters]);

    useEffect(() => {
        if (
            JSON.stringify(lanes) !== JSON.stringify(boardData.lanes) &&
            isLoadedData
        ) {
            updateBoardData();
        }
    }, [lanes]);

    const loadMoreInquiries = async (page, laneId) => {
        const currentLane = lanes.find((column) => column.id === laneId);

        let response;

        let params = {
            page,
            search_text: searchValue,
            source_id: filters.source,
        };

        if (laneId === ARCHIVED_INQUIRIES_LANE_ID) {
            response = await NewPatientsDashboardApi.getArchivedInquiries(
                params,
            );
        } else {
            params.stage_id = laneId;
            response = await NewPatientsDashboardApi.getInquiriesByStage(
                params,
            );
        }

        const serializedData = serializeLaneData(response.data.data, laneId);
        const newData = currentLane.cards.concat(serializedData);

        dispatch(
            NewPatientsDashboardReducer.setDataInLaneAC({
                data: newData,
                meta: response.data.meta,
                laneId,
            }),
        );
    };

    const showButtonIsDisabled =
        JSON.stringify(filters) === JSON.stringify(filtersState) &&
        searchValue.toLowerCase() === searchValueState.toLowerCase();

    return (
        <AppMainLayout>
            <div className="container-fluid">
                {loading && <CircleLoaderWithOverlay />}
                <div className="dashboardCard fullHeightDashboardCard position-relative">
                    <div className="d-flex flex-column gap-3">
                        <div
                            className="d-flex justify-content-between"
                            style={{ height: "44px" }}>
                            <div className="position-relative d-flex align-items-center gap-3">
                                <SearchInput
                                    value={searchValueState}
                                    onChange={(e) =>
                                        setSearchValueState(e.target.value)
                                    }
                                    placeholder="Search by name"
                                    style={{ width: "254px" }}
                                />
                                <FilterMultipleSelect
                                    filters={filtersState}
                                    setFilters={setFiltersState}
                                />
                                <button
                                    className="btn btn-primary text-white d-flex align-items-center"
                                    onClick={handleShowClick}
                                    disabled={showButtonIsDisabled}>
                                    Show
                                </button>
                            </div>
                            <button
                                onClick={handleAddPatientDealClick}
                                className="btn btn-large btn-primary text-white d-flex align-items-center gap-2 ps-3">
                                <img src={EditIcon} alt="edit-icon"></img>
                                <span>Add patient inquiry</span>
                            </button>
                        </div>

                        {/* Archived inquiries */}
                        {/* <div className="d-flex gap-2">
                            <input
                                id={"selectAllForms"}
                                type="checkbox"
                                checked={isShowArchived}
                                onChange={(e) =>
                                    setIsShowArchived(e.currentTarget.checked)
                                }
                                onClick={(e) => e.stopPropagation()}
                            />
                            <label
                                className="control-label"
                                htmlFor="selectAllForms">
                                Show archived inquiries
                            </label>
                        </div> */}

                        <EnhancedTrelloBoard
                            data={boardData}
                            eventBusHandle={setEventBus}
                            handleDragEnd={handleDragEnd}
                            onLaneScroll={handleLaneScroll}
                        />
                    </div>
                </div>
            </div>

            {!loading && (
                <div>
                    <AddPatientModal />
                    <PatientDetailsModal />
                    <ArchivePatientModal />
                    <CardMoveAcrossLanesModal />
                    <FileTypeSelectorModal />

                    <CallModal
                        patientId={callModalData?.patientId}
                        patientType={callModalData?.patientType}
                        showModal={!!callModalData}
                        closeModal={handleCloseCallModal}
                        openCallResultModal={handleShowCallResultModal}
                    />
                    <CallResultModal
                        showModal={showCallResultModal}
                        closeModal={handleCloseCallResultModal}
                    />
                </div>
            )}
        </AppMainLayout>
    );
};

export default NewPatientsDashboard;
