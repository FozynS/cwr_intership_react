import React, {useContext} from 'react'
import {debounce} from "throttle-debounce"

import FaxPageContext from "../../../../contexts/FaxPageContext"
import {getFaxes, searchFaxesByPatient} from "../../../../api/pages/faxes-page";
import InputSearch from "../../../../components/Inputs/InputSearch";
import NotificationsContext from "../../../../contexts/NotificationsContext";

const SearchBar = () => {

  const {
    activeTab,
    searchBarState,
    setTableData,
    setTableParams,
    setLoading,
    updateData
  } = useContext(FaxPageContext)

  const {enqueueNotification} = useContext(NotificationsContext)

  const inputHandler = (value) => {
    if (value.trim().length) {
      searchFaxesByPatient(value.trim(), activeTab).then(response => {
        setLoading(true)
        if (response.status === 404) {
          setTableData([])
          setTableParams({current_page: 1, last_page: 1, per_page: 15})
          enqueueNotification('', `Search result is empty`)
        } else {
          updateData(response)
        }
      }).finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(true)
      getFaxes(activeTab, 1).then((response) => {
        updateData(response)
        setLoading(false)
      })
    }
  }

  const debounceInputHandler = debounce(300, inputHandler)

  return (
    <>
      { searchBarState &&
        <div className={'d-flex align-items-center gap-3'}>
          <span className={'d-flex flex-shrink-0'}>Search by patient’s name:</span>
          <InputSearch
            type="text"
            placeholder={'Start typing name...'}
            handelChange={debounceInputHandler}
          />
        </div>
      }
    </>
  )
}

export default SearchBar