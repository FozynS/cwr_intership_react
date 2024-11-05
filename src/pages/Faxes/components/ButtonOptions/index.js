import React, {forwardRef, useContext} from 'react'
import {Dropdown} from "react-bootstrap"
import {ReactComponent as DownLoadIcon} from "../../../../assets/icons/download.svg";

import FaxPageContext from "../../../../contexts/FaxPageContext"
import {downloadFax} from "../../../../api/pages/faxes-page"

import style from "./index.module.scss"

const Toggle = forwardRef(({ children, onClick, disabled: state }, ref) => (
  <button className={'d-flex align-items-center text-body btn btn-outline-secondary'} disabled={state} ref={ref} onClick={(event) => {onClick(event)}}>
    <span>•••</span>
  </button>
))

const Link = (props) => (
  <li className={`${style.link} ${props.className}`} onClick={props.onClick}>
    <props.icon/>
    <span>{props.children}</span>
  </li>
)

const optionDownloadFax = (selectedRow) => {
  downloadFax(selectedRow.id).then((response) => (response))
}

const ButtonOptions = ({state}) => {

  const {selectedRow} = useContext(FaxPageContext)

  return (
    <div>
      <Dropdown align="start" autoClose={"outside"}>
        <Dropdown.Toggle as={Toggle} disabled={state} variant="success"/>
        <Dropdown.Menu className={style.menu} as={"ul"} align={'end'} renderOnMount={true}>
          <Dropdown.Item as={Link} onClick={() => optionDownloadFax(selectedRow)} icon={DownLoadIcon}>
            Download Fax
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ButtonOptions;