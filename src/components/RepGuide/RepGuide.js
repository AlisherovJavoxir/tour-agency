import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./RepGuide.module.css";
import RepMap from "./RepMap/RepMap";
import RepSidebar from "./RepSidebar/RepSidebar";

const RepGuide = () => {
    // let Uzb = ['Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?', 'Customs', 'Foreign', 'Whi visit?', 'Arts', 'Customs', 'Foreign', 'Whi visit?'];
    // let otherServices = ['Flights', 'Guides', 'Trains', 'Transportation', 'Visa'];
    // let sights = ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva', 'Gijduvan', 'Shakhrisabz', 'Margilan', 'Rishtan', 'Charvak', 'Aral Sea', 'Boysun', 'Chimgan', 'Nurata', 'Termez'];
    // let covid = ['Covid updates', 'Covid measures', 'Flexible booking', 'Flexible cancellations']
    let data = [
        {
            name: "",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "uzbekistan",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "tajikistan",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "turkmenistan",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "kazakhstan",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "kyrgyzstan",
            uzb: [
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Customs",
                "Foreign",
                "Whi visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Whi visit?",
            ],
            sights: [
                "Tashkent",
                "Samarkand",
                "Bukhara",
                "Khiva",
                "Gijduvan",
                "Shakhrisabz",
                "Margilan",
                "Rishtan",
                "Charvak",
                "Aral Sea",
                "Boysun",
                "Chimgan",
                "Nurata",
                "Termez",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
    ];
    let dat = {};
    const filterData = () => {
        dat = data.filter((item) => item.name === window.location.pathname.slice(1))[0];
    };
    filterData();
    const { sights, otherServices, uzb, covid } = dat;
    return (
        <div className={classes.RepGuide}>
            <div className={classes.col_1}>
                <RepSidebar title="Cities & Sights" links={sights} />
                <RepSidebar title="Other services" links={otherServices} />
                <RepSidebar title="Uzbekistan" links={uzb} />
                <RepSidebar title="Covid" links={covid} />
            </div>
            <Routes>
                <Route path="/" element={<RepMap />} />
                {sights.map((item, index) => (
                    <Route path={`${item.toLowerCase()}/*`} key={index} element={<RepMap />} />
                ))}
            </Routes>
        </div>
    );
};

export default RepGuide;
