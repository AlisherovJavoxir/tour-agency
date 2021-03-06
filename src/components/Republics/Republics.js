import classes from "./Republics.module.css";
import React from "react";
import { MyButton, MyInput, pathFunc } from "../MyUI/MyUI";
import { Link } from "react-router-dom";

const Republics = ({ data, changeBckg }) => {
    return (
        <div className={classes.Republics}>
            <div className={classes.row_2}>
                {data.map((item, index) => (
                    <Link className={classes.link} key={index} to={`${item.path}`} onClick={() => changeBckg(index)}>
                        {item.name}
                    </Link>
                ))}
                <MyInput placeholder="Search"/>
            </div>
            <div className={classes.row_3}>
                <small>{pathFunc()}</small>
            </div>
        </div>
    );
};

export default Republics;
