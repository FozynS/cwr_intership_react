import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import classNames from "classnames";
import Patient from "../Patient";
import { getInquirablesWithoutActiveInquiries } from "../../../../../../api/pages/new-patients-dashboard-page";
import { setPatientsDataAC } from "../../../../../../store/reducers/newPatientsDashboard.reducer";
import styles from "./index.module.scss";

const ExistingPatientDialog = ({ searchQuery, setSelectedPatient, close }) => {
    const dispatch = useDispatch();

    const ref = useRef(null);

    const { patientsData } = useSelector((state) => state.newPatientsDashboard);

    useOnClickOutside(ref, () => close());

    const loadMorePatients = () => {
        const payload = {
            page: patientsData.pageIndex + 1,
            limit: patientsData.pageSize,
            search_query: searchQuery,
        };
        getInquirablesWithoutActiveInquiries(payload).then((res) => {
            const newPatients = Object.values(res.data.data);
            const list = [...patientsData.list, ...newPatients];
            dispatch(
                setPatientsDataAC({
                    data: {
                        ...patientsData,
                        list,
                        pageIndex: res.data.current_page,
                    },
                }),
            );
        });
    };

    const handleScroll = (e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        if (scrollHeight - scrollTop === clientHeight) {
            loadMorePatients();
        }
    };

    return (
        <div
            ref={ref}
            className={styles.existingPatientDialog}
            onScroll={handleScroll}>
            <div className="d-flex flex-column">
                {patientsData.list.length ? (
                    patientsData.list.map((patient) => (
                        <div
                            key={patient.id}
                            onClick={(e) => setSelectedPatient(patient)}>
                            <Patient patient={patient} />
                        </div>
                    ))
                ) : (
                    <div
                        className={classNames(styles.noData, "p-3 text-black")}>
                        No data
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExistingPatientDialog;
