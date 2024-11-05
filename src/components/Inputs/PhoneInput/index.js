import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

const PhoneInput = ({phone, setPhone, placeholder = "", disabled = false, className = '', error = false, alwaysShowMask = false}) => {
  return (
    <InputMask
        mask="(999)-999-9999"
        alwaysShowMask={alwaysShowMask}
        className={classNames('form-control', error && 'is-invalid', className)}
        value={phone}
        disabled={disabled}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={placeholder}
    />
  )
}

export default PhoneInput;
