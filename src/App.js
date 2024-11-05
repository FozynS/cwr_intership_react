import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Faxes from "./pages/Faxes";
import SecretaryDashboard from "./pages/SecretaryDashboard";
import NewPatientsDashboard from "./pages/NewPatientsDashboard";
import AreYouStillHereModal from "./components/Modals/AreYouStillHereModal";
import {
  setQueryParamsAC,
  setUserAC,
  setUserDataIsOnlyAdminAC,
  setUserDataIsLoadedIsOnlyAdminAC,
} from "./store/reducers/app.reducer";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import ReauthorizationRequestsDashboard from "./pages/ReauthorizationRequestsDashboard";
import { getUserInfo, getUserOnlyAdmin } from "./api/common/user";
import DoctorsRequestsDashboard from "./pages/DoctorsRequestsDashboard";
import PatientTransfersDashboard from "./pages/PatientTransfersDashboard";
import SmsFromPatient from "./pages/SmsFromPatient";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { user, userData } = useSelector((state) => state.app);

  const updateQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);

    const queryParams = {};
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    dispatch(setQueryParamsAC({ data: queryParams }));
  };

  useEffect(() => {
    getUserInfo().then((res) => dispatch(setUserAC({ user: res.data })));

    if (!userData.isLoadedIsOnlyAdmin) {
      getUserOnlyAdmin()
        .then((response) => {
          dispatch(setUserDataIsOnlyAdminAC({ value: !!response.data }));
        })
        .finally(() => {
          dispatch(setUserDataIsLoadedIsOnlyAdminAC({ value: true }));
        });
    }
  }, []);

  useEffect(() => {
    updateQueryParams();
  }, [location.search]);

  if (!user) {
    return <>Error</>;
  }

  return (
    <>
      <Routes>
        <Route path="/sms-from-patients" element={<SmsFromPatient />} />
        <Route path="/faxes" element={<Faxes />} />
        <Route path="/secretary-dashboard" element={<SecretaryDashboard />} />
        <Route
          path="/new-patients-dashboard"
          element={<NewPatientsDashboard />}
        />
        <Route path="/supervisor-dashboard" element={<SupervisorDashboard />} />
        <Route
          path="/dashboard/reauthorization-request"
          element={<ReauthorizationRequestsDashboard />}
        />
        <Route
          path="/dashboard/doctors-requests"
          element={<DoctorsRequestsDashboard />}
        />
        <Route
          path="/dashboard/patients-management"
          element={<PatientTransfersDashboard />}
        />
      </Routes>
      <AreYouStillHereModal />
    </>
  );
};

export default App;
