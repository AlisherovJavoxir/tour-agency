import classes from './Header.module.css'
import React from 'react';
import { MyButton } from '../MyUI/MyUI';
import background from '../../assets/logo.png'

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.nav}>
                <div className={classes.col_1}>
                    <MyButton>About us</MyButton>
                    <MyButton>Contact us</MyButton>
                </div>
                <div className={classes.col_2}>
                    <MyButton>
                        <a href="https://t.me/itc_21">
                            Email
                        </a>
                    </MyButton>
                    <MyButton>
                        <h2><ion-icon name="logo-facebook"></ion-icon></h2>
                    </MyButton>
                    <MyButton>
                        <h2><ion-icon name="logo-instagram"></ion-icon></h2>
                    </MyButton>
                    <MyButton>
                        <h2><ion-icon name="logo-youtube"></ion-icon></h2>
                    </MyButton>
                    <MyButton>
                        <h2><ion-icon name="logo-twitter"></ion-icon></h2>
                    </MyButton>
                </div>
            </div>
            {/* <div className={classes.logo}>
                <img width={100} height={100} src={background} alt="Tour agency logo" />
            </div> */}

        </div>
    );
};

export default Header;