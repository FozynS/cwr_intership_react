import { useContext } from "react";
import { ButtonToolbar } from "react-bootstrap";

import SmsPageContext from "../../../../contexts/SmsPageContext";

import ToggleSwitch from "../../../../components/ToggleSwitch";
import ButtonRead from "../ButtonRead";
import ButtonUnread from "../ButtonUnread";
import ButtonArchived from "../ButtonArchived";
import { getAllSms } from "../../../../api/pages/sms-page";

const ToolsBar = () => {
  const {
    activeTab,
    setActiveTab,
    unreadCount,
    updateData,
    selectedRow,
    markedRows,
    setIsLoading,
  } = useContext(SmsPageContext);

  const buttonReadCondition = () => {
    if (selectedRow && !markedRows.length) {
      return false
    }
    return true
  }

  const buttonUnreadCondition = () => {
    if (markedRows.length && selectedRow === null && markedRows.length === 1) {
      return false
    }
    if (selectedRow && markedRows.length === 0) {
      return false
    }
    return true
  }

  const changeTabHandler = (value) => {
    setActiveTab(value)
    setIsLoading(true)
    getAllSms(value, 1)
      .then(response => {
        if (response.status === 200) {
          updateData(response)
        } else {
          updateData(response)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <ButtonToolbar>
        <ToggleSwitch
          type="radio"
          name="tabs-buttons"
          value={activeTab}
          onChange={changeTabHandler}
          buttons={[
            { id: "tab-btn-1", value: "all", label: "All SMS" },
            {
              id: "tab-btn-2",
              value: "unread",
              label: "Unread",
              counter: unreadCount,
            },
            { id: "tab-btn-3", value: "archived", label: "Archived" },
          ]}
          className="sms"
        />
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonRead state={buttonReadCondition()}/>
        <ButtonUnread state={buttonUnreadCondition()}/>
        <ButtonArchived />
      </ButtonToolbar>
    </>
  );
};

export default ToolsBar;
