import React from "react";
import TabMate from '../../components/TabMate';
import PatientRemovalRequests from './components/PatientRemovalRequests';
import { useSelector } from 'react-redux';
import PatientNoteUnlockRequests from './components/PatientNoteUnlockRequests';
import AppMainLayout from "../../layouts/AppMainLayout";
import CircleLoader from "../../components/CircleLoader";

const DoctorsRequestsDashboard = () => {
    const { patientRemovalRequests, patientNoteUnlockRequests } = useSelector(state => state.doctorsRequestsDashboard);

    const tabs = [
        {
            eventKey: 'patient_removal_requests',
            title: 'Removal Requests',
            numberOfRecords: patientRemovalRequests.tableParams.total,
            disabled: false,
            component: <PatientRemovalRequests />
        },
        {
            eventKey: 'patient_note_unlock_requests',
            title: 'Patient Note Unlock Requests',
            numberOfRecords: patientNoteUnlockRequests.tableParams.total,
            disabled: false,
            component: <PatientNoteUnlockRequests />
        },
    ];

    const isLoading = false;

    return (
        <AppMainLayout>
            <div className="container-fluid">
                {isLoading ? (
                    <CircleLoader absolute={true} />
                ) : (
                    <div className="dashboardCard d-flex flex-column flex-columm gap-2 p-3">
                        <h4>Doctors Requests</h4>
                        <TabMate
                            defaultActiveKey={tabs[0].eventKey}
                            tabs={tabs}
                            className="mb-2"
                        />
                    </div>
                )}
            </div>
        </AppMainLayout>
    );
}

export default DoctorsRequestsDashboard