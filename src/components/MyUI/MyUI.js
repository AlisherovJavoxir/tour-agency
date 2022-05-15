import cl from "./MyUI.module.css";
import React from "react";

export const MyButton = ({ children }) => {
    return <button className={cl.myButton}>{children}</button>;
};

export const MyInput = ({ ...props }) => {
    return <input {...props} className={cl.myInput} />;
};

export const pathFunc = () => {
    return window.location.pathname;
};
