import classes from "./Republics.module.css";
import React from "react";
import { MyButton, MyInput, pathFunc } from "../MyUI/MyUI";
import { Link } from "react-router-dom";

const Republics = ({ data, changeBckg }) => {
    return (
        <div className={classes.Republics}>
            <div className={classes.row_1}>
                <div className={classes.col_1}>
                    <MyButton>Build your own trip</MyButton>
                </div>
                <div className={classes.col_2}>
                    <MyButton>EN</MyButton>
                    <MyButton>RU</MyButton>
                    <MyButton>FR</MyButton>
                    <MyButton>DE</MyButton>
                    <MyButton>IT</MyButton>
                    <MyButton>ES</MyButton>
                </div>
            </div>
            <div className={classes.row_2}>
                {data.map((item, index) => (
                    <Link className={classes.link} key={index} to={`${item.path}`} onClick={() => changeBckg(index)}>
                        {item.name}
                    </Link>
                ))}
                <MyInput placeholder="Search" />
            </div>
            <div className={classes.row_3}>
                <small>{pathFunc()}</small>
            </div>
        </div>
    );
};

export default Republics;
