import React from 'react'

import style from './index.module.scss'

export const FaxToolbar = ({total, current, scale, setScale}) => {
  return (
    <div className={style.box}>

      <div className={style.counter}>
        <span className={'me-1 pt-1 pb-1 pe-2 ps-2 bg-dark-gray'}>{current}</span>
        /
        <span className={'ms-1'}>{total}</span>
      </div>

      <div className={style.zoom}>
        <button className={'button'} onClick={() => setScale((prev) => prev + 0.1)}>
          +
        </button>
        <div className={'pt-1 pb-1 pe-2 ps-2 bg-dark-gray'}>
          {
            Math.round(scale * 100) + '%'
          }
        </div>
        <button type={'button'} onClick={() => setScale((prev) => prev - 0.1)}>−</button>
      </div>


    </div>
  )
}

export default FaxToolbar