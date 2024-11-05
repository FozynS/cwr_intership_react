import React, {useRef} from 'react'
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg"
import {ReactComponent as InputClearIcon} from "../../../assets/icons/clear-circle.svg"

import style from './index.module.scss'

const InputSearch = (props) => {

  const inputRef = useRef()

  return (
    <div className={style.box}>

      <SearchIcon className={style.search} />

      <input
        ref={inputRef}
        type={props.type}
        onInput={(event) => props.handelChange(event.target.value)}
        placeholder={props.placeholder}
        className={`${props.className} ${style.input}`}
      />

      { inputRef.current?.value &&
        <InputClearIcon className={style.clear} onClick={() => {
          props.handelChange('')
          inputRef.current.value = ''
        }}/>
      }

    </div>
  )
}

export default InputSearch