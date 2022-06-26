import React, { useId } from 'react'

const Input = ({ text, placeholder, type}) => {
    return (
        <label className='d-flex flex-column'>
            <span className='fw-bold text-primary'>{text}</span>
            <input type={type} placeholder={placeholder} id={useId} className="form-control shadow" />
        </label>
    )
}

export default Input