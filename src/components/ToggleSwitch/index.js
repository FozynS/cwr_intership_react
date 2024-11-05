import classNames from 'classnames'
import React from 'react'
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import styles from './index.module.scss'

const ToggleSwitch = ({ type, name, value, onChange, buttons, className = 'default' }) => {
    return (
        <ToggleButtonGroup type={type} name={name} value={value} onChange={onChange} className={styles[className]}>
            {buttons.map((button) => (
                <ToggleButton variant="outline-secondary outline-toggle" id={button.id} value={button.value} key={button.id} className={classNames(styles.toggleButton, value === button.value ? styles.activeButton : '')}>
                    <span>{button.label}</span>
                    {button.counter && <span className={'counter ms-1'}>{`(${button.counter})`}</span>}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}

export default ToggleSwitch
