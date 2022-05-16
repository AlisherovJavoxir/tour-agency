import cl from "./MyUI.module.css";
import React from "react";

export const MyButton = ({ children }) => {
    return <button className={cl.myButton}>{children}</button>;
};

export const MyInput = ({ ...props }) => {
    return <input {...props} className={cl.myInput} type="search"/>;
};

export const pathFunc = () => {
    return window.location.pathname;
};

export const MyCountry = () => {
    var res = window.location.pathname;
    if(res.length>1){
        res = res.slice(1);
        switch (res){
            case "uzbekistan": return res = "Uzbekistan";
            case "tajikistan": return res = "Tajikistan";
            case "kazakhstan": return res = "Kazakhstan";
            case "kyrgyzstan": return res = "Kyrgyzstan";
            case "turkmenistan": return res = "Turkmenistan";
        }
    }
    else {
        res = "Central Asia";
    }
    return res;
}

export const RepMapContent = () => {
    return (
        <div>
            <img
                src="https://cdn-1.motorsport.com/images/mgl/6n9yKwOY/s1200/ferrari-296-gt3-sketch-1.webp"
                alt="rasm"
                style={{ width: "100%", display: "block" }}
            />
            <p>
                <b>
                    <i>Title</i>
                </b>
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae autem accusamus ipsa saepe
                quam, odio mollitia qui, dolorem corporis magni ex? Tenetur assumenda repellat molestias! Accusamus nisi
                nesciunt provident debitis, repudiandae, harum eveniet similique aliquid molestias perspiciatis, est
                esse reprehenderit quo quia nemo a adipisci aperiam illo aut excepturi consectetur? Obcaecati reiciendis
                maiores nam corrupti possimus architecto ad vel odit atque? Quidem perspiciatis vero quisquam neque
                porro harum autem doloribus temporibus vel! Natus dolore explicabo autem, minus vitae nobis et dolorum
                qui odit fuga numquam perspiciatis atque, impedit velit ipsum exercitationem at possimus maxime vel in
                animi ipsam fugiat.
            </p>
        </div>
    );
};
