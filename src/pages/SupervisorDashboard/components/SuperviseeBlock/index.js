import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import styles from "./index.module.scss";
import { getInquirableFullname } from "../../../../utilities/newPatientsCrmUtils";
import Table from "../../../../components/Table";
import { useSelector } from "react-redux";

const SuperviseeBlock = ({ supervisee }) => {
    const { tableColumns } = useSelector((state) => state.supervisorDashboard);

    const [tableData, setTableData] = useState(null);

    const getTableData = () => {
        const patients = supervisee.provider && supervisee.provider.patients ? supervisee.provider.patients : [];
        return patients.map((patient) => ({
            id: patient.id,
            patient_id: patient.id,
            patient_name: getInquirableFullname(patient),
            patient_status: patient.status,
            patient_insurance: patient.insurance
                ? patient.insurance.insurance
                : "-",
            count_visits: patient.appointments_count,
            date_of_last_visit: patient.last_appointment
                ? patient.last_appointment.date_of_service.date
                : "-",
            date_of_assignment: patient.date_of_assignment,
        }));
    };

    useEffect(() => {
        if (supervisee) {
            setTableData(getTableData());
        }
    }, [supervisee]);

    if (!tableData) {
        return <></>;
    }

    return (
        <Accordion className={styles.accordion}>
            <Accordion.Item eventKey={supervisee.id}>
                <Accordion.Header className={styles.header}>
                    <div className="d-flex gap-1">
                        <div className="fw-bold">
                            {supervisee.provider.provider_name}
                        </div>
                        <div>
                            (Patients: {supervisee.provider.patients.length})
                        </div>
                        {supervisee.provider.user.deleted_at &&
                            <div className={'text-danger'}>Access suspended</div>
                        }
                    </div>
                </Accordion.Header>
                <Accordion.Body className={styles.body}>
                    <div className="dashboard-table-wrapper">
                        <Table
                            pageSize={1000}
                            columns={tableColumns}
                            data={tableData}
                            dataIsLoaded={!!tableData}
                        />
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default SuperviseeBlock;
