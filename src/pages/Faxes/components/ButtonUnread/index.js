import React, {useContext} from 'react'
import {Button} from "react-bootstrap"
import {getUnreadCount, setFaxAsUnread} from "../../../../api/pages/faxes-page"
import FaxPageContext from "../../../../contexts/FaxPageContext"

const ButtonUnread = () => {

  const {
    selectedRow,
    markedRows,
    setLoading,
    setUnreadCount
  } = useContext(FaxPageContext)

  const unreadButtonHandler = () => {
    setLoading(true)
    if (!markedRows.length && selectedRow) {
      setFaxAsUnread([selectedRow])
      .then((response) => {
          if (response.status === 200) {
            selectedRow.is_read = false
            getUnreadCount().then((response) => {
              setUnreadCount(response.data.meta.total)
            })
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }

    if (markedRows.length && !selectedRow) {
      let markedArray = []
      markedRows.forEach(row => {markedArray.push(row.original)})
      setFaxAsUnread([...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [...markedArray]
            changedRowArray.forEach(row => {
              row.is_read = false
            })
            getUnreadCount().then((response) => {
              setUnreadCount(response.data.meta.total)
            })
          }
        })
        .finally(() => {
          setLoading(false)
          markedRows.forEach(row => row.toggleRowSelected())
        })
    }

    if (markedRows.length && selectedRow) {
      let markedArray = []
      markedRows.forEach(row => {markedArray.push(row.original)})
      setFaxAsUnread([selectedRow, ...markedArray])
        .then((response) => {
          if (response.status === 200) {
            let changedRowArray = [selectedRow, ...markedArray]
            changedRowArray.forEach(row => {
              row.is_read = false
            })
            getUnreadCount().then((response) => {
              setUnreadCount(response.data.meta.total)
            })
          }
        })
        .finally(() => {
          setLoading(false)
          markedRows.forEach(row => row.toggleRowSelected())
        })
    }
  }

  const unreadButtonCounter = () => {
    const includeSelected = markedRows.filter(row => row.original === selectedRow)

    if (markedRows.length && selectedRow && !includeSelected.length) {
      return `(${markedRows.length + 1})`
    }

    if (markedRows.length && selectedRow && includeSelected.length) {
      return `(${markedRows.length})`
    }

    if (!selectedRow && markedRows.length) {
      return `(${markedRows.length})`
    }

    if (!markedRows.length && selectedRow) {
      return `(${1})`
    }
  }

  return (
    <Button
      className={'d-flex align-items-center text-body me-2'}
      onClick={unreadButtonHandler}
      variant={"outline-secondary"}
      disabled={!(selectedRow || markedRows.length)}
    >
      <span>Mark as unread</span>
      <div className={'ms-1'}>
        { unreadButtonCounter() }
      </div>
    </Button>
  )
}

export default ButtonUnread