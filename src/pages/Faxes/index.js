import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";

import AppMainLayout from "../../layouts/AppMainLayout";

import FaxPageContext from "../../contexts/FaxPageContext";

import ToolsBar from "./components/ToolsBar";
import FaxList from "./components/FaxList";
import FaxView from "./components/FaxView";
import Pagination from "../../components/Pagination";

import { getFaxes, getUnreadCount } from "../../api/pages/faxes-page";

import { initialTableParams } from "../../constants/faxes";

import style from "./index.module.scss";

const Faxes = () => {
  const [tableData, setTableData] = useState([]);
  const [tableParams, setTableParams] = useState(initialTableParams);

  const [activeTab, setActiveTab] = useState("all");
  const [previousTab, setPreviousTab] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState(null);

  const [unreadCount, setUnreadCount] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);

  const [markedRows, setMarkedRows] = useState([]);

  const [searchBarState, setSearchBarState] = useState(true);
  const [buttonBackState, setButtonBackState] = useState(false);

  const [faxLogs, setFaxLogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const [pdfFile, setPdfFile] = useState("");

  const updateData = (response) => {
    if (response && response.status === 200 && response.data.faxes?.length) {
      setTableData(response.data.faxes);
      setTableParams(response.data.meta);
      setSelectedRow(
        response.data.faxes.find((row) => row.id === selectedRow?.id)
      );
    } else {
      setTableData([]);
      setTableParams(initialTableParams);
    }
  };

  useEffect(() => {
    setLoading(true);
    getFaxes(activeTab, currentPage)
      .then((response) => {
        if (response.status === 200) {
          updateData(response);
        }
        if (response.status === 401) {
          document.location.href = "/login";
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getUnreadCount(currentPage).then((response) => {
      if (response.status === 200 && response.data && response.data.meta) {
        setUnreadCount(response.data.meta.total);
      } else {
        setUnreadCount(0);
      }
    });
  }, [tableData, currentPage, activeTab]);


  return (
    <FaxPageContext.Provider
      value={{
        tableParams,
        tableData,
        setTableData,
        setTableParams,
        activeTab,
        setActiveTab,
        previousTab,
        setPreviousTab,
        searchParams,
        setSearchParams,
        currentPage,
        setCurrentPage,
        searchBarState,
        setSearchBarState,
        buttonBackState,
        setButtonBackState,
        selectedRow,
        setSelectedRow,
        markedRows,
        setMarkedRows,
        unreadCount,
        faxLogs,
        setFaxLogs,
        loading,
        setLoading,
        setUnreadCount,
        updateData,
        pdfFile,
        setPdfFile,
      }}
    >
      <AppMainLayout>
        <Container className={style.container} fluid>
          <div
            className={
              "d-flex justify-content-between bg-white border border-1 rounded rounded-3 p-1 mb-4"
            }
          >
            <ToolsBar />
          </div>

          <div className={"d-flex gap-4 w-100"}>
            <Col className={"d-flex flex-column bg-white border rounded-5 p-3"}>
              <div className={"h-100"}>
                <FaxList />
              </div>

              <div
                className={
                  tableParams.last_page > 1
                    ? "ms-auto mt-4"
                    : "ms-auto mt-4 opacity-50"
                }
              >
                <Pagination
                  params={tableParams}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  activeTab={activeTab}
                  loading={loading}
                />
              </div>
            </Col>

            <Col className={"bg-white border rounded-5 overflow-hidden"}>
              <FaxView />
            </Col>
          </div>
        </Container>
      </AppMainLayout>
    </FaxPageContext.Provider>
  );
};

export default Faxes;
