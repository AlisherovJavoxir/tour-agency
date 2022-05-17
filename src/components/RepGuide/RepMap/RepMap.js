import React, { useState } from "react";
import RepSidebar from "../RepSidebar/RepSidebar";
import classes from "./RepMap.module.css";
import { RepMapContent, MyCountry } from "../../MyUI/MyUI";
const RepMap = ({ sights }) => {
    const CountryMap = [
        {
            name: "Central Asia",
            address: 'https://buff.page.link/Tb1t'
        },
        {
            name: "Uzbekistan",
            // address: "https://buff.page.link/3CPa"
            address: "https://buff.page.link/q1Vc"
        },
        {
            name: "Tajikistan",
            address: "https://buff.page.link/d2Pb"
        },
        {
            name: "Kyrgyzstan",
            address: "https://buff.page.link/UjJm"
        },
        {
            name: "Turkmenistan",
            address: "https://buff.page.link/mysf"
        },
        {
            name: "Kazakhstan",
            address: "https://buff.page.link/iECy"
        }
    ];

    function MapFunc(CountryMap) {
        let item = MyCountry();
        for (const element of CountryMap) {
            if (element.name === item) {
                return element.address;
            }
        }
    }

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
                        <h4 style={{ textAlign: "center" }}>{MyCountry()} travel guide</h4>
                    </div>
                    <div className={classes.mapContainer}>
                        <small style={{ fontSize: '18px' }}>Map of {MyCountry()}</small>
                        <div className={classes.map}>
                            <iframe src={MapFunc(CountryMap)} width="100%" height="100%" allowFullScreen={true} allow="full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </>

            )}
        </div>
    );
};

export default RepMap;
