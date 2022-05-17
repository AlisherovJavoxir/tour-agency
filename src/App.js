import Header from "./components/Header/Header";
import React from "react";
import Republics from "./components/Republics/Republics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepGuide from "./components/RepGuide/RepGuide";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
    let data = [
        {
            path: "",
            name: "Central Asia",
        },
        {
            path: "uzbekistan",
            name: "Uzbekistan",
        },
        {
            path: "turkmenistan",
            name: "Turkmenistan",
        },
        {
            path: "tajikistan",
            name: "Tajikistan",
        },
        {
            path: "kazakhstan",
            name: "Kazakhstan",
        },
        {
            path: "kyrgyzstan",
            name: "Kyrgyzstan",
        },
    ];

    let [breadcrumb, setBreadcrumb] = useState(["country /"]);
    let [background, setBackground] = useState(require("./assets/backgrounds/update/ca.jpg"));

    const changeBackground = (republic) => {
        setBreadcrumb(window.location.pathname);
        switch (republic) {
            case 0:
                setBackground(require("./assets/backgrounds/update/ca.jpg"));
                break;
            case 1:
                setBackground(require("./assets/backgrounds/update/uz.jpg"));
                break;
            case 2:
                setBackground(require("./assets/backgrounds/update/turkmenistan.jpg"));
                break;
            case 3:
                setBackground(require("./assets/backgrounds/update/tajikistan.jpg"));
                break;
            case 4:
                setBackground(require("./assets/backgrounds/update/kz.jpg"));
                break;
            case 5:
                setBackground(require("./assets/backgrounds/update/kr.jpg"));
                break;
            default:
                break;
        }
    };

    return (
        <div>
            {/* <div style={{ backgroundImage: `url(${background})`}}  className="background"></div> */}
            <div><Header /></div>
            <div className="background"
                style={{ backgroundImage: `url(${background})` }}>
            </div>
            <div className="body">
                <BrowserRouter>
                    <Republics changeBckg={changeBackground} data={data} />
                    <Routes>
                        {data.map((item, index) => (
                            <Route path={`${item.path}/*`} key={index} element={<RepGuide />} />
                        ))}
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>

        </div>
    );
};

export default App;
