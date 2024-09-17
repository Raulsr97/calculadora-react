import React from "react";
import '../styles/Clear.css'

function Clear (props) {
    return (
        <button className="clear-button" onClick={props.manejarClear}>
            {props.children}
        </button>
    )
}

export default Clear