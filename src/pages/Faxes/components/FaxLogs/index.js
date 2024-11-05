import React, {useContext, useEffect, useRef, useState} from "react"
import {Collapse, Spinner} from "react-bootstrap"
import {throttle} from "throttle-debounce"

import {ReactComponent as Chevron} from "../../../../assets/icons/chevron.svg"

import FaxPageContext from "../../../../contexts/FaxPageContext"

import {getFaxLogs} from "../../../../api/pages/faxes-page"

import style from './index.module.scss'
import {colorCondition} from "../../../../utilities/patientStatusColor";
import {changeTimeConvention} from "../../../../utilities/changeTimeConvention";

const formattedTime = (time) => {
  let datePart = time.split(' ')[0]
  let timePart = time.split(' ')[1]

  let formattedDatePart = datePart.replaceAll(':', '/')
  let formattedTimePart = timePart.split(':').slice(0, -1)

  let timeObject = {
    hours: formattedTimePart[0],
    minutes: formattedTimePart[1],
    getHours() {
      return this.hours
    },
    getMinutes() {
      return this.minutes
    }
  }

  let convertedTimeConvention = changeTimeConvention(timeObject)

  return `${formattedDatePart} ${convertedTimeConvention}`
}

const faxInfiniteLoading = (element, id, nextPage, setNextPage, setFaxLogs, total) => {
  if (element.scrollHeight - (element.scrollTop) === element.clientHeight) {
    if (nextPage <= total) {
      const request = throttle(1000,false, () => {
        getFaxLogs(id, nextPage).then((response) => {
          setNextPage(page => page + 1)
          setFaxLogs(logs => ({...logs, data: [...logs.data, ...response.data]}))
        })
      })
      request()
    }
  }
}

const toggleHandler = (row, setLogs, state, setState, setLoading, firstLoad, setFirstLoad) => {
  if (!state && firstLoad) {
    setLoading(true)
    getFaxLogs(row.id)
      .then((response) => {
        setLogs(response)
        setState((prevState) => !prevState)
      })
      .finally(() => {
        setLoading(false)
        setFirstLoad(false)
      })
  } else {
    setState((prevState) => !prevState)
  }
}

export const FaxLogs = (props) => {

  const {selectedRow, setFaxLogs} = useContext(FaxPageContext)

  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [nextPage, setNextPage] = useState(2)
  const [totalPages, setTotalPages] = useState(1)

  const infiniteList = useRef()

  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    setTotalPages(props.logs.meta?.last_page)
  }, [props.logs])

  useEffect(() => {

    const ref = infiniteList.current

    return () => {
      ref.scrollTop = 0
      setNextPage(2)
      setOpen(false)
      setFirstLoad(true)
    }
  }, [selectedRow])

  return (
    <div>

      <div className={`${style.logs} pb-0 p-3 pt-4 border-top`}>

        <div
          role="button"
          onClick={() => toggleHandler(selectedRow, setFaxLogs, open, setOpen, setLoading, firstLoad, setFirstLoad)}
          aria-controls="collapse-text"
          aria-expanded={open}
          className={'mb-4 text-primary'}
        >
          <div className={'d-flex align-items-center'}>

          <span className={'d-flex align-items-center'} style={{marginRight: '5px'}}>
            {
              open ? 'Hide logs' : 'Show logs'
            }
          </span>

            { loading
              ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
              : <Chevron style={{transform: open ? 'rotate(180deg)' : 'none'}} />
            }

          </div>

        </div>

        <Collapse in={open} className={style.collapse}>
          <div ref={infiniteList} onScroll={(event) => {
            faxInfiniteLoading(event.target, selectedRow.id, nextPage, setNextPage, setFaxLogs, totalPages)
          }}>
            <div id="collapse-text">
              { props.logs.data?.map(log => (
                <div key={log.id} className={style.singleLog}>
                  <p>{formattedTime(log.created_at)}</p>
                  <p>{log.user}</p>
                  <p className={style.test}>
                    {`${log.subject}${log.patient_id ? ' ' : ''}`}

                    { log.patient_id &&
                      <a
                        href={`/chart/${log.patient_id}`}
                        className={`${colorCondition(log.patient_status)} text-decoration-none d-inline-block`}
                      >{log.patient}</a>
                    }

                  </p>
                </div>
              ))
              }
            </div>
          </div>
        </Collapse>

      </div>
    </div>
  )
}