import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";

import { getAllSms } from "../../api/pages/sms-page";

import SmsPageContext from "../../contexts/SmsPageContext";

import AppMainLayout from "../../layouts/AppMainLayout";

import { initialTableParams } from "../../constants/faxes";

import Pagination from "../../components/Pagination";
import SmsList from "./components/SmsList";
import ToolsBar from "./components/ToolsBar";

const SmsFromPatient = () => {
  const [initialPatientData, setInitialPatientData] = useState([]);
  const [patientParams, setPatientParams] = useState(initialTableParams);

  const [currentPage, setCurrentPage] = useState(1);
  
  const [activeTab, setActiveTab] = useState("unread");
  const [unreadCount, setUnreadCount] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);
  const [markedRows, setMarkedRows] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const inbound = 1;

  const updateData = (response) => {
    const data = response.data;
    if (response && response.status === 200 && data.data?.length) {
      const newData = validData(response);
      setInitialPatientData(newData);
      setPatientParams({
        from: data.from,
        to: data.to,
        last_page: data.last_page || initialTableParams.last_page,
        per_page: data.per_page || initialTableParams.per_page,
        total: data.total,
        path: data.path,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
      });
      setSelectedRow(
        data.data.find((row) => row.id === selectedRow?.id)
      );
    } else {
      setInitialPatientData([]);
      setPatientParams(initialTableParams);
    }
  };

  const validData = (response) => {
    const validData = response.data.data
    .map((response) => response || [])
    .filter((item) => item.direction === inbound)
    .map((item) => ({
      ...item,
      is_read: item.is_read === 0 ? false : true,
      is_archived: item.is_archived === 0 ? false : true,
    }))

    return validData
  };


  useEffect(() => {
    setIsLoading(true);
  
    getAllSms(currentPage, activeTab)
    .then((response) => {
      if (response.status === 200) {
        updateData(response);
      }
      if (response.status === 401) {
        document.location.href = "/login";
      }
    })
    .catch((error) => {
      throw Error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });

  }, [currentPage, activeTab]);  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const unreadCount = initialPatientData.reduce((count, item) => {
      return count + (item.is_read ? 0 : 1);
    }, 0);

    setUnreadCount(unreadCount);
  }, [initialPatientData]);

  return (
    <SmsPageContext.Provider
      value={{
        initialPatientData,
        setInitialPatientData,
        patientParams,
        setPatientParams,
        currentPage,
        setCurrentPage,
        activeTab,
        setActiveTab,
        unreadCount,
        setUnreadCount,
        selectedRow,
        setSelectedRow,
        markedRows,
        setMarkedRows,
        isLoading,
        setIsLoading,
        updateData,
      }}
    >
      <AppMainLayout>
        <Container>
          <div
            className={
              "d-flex justify-content-between bg-white border border-1 rounded rounded-3 p-1 mb-4"
            }
          >
            <ToolsBar />
          </div>

          <Col className={"d-flex flex-column bg-white border rounded-5 p-3"}>
            <div className={"h-100"}>
              <SmsList />
            </div>

            <div
              className={
                patientParams.last_page > 1
                  ? "ms-auto mt-4"
                  : "ms-auto mt-4 opacity-50"
              }
            >
              <Pagination
                params={patientParams}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                activeTab={activeTab}
                loading={isLoading}
              />
            </div>
          </Col>
        </Container>
      </AppMainLayout>
    </SmsPageContext.Provider>
  );
};

export default SmsFromPatient;
