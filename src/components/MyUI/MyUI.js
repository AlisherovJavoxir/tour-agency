import cl from "./MyUI.module.css";
import React from "react";

export const MyButton = ({ children, changeBckg, index }) => {
    return (
        <button className={cl.myButton} onClick={() => changeBckg(index)}>
            {children}
        </button>
    );
};

export const MyInput = ({ ...props }) => {
    return <input {...props} className={cl.myInput} />;
};
