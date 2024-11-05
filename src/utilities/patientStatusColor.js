import classNames from "classnames";

export const colorCondition = (status) =>
    classNames(
        { "patient-status--active": status === "Active" },
        { "patient-status--archived": status === "Archived" },
        { "patient-status--discharged": status === "Discharged" },
        { "patient-status--inactive": status === "Inactive" },
        { "patient-status--lost": status === "Lost" },
        { "patient-status--new ": status === "New" },
        { "patient-status--other": status === "Other" },
        { "patient-status--other": status === "Not created" },
    );
