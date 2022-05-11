import React from "react";
import { Link } from "react-router-dom";
import classes from "./RepSidebar.module.css";

const RepSidebar = (props) => {
    const { links } = props;
    return (
        <div className={classes.RepSidebar}>
            <h3 style={{ marginBottom: "10px" }}>{props.title}</h3>
            <ul style={{ listStyle: "none" }}>
                {links.map((f, index) => (
                    <li key={index}>
                        <Link to={`${f.toLowerCase()}`}>{f}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepSidebar;
