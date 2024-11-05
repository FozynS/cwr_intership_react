import React from 'react';
import {ReactComponent as ArrowLeft} from "../../../assets/icons/arrow-left.svg";

const ButtonBackward = (props) => {
  return (
    <div role="button" className={'d-flex align-items-center'} onClick={props.onClick}>
      <div className={'d-flex me-2 flex-shrink-0'}><ArrowLeft /></div>
      <div className={'d-flex fw-bolder'}>{props.children}</div>
    </div>
  )
}

export default ButtonBackward