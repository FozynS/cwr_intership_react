import React, { useContext } from 'react'
import { ButtonToolbar } from "react-bootstrap"

import FaxPageContext from "../../../../contexts/FaxPageContext"

import { getFaxes } from "../../../../api/pages/faxes-page";

import ButtonUnread from "../ButtonUnread"
import ButtonAssign from "../ButtonAssign"
import ButtonOptions from "../ButtonOptions"
import ToggleSwitch from '../../../../components/ToggleSwitch/index';

const ToolsBar = () => {

  const {
    activeTab,
    setActiveTab,
    selectedRow,
    markedRows,
    unreadCount,
    updateData,
    setLoading,
    setButtonBackState,
  } = useContext(FaxPageContext)

  const buttonAssignCondition = () => {
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
    setLoading(true)
    getFaxes(value, 1)
      .then(response => {
        if (response.status === 200) {
          updateData(response)
        } else {
          updateData(response)
        }
      })
      .finally(() => {
        setLoading(false)
        setButtonBackState(false)
      })
  }

  return (
    <>
      <ButtonToolbar>
        <ToggleSwitch type="radio"
          name="tabs-buttons"
          value={activeTab}
          onChange={changeTabHandler}
          buttons={[
            { id: "tab-btn-1", value: "all", label: "All Faxes" },
            { id: "tab-btn-2", value: "unread", label: "Unread", counter: unreadCount },
            { id: "tab-btn-3", value: "unassigned", label: "Unassigned" },
          ]}
          className='faxes'
        />

      </ButtonToolbar>

      <ButtonToolbar>

        <ButtonAssign state={buttonAssignCondition()} />

        <ButtonUnread state={buttonUnreadCondition()} />

        <ButtonOptions state={!selectedRow} />

        <a
          type={'button'}
          rel="noreferrer"
          target={'_blank'}
          title={'How to use Faxes?'}
          className={'d-flex align-items-center text-body ms-2 btn btn-outline-secondary'}
          href={'https://cwr.zendesk.com/hc/en-us/articles/4413923854866-How-to-use-Faxes'}
        >
          ?
        </a>

      </ButtonToolbar>
    </>
  )
}

export default ToolsBar