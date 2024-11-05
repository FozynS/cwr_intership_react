export const getInquirableFullname = (inquirable) => {
    return (
        inquirable.first_name +
        " " +
        inquirable.last_name +
        " " +
        (inquirable.middle_initial ? inquirable.middle_initial + " " : "")
    );
};

export const getFormStatusLabel = (inquiry) => {
    if (inquiry.stage_id > 2) {
        if (!inquiry.inquirable.last_document_request) {
            return "Forms not send";
        } else if (inquiry.inquirable.last_document) {
            return "Forms signed";
        } else {
            return "Forms send";
        }
    }

    return "";
};
