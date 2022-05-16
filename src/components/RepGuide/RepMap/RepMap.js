import React, { useState } from "react";
import RepSidebar from "../RepSidebar/RepSidebar";
import classes from "./RepMap.module.css";

const RepMap = ({ sights }) => {
    let country = "Uzbekistan";
    const [map, setMap] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4844275.476483655!2d60.32918089043448!3d41.67349887319654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekist%C3%A1n!5e0!3m2!1ses!2s!4v1652598614189!5m2!1ses!2s')

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
                        <div className={classes.map}>
                            <iframe style={{ border: 0, width: '100%', height: '100%' }} src="https://tinyurl.com/y4y37yrj"></iframe>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RepMap;
