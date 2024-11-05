import { Button } from "react-bootstrap";
import { useContext } from "react";

import SmsPageContext from "../../../../contexts/SmsPageContext";
import { setSmsAsArchived } from "../../../../api/pages/sms-page";

const ButtonArchived = () => {
  const {
    setIsLoading,
    activeTab,
    selectedRow,
    markedRows,
  } = useContext(SmsPageContext);


  const toggleArchiveButtonHandler = () => {
    if (!markedRows.length && selectedRow) {
      setSmsAsArchived([selectedRow])
        .then((response) => {
          if (response.status === 200) {
            selectedRow.is_archived = !selectedRow.is_archived;
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (markedRows.length && !selectedRow) {
      let markedArray = [];
      markedRows.forEach((row) => {
        markedArray.push(row.original);
      });
      setSmsAsArchived([...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [...markedArray];
            changedRowArray.forEach((row) => {
              row.is_archived = !row.is_archived;
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
          markedRows.forEach((row) => row.toggleRowSelected());
        });
    }

    if (markedRows.length && selectedRow) {
      let markedArray = [];
      markedRows.forEach((row) => {
        markedArray.push(row.original);
      });
      setSmsAsArchived([selectedRow, ...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [selectedRow, ...markedArray];
            changedRowArray.forEach((row) => {
              row.is_archived = !row.is_archived;
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
          markedRows.forEach((row) => row.toggleRowSelected());
        });
    }
  };

  const archivedButtonCounter = () => {
    const includeSelected = markedRows.filter(
      (row) => row.original === selectedRow
    );

    if (markedRows.length && selectedRow && !includeSelected.length) {
      return `(${markedRows.length + 1})`;
    }

    if (markedRows.length && selectedRow && includeSelected.length) {
      return `(${markedRows.length})`;
    }

    if (!selectedRow && markedRows.length) {
      return `(${markedRows.length})`;
    }

    if (!markedRows.length && selectedRow) {
      return `(${1})`;
    }
  };

  return (
    <Button
      className={"d-flex align-items-center me-2"}
      onClick={toggleArchiveButtonHandler}
      variant={"outline-danger"}
      disabled={!(selectedRow || markedRows.length)}
    >
      <span>{activeTab === 'archived' ? 'Unarchive' : 'Archive'}</span>
      <div className={"ms-1"}>
        { archivedButtonCounter() }
      </div>
    </Button>
  );
};

export default ButtonArchived;
