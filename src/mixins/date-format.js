import moment from "../utilities/moment-config";

export const getFormattedDateTime = (date) => {
    return moment(date).format('MM/DD/YYYY hh:mm A');
}

export const getFormattedTime = (date) => {
    return moment(date).format('h:mm A');
}

export const getFormattedDate = (date) => {
    return moment(date).format('DD MMM. YYYY h:mm A');
}

export const getFormattedDateSimple = (date) => {
    return moment(date).format('MM/DD/YYYY');
}

export const getCommentTime = (date, nowrap, nowrap_all) => {
    if (typeof nowrap === 'undefined' || !nowrap) {
        return moment(date).format('DD MMM. YYYY, h:mm A');
    }

    let s = '';

    if (typeof nowrap_all === 'undefined' || !nowrap_all) {
        s += '<nobr>' + moment(date).format('DD MMM. YYYY') + '</nobr>';
        s += ', ';
        s += '<nobr>' + moment(date).format('h:mm A') + '</nobr>';
    } else {
        s += '<nobr>' + moment(date).format('DD MMM. YYYY, h:mm A') + '</nobr>';
    }

    return s;
}

export const getDurationFormat = (duration) => {
    if (duration) {
        return moment.utc(duration).format('HH:mm:ss');
    }

    return '00:00:00';
}
