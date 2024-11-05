import axios from "axios";

export const getFaxes = async (type, page) => {
    try {
        switch (type) {
            case "all":
                return await axios.get(`api/ringcentral/faxes?page=${page}`);
            case "unread":
                return await axios.get(
                    `api/ringcentral/faxes?page=${page}&unread=false`,
                );
            case "unassigned":
                return await axios.get(
                    `api/ringcentral/faxes?page=${page}&unassigned=false`,
                );
            default:
                return await axios.get(`api/ringcentral/faxes?page=${page}`);
        }
    } catch (error) {
        return error.response;
    }
};

export const getUnreadCount = () => {
    return axios
        .get(`api/ringcentral/faxes?unread=false`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
};

export const searchFaxesByPatient = async (searchParams, searchType) => {
    let typeParam;
    let encodedParams = encodeURIComponent(searchParams);

    switch (searchType) {
        case "all":
            typeParam = "";
            break;
        case "unread":
            typeParam = "unread=false";
            break;
        case "targetSearch":
            typeParam = "unread=false";
            break;
        default:
            console.error("Unexpected table data");
    }

    return await axios
        .get(`api/ringcentral/faxes?${typeParam}&search=${encodedParams}`)
        .catch((error) => {
            return error.response;
        });
};

export const getFaxesByPatientId = async (patientId, faxId) => {
    return await axios.get(`api/patients/${patientId}/faxes`);
};

export const getFaxesByPatientLeadId = async (patientLeadId, faxId) => {
    return await axios.get(`api/leads/${patientLeadId}/faxes`);
};

export const searchByPatient = (name) => {
    return axios
        .get(`api/ringcentral/patients?search=${name}`)
        .catch((error) => {
            return error.response;
        });
};

export const setFaxAsRead = async (row) => {
    return await axios.post("api/ringcentral/faxes/read-status", {
        fax_id: [row.id],
    });
};

export const setFaxAsUnread = async (rows) => {
    const requestIds = [];
    rows.forEach((row) => requestIds.push(row.id));
    return await axios.post("api/ringcentral/faxes/unread-status", {
        fax_id: requestIds,
    });
};

export const attachFaxToPatient = async (
    row,
    faxPatient,
    faxName,
    faxStatus,
    faxComment,
) => {
    await axios.post("api/ringcentral/faxes/patient-add-pdf", {
        assign: 1,
        fax_id: row.id,
        fax_name: faxName,
        content: faxComment,
        document_type_id: 70,
        patient_id: faxPatient.id,
        only_for_admin: faxStatus ? 1 : 0,
    });

    await axios.post("api/ringcentral/fax-attach", {
        fax_id: row.id,
        comment: faxComment,
        patient_id: faxPatient.id,
        status: faxStatus ? "private" : "public",
    });
};

export const attachFaxToPatientLead = async (
    row,
    faxPatient,
    faxName,
    faxStatus,
    faxComment,
) => {
    await axios.post(`api/leads/${faxPatient.id}/attach-fax/${row.id}`, {
        comment: faxComment,
        fax_name: faxName,
        only_for_admin: faxStatus ? 1 : 0,
        status: faxStatus ? "private" : "public",
    });
};

export const detachFaxFromPatient = async (row) => {
    await axios.post("api/ringcentral/faxes/patient-remove-pdf", {
        detach_pdf: 1,
        fax_id: row.id,
        patient_id: row.patient_id,
    });

    await axios.post("api/ringcentral/fax-detach", {
        fax_id: row.id,
    });
};

export const detachFaxFromPatientLead = async (row) => {
    await axios.post(`api/leads/${row.patient_lead_id}/detach-fax/${row.id}`);
};

export const downloadFax = async (faxId) => {
    await axios.post("/api/ringcentral/fax-logging", {
        fax_id: faxId,
        download: true,
    });

    await axios
        .get(`api/ringcentral/fax-download?fax_id=${faxId}`, {
            responseType: "arraybuffer",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/pdf",
            },
        })
        .then((response) => {
            const filename = response.headers["content-disposition"]
                .split("filename=")[1]
                .replaceAll('"', "");
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
        });
};

export const showFaxView = async (faxId) => {
    await axios.post("/api/ringcentral/fax-logging", {
        fax_id: faxId,
    });

    return await axios
        .get(`api/ringcentral/fax-view?fax_id=${faxId}`, {
            responseType: "arraybuffer",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/pdf",
            },
        })
        .then((response) => {
            const blob = new Blob([response.data], { type: "application/pdf" });
            return `${window.URL.createObjectURL(blob)}`;
        })
        .catch((error) => {
            return error.response;
        });
};

export const getFaxLogs = async (faxId, page = 1) => {
    return await axios
        .get(`api/ringcentral/fax-logs?fax_id=${faxId}&page=${page}`)
        .then((response) => {
            return response.data;
        });
};
