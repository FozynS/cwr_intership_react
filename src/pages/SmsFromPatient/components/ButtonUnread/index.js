import { useContext } from "react";
import { Button } from "react-bootstrap";
import SmsPageContext from "../../../../contexts/SmsPageContext";
import { setSmsAsUnread } from "../../../../api/pages/sms-page";

const ButtonUnread = () => {
  const { selectedRow, markedRows, setIsLoading } = useContext(SmsPageContext);

  const unreadButtonHandler = () => {
    if (!markedRows.length && selectedRow) {
      setSmsAsUnread([selectedRow])
        .then((response) => {
          if (response.status === 200) {
            selectedRow.is_read = false;
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
      setSmsAsUnread([...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [...markedArray];
            changedRowArray.forEach((row) => {
              row.is_read = false;
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
      setSmsAsUnread([selectedRow, ...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [selectedRow, ...markedArray];
            changedRowArray.forEach((row) => {
              row.is_read = false;
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
          markedRows.forEach((row) => row.toggleRowSelected());
        });
    }
  };

  const unreadButtonCounter = () => {
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
      className={"d-flex align-items-center text-body me-2"}
      onClick={unreadButtonHandler}
      variant={"outline-secondary"}
      disabled={!(selectedRow || markedRows.length)}
    >
      <span>Mark as unread</span>
      <div className={"ms-1"}>{unreadButtonCounter()}</div>
    </Button>
  );
};

export default ButtonUnread;
