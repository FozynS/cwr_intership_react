import React from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar";
import ImportantForToday from "./components/ImportantForToday";
import NewLostPatients from "./components/NewLostPatients";
import AppMainLayout from "../../layouts/AppMainLayout";
import styles from "./index.module.scss";
import { getRingCentralNumbers } from '../../api/common/ringCentral';
import { setRingCentralNumbersAC } from '../../store/reducers/app.reducer';

const SecretaryDashboard = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        getRingCentralNumbers()
            .then(({ data }) => {
                dispatch(setRingCentralNumbersAC({ numbers: data }));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <AppMainLayout>
            <div className={`container-fluid ${styles.secretaryDashboard}`}>
                <div className="row">
                    <div className='col-3'>
                        <Sidebar />
                    </div>

                    <div className="col-9 d-flex flex-column gap-3">
                        <ImportantForToday />
                        <NewLostPatients />
                    </div>
                </div>
            </div>
        </AppMainLayout>
    );
};

export default SecretaryDashboard;
