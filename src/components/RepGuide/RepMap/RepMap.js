import React from "react";
import RepSidebar from "../RepSidebar/RepSidebar";
import classes from "./RepMap.module.css";

const RepMap = ({ sights }) => {
    let country = "Uzbekistan";

    return (
        <div className={classes.RepMap}>
            {sights ? (
                <div className={classes.RepMap__row}>
                    <div className={classes.RepMap__col1}>
                        <div className={classes.title}>
                            <h4 style={{ textAlign: "center" }}>{country} travel guide</h4>
                        </div>
                        <div className={classes.mapContainer}>
                            <small>Map of {country}</small>
                            <div className={classes.map}></div>
                        </div>
                    </div>
                    <div className={classes.RepMap__col2}>
                        <RepSidebar title="Cities & Sights" links={sights} />
                    </div>
                </div>
            ) : (
                <>
                    <div className={classes.title}>
                        <h4 style={{ textAlign: "center" }}>{country} travel guide</h4>
                    </div>
                    <div className={classes.mapContainer}>
                        <small>Map of {country}</small>
                        <div className={classes.map}></div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RepMap;
