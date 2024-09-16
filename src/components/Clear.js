import React from "react";
import '../styles/Clear.css'

function Clear (props) {
    return (
        <button className="clear-button">
            {props.children}
        </button>
    )
}

export default Clear