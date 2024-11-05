import React from "react";

const SurveyAppointmentsInfo = ({ appointments }) => {
    return (
        <div>
            <h5>Appointment info</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Provider Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.date_of_service.date}</td>
                                <td>{appointment.date_of_service.time}</td>
                                <td>{appointment.provider.provider_name}</td>
                                <td>{appointment.status.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div
                                    className="text-primary spinner-border spinner-border-md"
                                    role="status"></div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SurveyAppointmentsInfo;
