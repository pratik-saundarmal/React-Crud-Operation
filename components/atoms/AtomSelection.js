
import React from "react"

export default function AtomSelection( { className,  id , name , value , onChange , label , options  } ){


    let optArray = options.map( option => {
                        
        return (
            <option 
                value={option.value_text}>

                {option.value_text} 
            
            </option>
        )

    })

    return (
        <div 
            className={className}
            >
            <label> {label} </label>
            <br></br>
            <select 
                id = {id}
                name = {name}
                value = {value}
                onChange={onChange}>
                
                {optArray}

            </select>
        </div>
    )
}