import moment from "moment-timezone";
import {
    EMAIL_LOG_ID,
    EMAIL_SEND_METHOD_NAME,
    FAX_LOG_ID,
    FAX_SEND_METHOD_NAME,
    PHONE_LOG_ID,
    PHONE_SEND_METHOD_NAME,
} from "../constants/reauthorization-request-dashboard";

export const getSendMethodNameFromId = (id) => {
    switch (id) {
        case EMAIL_LOG_ID:
            return EMAIL_SEND_METHOD_NAME;
        case FAX_LOG_ID:
            return FAX_SEND_METHOD_NAME;
        case PHONE_LOG_ID:
            return PHONE_SEND_METHOD_NAME;
        default:
            return null;
    }
};

export const getFirstElementFromLogsAndSharedDocuments = (
    firstLog,
    firstSharedDocument,
) => {
    if (!firstSharedDocument) {
        return firstLog;
    }

    if (!firstLog) {
        return firstSharedDocument;
    }

    const firstLogDate = moment(firstLog.created_at);
    const firstSharedDocumentDate = moment(firstSharedDocument.created_at);

    return firstLogDate.isBefore(firstSharedDocumentDate)
        ? firstSharedDocument
        : firstLog;
};

export const getStageChangeHistory = (requestForm) => {
    return requestForm.stage_change_history.map(item => {
        return {
            id: item.id,
            user_name: item.user.meta.firstname + ' ' + item.user.meta.lastname,
            old_stage: item.old_stage.name,
            new_stage: item.new_stage.name,
            comment: item.comment,
            created_at: moment(item.created_at).format("MM/DD/YYYY"),
        }
    });
};

