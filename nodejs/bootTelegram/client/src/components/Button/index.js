import React from "react";


export const Button = ({ onCLick, children }) => {
    return(
        <button className='btns' onClick={onCLick}> {children} </button>
    );
}