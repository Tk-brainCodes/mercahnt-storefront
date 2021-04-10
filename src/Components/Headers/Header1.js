import React from 'react'
import './Header.css';
import bag from './bag-icon.svg';

const Header1 = () => {
    return (
        <div className="header__container">
            <p className="top__paragraph">
                <div className="tag__">
                    Store made with <b>S<img src={bag} alt="bag-icon" width="15px" height="15px" />KO</b>
                </div>
            </p>
        </div>

    )
}

export default Header1;
