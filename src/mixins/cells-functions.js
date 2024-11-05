import { OverlayTrigger, Tooltip } from "react-bootstrap";
import moment from "../utilities/moment-config";
import HelpIcon from "../components/HelpIcon";
import { getFirstElementFromLogsAndSharedDocuments } from "../utilities/reauthorizationRequestsDashboardUtils";
import CustomBadge from "../pages/SecretaryDashboard/components/CustomBadge";

export const patientNameValueCell = ({ row, value }) => {
    const patientId = row.original.patient_id;
    return (
        <a className="text-decoration-none" href={`/chart/${patientId}`}>
            {value}
        </a>
    );
};

export const patientNameWithScrollLinkValueCell = ({ row, value }) => {
    const patientId = row.original.patient_id;

    const document = row.original.document;

    if (!document) {
        return (
            <a className="text-decoration-none" href={`/chart/${patientId}`}>
                {value}
            </a>
        );
    }

    const parts = document.document_type.split("\\");
    const documentModel = parts[parts.length - 1];

    return (
        <a
            className="text-decoration-none"
            href={`/chart/${patientId}?scrollto=${documentModel}${document.id}`}>
            {value}
        </a>
    );
};

export const patientValueCell = ({ row, value }) => {
    const patientId = row.original.id
    return <a className='text-decoration-none' href={`/chart/${patientId}`}>{value}</a>
}

export const dateValueCell = ({ value }) => {
    if (! value) {
        return '-';
    }

    const yesterdayDate = moment().subtract(1, "day").format("MM/DD/YYYY");
    const todayDate = moment().format("MM/DD/YYYY");
    const tomorrowDate = moment().add(1, "day").format("MM/DD/YYYY");

    if (value === yesterdayDate) {
        return "Yesterday";
    }
    if (value === todayDate) {
        return "Today";
    }
    if (value === tomorrowDate) {
        return "Tomorow";
    }

    return value;
};

export const sendMethodValueCell = (cell) => {
    const value = cell.value.charAt(0).toUpperCase() + cell.value.slice(1);

    let firstLog = cell.row.original.logs ? cell.row.original.logs[0] : null;
    let firstSharedDocument = cell.row.original.document?.document_shared ? cell.row.original.document.document_shared[0] : null;

    if (!firstLog && !firstSharedDocument) {
        return value;
    }

    const firstElement = getFirstElementFromLogsAndSharedDocuments(
        firstLog,
        firstSharedDocument,
    );

    if (!firstElement.log_type) {
        return value;
    }

    const comment = firstElement.comment;

    return (
        <div className="d-flex align-items-center gap-1">
            <span>{value}</span>
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip>
                        <div>{comment}</div>
                    </Tooltip>
                }>
                <div>
                    <HelpIcon />
                </div>
            </OverlayTrigger>
        </div>
    );
}

export const progressNoteLinkCell = ({ row, value }) => {
    return <a
        className='text-decoration-none'
        href={'/chart/' + value.patients_id + '?progress_note_id=' + value.id}
        target="_blank" rel="noreferrer"
    >View</a>
}

export const creditCardBadgeCell = ({ value }) => {
    let className = "red";
    let title = "No";

    if (value) {
        const now = moment();
        const expirationDate = moment().set({
            date: 1,
            month: value.exp_month - 1, // month number starts with 0 here. 1 is February, 2 is March etc.
            year: value.exp_year,
        });

        const formattedExpirationDate = expirationDate.format('MM/YY');

        if (expirationDate.clone().add(1, 'month').isSameOrBefore(now)) {
            className = "red";
            title = `Yes, expired ${formattedExpirationDate}`;
        } else if (expirationDate.isSameOrBefore(now)) {
            className = "yellow";
            title = `Yes, expires ${formattedExpirationDate}`;
        } else {
            className = "green";
            title = "Yes";
        }
    }

    return <CustomBadge title={title} className={className}/>;
};

export const reauthorizationRequestDocumentCell = ({row, value}) => {
    let title = "Not created";
    let className = "red";

    if (row.original.insurance_plan && !row.original.insurance_plan.requires_reauthorization_document) {
        title = "Not required";
        className = "yellow";
    } else if (value) {
        title = "Created";
        className = "green";
    }

    return <CustomBadge title={title} className={className}/>;
}

