import React, { useState } from "react";
import RepSidebar from "../RepSidebar/RepSidebar";
import classes from "./RepMap.module.css";
import {RepMapContent} from "../../MyUI/MyUI";

const RepMap = ({ sights }) => {
    let country = "Uzbekistan";
    const [map, setMap] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23555927.376209084!2d48.94942010700397!3d43.887336531337596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x421ca47a95e8b557%3A0xc9e4e4fa8732db50!2z0KbQtdC90YLRgNCw0LvRjNC90LDRjyDQkNC30LjRjw!5e0!3m2!1sru!2s!4v1652660953244!5m2!1sru!2s');
    return (
        <div className={classes.RepMap}>
            {sights ? (
                <div className={classes.RepMap__row}>
                    <div className={classes.RepMap__col1}>
                        {/* <div className={classes.title}>
                            <h4 style={{ textAlign: "center" }}>{country} travel guide</h4>
                        </div>
                        <div className={classes.mapContainer}>
                            <small>Map of {country}</small>
                            <div className={classes.map}></div>
                        </div> */}
                        <RepMapContent />
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
