import React from 'react'
import {Button, Modal} from "react-bootstrap"

const FaxDetachAlert = ({data, state, handleDecline, handleAccept}) => {

  return (
    <Modal show={state} backdrop="true" onHide={handleDecline} centered>
      <Modal.Body className={'pt-4'}>
        <div className={'text-center mb-4'}>
          <p className={'mb-4'}><b>Are you sure you want to detach the Fax?</b></p>
          <p style={{maxWidth: '260px', margin: '0 auto', lineHeight: '160%'}}>
            This action can’t be undone!
            <br/>
            You will detach Fax <b>{data?.phone}</b> from
            <br/>
            {data?.patient} patient’s card
          </p>
        </div>
        <div className={'d-flex justify-content-center gap-2 pt-2'}>
          <Button className={'text-white'} variant="primary" onClick={handleDecline}>
            Cancel
          </Button>
          <Button className={'text-body'} variant="outline-secondary" onClick={handleAccept}>
            Yes, Detach
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default FaxDetachAlert