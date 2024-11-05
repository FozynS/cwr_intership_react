import React, {useContext, useEffect, useState} from 'react'
import {Toast, ToastContainer} from "react-bootstrap"

import NotificationsContext from '../../contexts/NotificationsContext'

import {ReactComponent as Success} from "../../assets/icons/success.svg";
import {ReactComponent as Error} from "../../assets/icons/error.svg";

import style from "./index.module.scss"
import classNames from "classnames";

const Notification = ({id, type, message}) => {

  const {dequeueNotification} = useContext(NotificationsContext)

  const [show, setShow] = useState(false)

  const handleRemove = () => dequeueNotification(id)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    //<Toast className={`${style.toast}`} show={show} delay={5000} onClose={handleRemove} >
    <Toast className={classNames(style.toast, type === 'Error' ? style.toastError : '')} show={show} delay={5000} onClose={handleRemove} autohide>

      <Toast.Header className={style.toastHeader}>
        {type === 'Error' ?
          <Error className={style.toastIcon} /> :
          <Success className={style.toastIcon} />
        }
        {type !== 'Error' ?? <strong className={classNames(style.toastHeaderTitle, 'me-auto')}>{type}</strong>}
      </Toast.Header>
      <Toast.Body className={style.toastBody}>
        {message}
      </Toast.Body>

    </Toast>
  )
}

const NotificationsContainer = () => {

  const {notificationsQueue} = useContext(NotificationsContext)

  return (
    <ToastContainer position="bottom-end" className="p-3">
      {
        notificationsQueue.map(notification => (
          <Notification
            key={notification.id}
            id={notification.id}
            type={notification.type}
            message={notification.message}
          />
        ))
      }
    </ToastContainer>
  )
}

const NotificationsProvider = ({children}) => {

  const [notificationsQueue, setNotificationsQueue] = useState([])

  const add = (type, message) => {
    const notification = { id: Date.now(), type, message }
    setNotificationsQueue(notifications => [...notifications, notification])
  }
  const remove = (id) => {
    setNotificationsQueue(queue => [...queue.filter(notification => notification.id !== id)])
  }

  return (
    <NotificationsContext.Provider value={{
      enqueueNotification: add,
      dequeueNotification: remove,
      notificationsQueue,
      setNotificationsQueue
    }}>

      {children}

      { notificationsQueue &&
        <NotificationsContainer />
      }

    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider