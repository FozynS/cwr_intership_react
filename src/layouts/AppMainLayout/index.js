import React from 'react'

import NavBar from '../../components/NavBar'

import style from './index.module.scss'

const AppMainLayout = ({children}) => {
return (
    <>
        <header className={style.header}>
            <NavBar />
        </header>

        <main className={style.main}>
            {children}
        </main>
    </>
  )
}

export default AppMainLayout