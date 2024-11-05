import { createSlice } from "@reduxjs/toolkit";
import {
    INBOX_LANE_ID,
    IN_PROGRESS_LANE_ID,
    APPOINTMENT_SCHEDULED_LANE_ID,
    ON_HOLD_LANE_ID,
    ONBOARDING_COMPLETE_LANE_ID,
    INITIAL_APPOINTMENT_COMPLETE_LANE_ID,
    ARCHIVED_INQUIRIES_LANE_ID,
    NEW_PATIENTS_DASHBOARD_STAGES,
    INITIAL_SURVEY_COMPLETE_LANE_ID,
    FOUR_APPOINTMENTS_COMPLETE_LANE_ID,
} from "../../constants/new-patients-dashboard";

const initialState = {
    lanes: [
        {
            id: ARCHIVED_INQUIRIES_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.ARCHIVED,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: INBOX_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.INBOX,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: IN_PROGRESS_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.IN_PROGRESS,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: APPOINTMENT_SCHEDULED_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.APPOINTMENT_SCHEDULED,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: ONBOARDING_COMPLETE_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.ONBOARDING_COMPLETE,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: INITIAL_APPOINTMENT_COMPLETE_LANE_ID,
            titleText:
                NEW_PATIENTS_DASHBOARD_STAGES.INITIAL_APPOINTMENT_COMPLETE,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: INITIAL_SURVEY_COMPLETE_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.INITIAL_SURVEY_COMPLETE,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: FOUR_APPOINTMENTS_COMPLETE_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.FOUR_APPOINTMENTS_COMPLETE,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
        {
            id: ON_HOLD_LANE_ID,
            titleText: NEW_PATIENTS_DASHBOARD_STAGES.ON_HOLD,
            label: "",
            currentPage: 1,
            lastPage: 1,
            cards: [],
        },
    ],
    filters: {
        source: [],
    },
    searchValue: "",
    showAddPatientModal: false,
    selectedCardData: null,
    fileTypeSelection: {
        showModal: false,
        fileId: null,
        patientIsCreated: false,
    },
    removeCardData: null,
    moveCardData: null,
    eventBus: undefined,
    registrationMethods: [],
    channels: [],
    sources: [],
    languages: null,
    patientsData: {
        pageIndex: 1,
        pageSize: 20,
        lastPageIndex: 20,
        list: [],
    },
    providersData: {
        pageIndex: 1,
        pageSize: 20,
        lastPageIndex: 20,
        list: [],
    },
    insurancesData: {
        pageIndex: 1,
        pageSize: 10,
        lastPageIndex: 10,
        list: [],
    },
    eligibilityPayersData: {
        pageIndex: 1,
        pageSize: 20,
        lastPageIndex: 20,
        list: [],
    },
    insuranceProcedures: [],
    diagnoses: [],
    therapyTypes: [],
    callModalData: null,
    preferredPhoneList: [
        { id: 0, value: "C", text: "Cell Phone" },
        { id: 1, value: "H", text: "Home Phone" },
        { id: 2, value: "W", text: "Work Phone" },
        { id: 3, value: "D", text: "DO NOT CALL" },
    ],
    documentTypes: [],
    providersDatasetForTribute: null,
    loading: true,
};

const slice = createSlice({
    name: "newPatientsDashboard",
    initialState: initialState,
    reducers: {
        setLanesInTableAC(state, action) {
            state.lanes = action.payload.data;
        },
        setDataInLaneAC(state, action) {
            const { data, meta, laneId } = action.payload;
            const { current_page, total, last_page } = meta;

            const laneIndex = state.lanes.findIndex(
                (lane) => lane.id === laneId,
            );

            state.lanes[laneIndex].cards = data;
            state.lanes[laneIndex].currentPage = current_page;
            state.lanes[laneIndex].label = String(total);
            state.lanes[laneIndex].lastPage = last_page;

            return state;
        },
        cardMoveAcrossLanesAC(state, action) {
            const { fromLaneId, toLaneId, cardId, index, cardDetails } =
                action.payload.data;
            const fromLaneIndex = state.lanes.findIndex(
                (lane) => lane.id === fromLaneId,
            );
            const toLaneIndex = state.lanes.findIndex(
                (lane) => lane.id === toLaneId,
            );

            state.lanes[fromLaneIndex].cards = state.lanes[
                fromLaneIndex
            ].cards.filter((item) => item.id !== cardId);

            state.lanes[toLaneIndex].cards.splice(index, 0, cardDetails);

            state.lanes[fromLaneIndex].label = String(Number(state.lanes[fromLaneIndex].label) - 1);
            state.lanes[toLaneIndex].label = String(Number(state.lanes[toLaneIndex].label) + 1);
        },
        addCardAC(state, action) {
            const { laneId, card } = action.payload;

            const laneIndex = state.lanes.findIndex(
                (lane) => lane.id === laneId,
            );

            state.lanes[laneIndex].cards.unshift(card);
            state.lanes[laneIndex].label = String(Number(state.lanes[laneIndex].label) + 1);
        },
        updateCardDataAC(state, action) {
            const meta = action.payload.meta;

            const laneIndex = state.lanes.findIndex(
                (lane) => lane.id === meta.stageId,
            );
            const cardIndex = state.lanes[laneIndex].cards.findIndex(
                (card) => card.id === meta.id,
            );

            state.lanes[laneIndex].cards[cardIndex] = {
                ...state.lanes[laneIndex].cards[cardIndex],
                ...action.payload.data,
            };
        },
        deleteCardAC(state, action) {
            const { laneId, cardId } = action.payload;

            const laneIndex = state.lanes.findIndex(
                (lane) => lane.id === laneId,
            );
            const cardIndex = state.lanes[laneIndex].cards.findIndex(
                (card) => card.id === cardId,
            );

            state.lanes[laneIndex].cards.splice(cardIndex, 1);
            state.lanes[laneIndex].label = String(Number(state.lanes[laneIndex].label) - 1);
        },
        setShowAddPatientModalAC(state, action) {
            state.showAddPatientModal = action.payload.value;
        },
        setSelectedCardDataAC(state, action) {
            state.selectedCardData = action.payload.data;
        },
        addCommentToSelectedCardDataAC(state, action) {
            state.selectedCardData.data.comments.push(action.payload.comment);
        },
        setRemoveCardDataAC(state, action) {
            state.removeCardData = action.payload.data;
        },
        setMoveCardDataAC(state, action) {
            state.moveCardData = action.payload.data;
        },
        setEventBusAC(state, action) {
            state.eventBus = action.payload.eventBus;
        },
        setSearchValueAC(state, action) {
            state.searchValue = action.payload.value;
        },
        setFiltersAC(state, action) {
            state.filters = action.payload.data;
        },
        setRegistrationMethodsAC(state, action) {
            state.registrationMethods = action.payload.data;
        },
        setChannelsAC(state, action) {
            state.channels = action.payload.data;
        },
        setSourcesAC(state, action) {
            state.sources = action.payload.data;
        },
        addValueToSourcesAC(state, action) {
            const { id, name, channel_id } = action.payload;

            const channel = state.channels.find(
                (channel) => channel.id === channel_id,
            );
            const source = { id, name, channel_id, channel };
            state.sources.push(source);
        },
        setLanguagesAC(state, action) {
            state.languages = action.payload.languages;
        },
        setPatientsDataAC(state, action) {
            state.patientsData = action.payload.data;
        },
        setProvidersDataAC(state, action) {
            state.providersData = action.payload.data;
        },
        setInsurancesDataAC(state, action) {
            state.insurancesData = action.payload.data;
        },
        setEligibilityPayersDataAC(state, action) {
            state.eligibilityPayersData = action.payload.data;
        },
        setInsuranceProceduresAC(state, action) {
            state.insuranceProcedures = action.payload.data;
        },
        setDiagnosesAC(state, action) {
            state.diagnoses = action.payload.data;
        },
        setTherapyTypesAC(state, action) {
            state.therapyTypes = action.payload.data;
        },
        setCallModalDataAC(state, action) {
            state.callModalData = action.payload.data;
        },
        setLoadingAC(state, action) {
            state.loading = action.payload.value;
        },
        setFileTypeSelectionAC(state, action) {
            state.fileTypeSelection = action.payload.data;
        },
        setDocumentTypesAC(state, action) {
            state.documentTypes = action.payload.data;
        },
        setCommentsInSelectedCardDataAC(state, action) {
            if (state.selectedCardData) {
                state.selectedCardData.comments = action.payload.data;
            }
        },
        setProvidersDatasetForTributeAC(state, action) {
            state.providersDatasetForTribute = action.payload.data;
        },
    },
});
export const newPatientsDashboardReducer = slice.reducer;
export const {
    setLanesInTableAC,
    setDataInLaneAC,
    cardMoveAcrossLanesAC,
    addCardAC,
    updateCardDataAC,
    deleteCardAC,
    setShowAddPatientModalAC,
    setSelectedCardDataAC,
    addCommentToSelectedCardDataAC,
    setRemoveCardDataAC,
    setMoveCardDataAC,
    setEventBusAC,
    setSearchValueAC,
    setFiltersAC,
    setRegistrationMethodsAC,
    setChannelsAC,
    setSourcesAC,
    addValueToSourcesAC,
    setLanguagesAC,
    setPatientsDataAC,
    setProvidersDataAC,
    setInsurancesDataAC,
    setEligibilityPayersDataAC,
    setInsuranceProceduresAC,
    setDiagnosesAC,
    setTherapyTypesAC,
    setCallModalDataAC,
    setLoadingAC,
    setFileTypeSelectionAC,
    setDocumentTypesAC,
    setCommentsInSelectedCardDataAC,
    setProvidersDatasetForTributeAC,
} = slice.actions;
