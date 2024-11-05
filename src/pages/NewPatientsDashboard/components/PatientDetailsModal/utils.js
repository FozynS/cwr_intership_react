import moment from "../../../../utilities/moment-config";

export const calculateAge = (dateString) => {
    const birthDate = moment(dateString);
    const today = moment();
    return today.diff(birthDate, "years");
};

export const formatDate = (dateString) => {
    return moment(dateString).format("MM/DD/YYYY");
};

export const getSexLabel = (sex) => {
    switch (sex) {
        case "M":
            return "Male";
        case "F":
            return "Female";
        case "U":
            return "Unknown";
        default:
            return "Not specified";
    }
};