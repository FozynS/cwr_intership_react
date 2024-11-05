import React from "react";

const UnassignPatientAlert = ({patientData}) => {
    return (
        <div className="alert alert-danger mb-0" role="alert">
            The therapist has {patientData.drafts_count} draft progress note{patientData.drafts_count > 1 ? 's' : ''} and {patientData.missing_notes_count} missing progress note{patientData.missing_notes_count > 1 ? 's' : ''}. Make sure that all progress notes have been finalized before you proceed
        </div>
    );
}

export default UnassignPatientAlert;