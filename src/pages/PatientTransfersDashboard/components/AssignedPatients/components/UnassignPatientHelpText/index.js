import React from "react";

const UnassignPatientHelpText = ({patientData, supervisor}) => {
    const warnings = [];

    if (patientData.patient_status.status === 'Lost' && patientData.visits_count) {
        warnings.push(`The patient’s status is “Lost“ and the therapist has a completed appointment with the patient.`);
    }
    if (patientData.missing_notes_count) {
        warnings.push(`The therapist has ${patientData.missing_notes_count} missing progress note${patientData.missing_notes_count > 1 ? 's' : ''}.`);
    }
    if (patientData.upcoming_appointments_count) {
        warnings.push(`Upcoming appointments with selected provider will be deleted`);
    }
    if (supervisor) {
        warnings.push(`Supervisor ${supervisor.provider?.provider_name} will be unassigned`);
    }

    if (warnings.length === 0) {
        return null;
    }

    return (
        <div className={'text-danger'}>
            Warnings:
            <ul className={'ps-4'}>
                {warnings.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default UnassignPatientHelpText;