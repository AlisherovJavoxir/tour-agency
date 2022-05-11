import Header from "./components/Header/Header";
import React from "react";
import Republics from "./components/Republics/Republics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepGuide from "./components/RepGuide/RepGuide";
import Footer from "./components/Footer/Footer";
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

    const changeBackground = (republic) => {
        console.log(republic);
    }

    return (
        <div>
            <div className="background">
                <Header />
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
                {/* <RepGuide/> */}
                <Footer />
            </div>
        </div>
    );
};

export default App;
