import classes from './Footer.module.css'
import React from 'react';
import { MyButton } from '../MyUI/MyUI'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.col_1}>
                <MyButton><p>Cancellations</p></MyButton>
                <MyButton><p>Subscribe</p></MyButton>
                <MyButton><p>FaQ</p></MyButton>
            </div>
            <div className={classes.col_2}>
                <small>© Copyright 2019 - 2022 Oasis International Travel. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;