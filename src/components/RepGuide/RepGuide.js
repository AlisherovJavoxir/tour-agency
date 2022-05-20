import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./RepGuide.module.css";
import RepMap from "./RepMap/RepMap";
import RepSidebar from "./RepSidebar/RepSidebar";

const RepGuide = () => {
    // let Uzb = ['Why visit?', 'Arts', 'Customs', 'Foreign', 'Why visit?', 'Customs', 'Foreign', 'Why visit?', 'Arts', 'Customs', 'Foreign', 'Why visit?'];
    // let otherServices = ['Flights', 'Guides', 'Trains', 'Transportation', 'Visa'];
    // let sights = ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva', 'Gijduvan', 'Shakhrisabz', 'Margilan', 'Rishtan', 'Charvak', 'Aral Sea', 'Boysun', 'Chimgan', 'Nurata', 'Termez'];
    // let covid = ['Covid updates', 'Covid measures', 'Flexible booking', 'Flexible cancellations']
    let data = [
        {
            name: "",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: [
                'Uzbekistan', 'Tajikistan', 'Kyrgyzistan', 'Kazakhstan', 'Turkmenistan'
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "uzbekistan",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: [
                { name: 'Tashkent', shrines: ['Amir Temur xiyoboni', 'Mustaqillik maydoni'] },
                { name: 'Samarkand', shrines: ['Registon maydoni'] },
                "Bukhara",
                "Xorazm",
                "Navoiy",
                "Kashkadayra",
                "Surkhandarya",
                "Djizzak",
                "Sirdarya",
                "Andijan",
                "Fergana",
                "Namangan",
                "Karakalpakstan",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "tajikistan",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: ["Dushanbe", "Xalton", "Sug'd", "Badaxshon", "Xo'jand", "Qo'rg'ontepa", "Qulyab"],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "turkmenistan",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: ["Ashxabod", "Ahal", "Bolqon", "Dashoguz", "Lebap", "Mari"],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "kazakhstan",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: [
                "Almati",
                "Astana",
                "Taldiqo'rg'an",
                "Ko'kshetov",
                "Aqto'be",
                "Atirau",
                "O'stkemen",
                "Taraz",
                "O'ral",
                "Qarag'andi",
                "Qo'stanoy",
                "Qizilo'rda",
                "Aqtov",
                "Pavlodar",
                "Petropavlovsk",
                "Chimkent",
            ],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
        {
            name: "kyrgyzstan",
            faqs: [
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
                "Customs",
                "Foreign",
                "Why visit?",
                "Arts",
                "Customs",
                "Foreign",
                "Why visit?",
            ],
            sights: ["Bishkek", "Botken", "Chuy", "Jalolobod", "Norin", "O'sh", "Talas", "Issiqko'l"],
            covid: ["Covid updates", "Covid measures", "Flexible booking", "Flexible cancellations"],
            otherServices: ["Flights", "Guides", "Trains", "Transportation", "Visa"],
        },
    ];

    let dat = {};
    const filterData = () => {
        let location =
            window.location.pathname.indexOf("/", 1) !== -1
                ? window.location.pathname.slice(1, window.location.pathname.indexOf("/", 1))
                : window.location.pathname.slice(1);
        dat = data.filter((item) => item.name === location)[0];
    };
    filterData();
    const { sights, otherServices, faqs, covid } = dat;
    return (
        <div className={classes.RepGuide}>
            <div className={classes.col_1}>
                <RepSidebar title="Cities" links={sights} />
                <RepSidebar title="Other services" links={otherServices} />
                <RepSidebar title="Uzbekistan" links={faqs} />
                <RepSidebar title="Covid" links={covid} />
            </div>
            <div className={classes.col_2}>
                <Routes>
                    <Route path="/" element={<RepMap />} />
                    {sights.map((item, index) => (
                        <Route path={`${item.toLowerCase()}/*`} key={index} element={<RepMap sights={sights} />} />
                    ))}
                </Routes>
            </div>
        </div>
    );
};

export default RepGuide;