import { useContext, useMemo } from "react";
import SmsPageContext from "../../../../contexts/SmsPageContext";
import PatientTable from "../PatientTable";
import { changeDateInfo } from "../../../../utilities/changeDateInfo";


const SmsList = () => {
  const { initialPatientData, patientParams } = useContext(SmsPageContext);
  
  const columns = useMemo(() => [
    {
      Header: "Patient's Name",
      accessor: "from_number",
      width: 130,
    },
    {
      Header: "Text",
      accessor: "message_body",
      width: 250,
      isVerticallyCentered: true,
    },
    {
      Header: "Created At",
      accessor: "created_at",
      Cell: ({ value }) => changeDateInfo(value),
      width: 150,
      isVerticallyCentered: true,
    },
    {
      Header: "Notified Providers",
      accessor: "author",
      width: 130,
      disableSortBy: true,
      isVerticallyCentered: true,
    },
    {
      Header: "Admin Views",
      width: 70,
      disableSortBy: false,
      isVerticallyCentered: true,
    },
  ], [])


  return (
    <>
      <PatientTable
        pageSize={patientParams.per_page}
        dataIsLoaded={true}
        columns={columns}
        data={initialPatientData ? initialPatientData : []}
        withCheckbox={true}
        checkboxVerticallyCentered={true}
        className="sms"
        rowIsClickable={true}
      />
    </>
  );
};

export default SmsList;
