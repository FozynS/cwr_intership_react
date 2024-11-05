import { useContext } from "react";
import { Button } from "react-bootstrap";
import SmsPageContext from "../../../../contexts/SmsPageContext";
import { setSmsAsRead } from "../../../../api/pages/sms-page";

const ButtonRead = () => {
  const { selectedRow, markedRows, setIsLoading } = useContext(SmsPageContext);

  const readButtonHandler = () => {
    if (!markedRows.length && selectedRow) {
      setSmsAsRead([selectedRow])
        .then((response) => {
          if (response.status === 200) {
            selectedRow.is_read = true;
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
      setSmsAsRead([...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [...markedArray];
            changedRowArray.forEach((row) => {
              row.is_read = true;
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
      setSmsAsRead([selectedRow, ...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [selectedRow, ...markedArray];
            changedRowArray.forEach((row) => {
              row.is_read = true;
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
          markedRows.forEach((row) => row.toggleRowSelected());
        });
    }
  };

  const readButtonCounter = () => {
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
      onClick={readButtonHandler}
      variant={"outline-primary"}
      disabled={!(selectedRow || markedRows.length)}
    >
      <span>Mark as read</span>
      <div className={"ms-1"}>{readButtonCounter()}</div>
    </Button>
  );
};

export default ButtonRead;
