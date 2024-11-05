export const sortingName = (rowA, rowB, columnId) => {
    const nameA = rowA.values[columnId].toLowerCase();
    const nameB = rowB.values[columnId].toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
};

export const sortingTimeFormatAmPm = (rowA, rowB, columnName) => {
    let timeA = new Date(`2000-01-01 ${rowA.original[columnName]}`);
    let timeB = new Date(`2000-01-01 ${rowB.original[columnName]}`);

    if (timeA < timeB) {
        return -1;
    }
    if (timeA > timeB) {
        return 1;
    }

    return 0;
};

export const sortingDate = (rowA, rowB, columnName) => {
    const valueA = rowA.original[columnName];
    const valueB = rowB.original[columnName];

    if (valueA === "-" && valueB === "-") {
        return 0;
    } else if (valueA === "-") {
        return -1;
    } else if (valueB === "-") {
        return 1;
    } else {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        return dateA - dateB;
    }
};

export const sortingStatus = (rowA, rowB, columnName) => {
    const statusA = rowA.values[columnName].status;
    const statusB = rowB.values[columnName].status;

    return statusA.localeCompare(statusB);
};

export const sortingFormStatus = (rowA, rowB, columnName) => {
    const valueA = rowA.original[columnName]?.created_at;
    const valueB = rowB.original[columnName]?.created_at;

    if (!valueA && !valueB) {
        return 0;
    } else if (!valueA) {
        return -1;
    } else if (!valueB) {
        return 1;
    } else {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        return dateA - dateB;
    }
};

export const sortingReauthorizationRequestDocument = (rowA, rowB, columnName) => {
    let valueA = 'Not created';
    let valueB = 'Not created';
    if (rowA.original.insurance_plan && !rowA.original.insurance_plan.requires_reauthorization_document) {
        valueA = "Not required";
    } else if (rowA.original[columnName]) {
        valueA = "Created";
    }
    if (rowB.original.insurance_plan && !rowB.original.insurance_plan.requires_reauthorization_document) {
        valueB = "Not required";
    } else if (rowB.original[columnName]) {
        valueB = "Created";
    }

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
};
