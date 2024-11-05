import moment from "moment-timezone";

const globalTimezone =
    process.env.REACT_APP_TIMEZONE === "-08:00" ? "America/Los_Angeles" : "UTC";

moment.tz.setDefault(globalTimezone);

export default moment;
