import PropTypes from "prop-types"
import React from "react"

export function AtomInputField( { className,  label , type , name , value , onChange , placeHolder , required} ){
    return (
        <>
            <label> {label} </label>
            <br></br>
            <input 
                className={className}
                type = {type}
                placeholder={placeHolder}
                name={name}
                value={value}
                onChange={onChange}
                required = {required}>

            </input>
            
            <br></br>
        </>
    )
}



AtomInputField.propTypes = {
    type : PropTypes.string,
    placeHolder : PropTypes.string
}