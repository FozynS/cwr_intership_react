import React, { forwardRef, useContext, useEffect } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useFlexLayout,
} from "react-table";

import { mdiMenuUp, mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";
import { ROW_NUMBER_COLUMN } from "../../../../constants";

import SmsPageContext from "../../../../contexts/SmsPageContext";
import NoData from "../../../../components/Table/components/NoData";
import DataIsLoading from "../../../../components/Table/components/DataIsLoading";

import classNames from "classnames";
import styles from "./index.module.scss";
import { setSmsAsRead } from "../../../../api/pages/sms-page";

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, isVerticallyCentered = false, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <div
        className={classNames(
          isVerticallyCentered && " d-flex align-items-center h-100"
        )}
      >
        <label
          style={{ padding: "8px" }}
          onClick={(event) => event.stopPropagation()}
        >
          <input
            className={"position-relative"}
            type="checkbox"
            ref={resolvedRef}
            {...rest}
          />
        </label>
      </div>
    );
  }
);

const PatientTable = ({
  columns,
  data,
  dataIsLoaded,
  pageSize = 10000,
  currentPage = 1,
  withCheckbox,
  checkboxVerticallyCentered = false,
  className = "default",
  rowIsClickable = false,
  showLabelNotLoaded = false,
  labelNotLoaded = "",
  options = {
    applyMinHeightToHeader: false,
  },
}) => {
  const {
    initialPatientData,
    isLoading,
    selectedRow,
    setSelectedRow,
    setUnreadCount,
    setMarkedRows,
  } = useContext(SmsPageContext);

  const rowSelectHandler = (row) => {
    if (rowIsClickable) {
      setSelectedRow(row);
      if (!row.is_read) {
        setSmsAsRead(row).then((response) => {
          if (response.status === 200) {
            initialPatientData.find(
              (item) => item.id === row.id
            ).is_read = true;
            setUnreadCount((count) => count - 1);
          }
        });
      }
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    setSortBy,
    selectedFlatRows,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: pageSize,
        pageIndex: currentPage - 1,
        sortBy: [],
      },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    useFlexLayout,
    (hooks) => {
      withCheckbox &&
        hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            minWidth: 35,
            width: 35,
            isVerticallyCentered: true,
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox
                {...getToggleAllRowsSelectedProps()}
                isVerticallyCentered={checkboxVerticallyCentered}
              />
            ),
            Cell: ({ row }) => (
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                isVerticallyCentered={checkboxVerticallyCentered}
              />
            ),
          },
          ...columns,
        ]);
    }
  );

  const goToPage = (targetPage) => {
    const pagesToMove = targetPage - state.pageIndex - 1;
    if (pagesToMove === 0) {
      return;
    }

    if (pagesToMove > 0) {
      for (let i = 0; i < pagesToMove; i++) {
        nextPage();
      }
    } else if (pagesToMove < 0) {
      for (let i = 0; i < -pagesToMove; i++) {
        previousPage();
      }
    }
    setSortBy(state.sortBy);
  };

  useEffect(() => {
    goToPage(currentPage);
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (withCheckbox) {
      setMarkedRows(selectedFlatRows);
    }
  });

  const checkSorting = () => {
    let hasSorting = true;
    for (let i = 0; i < columns.length; i++) {
      if (!columns[i].disableSortBy) {
        hasSorting = false;
        break;
      }
    }
    return hasSorting;
  };
  const hasSorting = checkSorting();

  const unread = (row) => (row.is_read === false ? "unread" : "");
  const selected = (row) => (row.id === selectedRow?.id ? "selected" : "");
  const archived = (row) => (row.is_archived === false ? "archived" : "");

  return (
    <>
      <table
        {...getTableProps()}
        className={classNames(
          "table mb-0",
          styles[className],
          isLoading ? "pe-none opacity-50" : "opacity-100"
        )}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                const headerProps = {
                  ...column.getHeaderProps(column.getSortByToggleProps()),
                };

                if (headerProps.key === `header_${ROW_NUMBER_COLUMN}`) {
                  headerProps.style.flex = "none";
                }

                if (withCheckbox && index === 0) {
                  return (
                    <th className={"p-0"} {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                } else {
                  return (
                    <th
                      className={classNames(
                        "d-flex align-items-center justify-content-between ps-2",
                        hasSorting ? "p-2" : "p-0",
                        options.applyMinHeightToHeader && styles.extendedHeight
                      )}
                      {...headerProps}
                    >
                      <div>{column.render("Header")}</div>
                      {column.canSort && (
                        <div className="d-flex flex-column gap-0">
                          <Icon
                            path={mdiMenuUp}
                            size={1}
                            style={{
                              marginBottom: "-12px",
                            }}
                            color={
                              column.isSorted && !column.isSortedDesc
                                ? "#2D85C9"
                                : "#B8B8B8"
                            }
                          />
                          <Icon
                            path={mdiMenuDown}
                            size={1}
                            color={
                              column.isSorted && column.isSortedDesc
                                ? "#2D85C9"
                                : "#B8B8B8"
                            }
                          />
                        </div>
                      )}
                    </th>
                  );
                }
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {dataIsLoaded ? (
            data.length === 0 ? (
              <NoData />
            ) : (
              page.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => rowSelectHandler(row.original)}
                    className={classNames(
                      row.original.row_class_name,
                      unread(row.original),
                      selected(row.original),
                      archived(row.original)
                    )}
                  >
                    {row.cells.map((cell, index) => {
                      let cellProperties = cell.getCellProps();
                      const borderBottom =
                        rowIndex + 1 === page.length ? "none" : "";

                      cellProperties.style.borderBottom = borderBottom;

                      if (withCheckbox && index === 0) {
                        return (
                          <td
                            className={"p-0 align-items-center"}
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      } else if (cell.column.id === ROW_NUMBER_COLUMN) {
                        const rowValue =
                          state.pageIndex === 0
                            ? rowIndex + 1
                            : pageSize * state.pageIndex + rowIndex + 1;
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              borderBottom,
                              width: cellProperties.style.width,
                            }}
                          >
                            {rowValue}
                          </td>
                        );
                      } else {
                        if (cell.column.isLink && cell.value !== null) {
                          return (
                            <td {...cell.getCellProps()}>
                              <div className={"d-flex align-items-center"}>
                                <a
                                  type={"button"}
                                  className={`${cell.column.textColor(
                                    row.original
                                  )} text-decoration-none`}
                                  href={cell.column.link(row.original)}
                                >
                                  {cell.value}
                                </a>

                                {cell.render("Cell")}
                              </div>
                            </td>
                          );
                        } else {
                          return (
                            <td {...cellProperties}>
                              <div
                                className={classNames(
                                  cell.column.isVerticallyCentered &&
                                    "d-flex align-items-center h-100"
                                )}
                              >
                                {cell.render("Cell")}
                              </div>
                            </td>
                          );
                        }
                      }
                    })}
                  </tr>
                );
              })
            )
          ) : (
            <DataIsLoading
              showLabelNotLoaded={showLabelNotLoaded}
              labelNotLoaded={labelNotLoaded}
            />
          )}
        </tbody>
      </table>
    </>
  );
};

export default PatientTable;
