import React, { Fragment } from 'react';
import BagIcon from '../Bag/image/icon-bag1.svg'
import './Login.css';

const Login = () => {
    return (
        <Fragment>
            <div className="navigation__space">
                <div className="container__">
                    <div className="logo__">

                    </div>
                    <div className="text__">
                        <p className="target__font"><b style={{ fontWeight: 'bolder', fontSize: '20px', height: 'auto !important', marginBottom: '2px', color: '#2E2E2E' }}>Target</b>
                            <div style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', fontFamily: 'sans-serif', color: 'grey', marginTop: '10px' }}>Cham Tower, Plot 12 Nkruma Road, Kampala Ug </div></p>
                    </div>
                </div>

                <div className="nav__items">
                    <div className="bag__state"><img id="BagIcon__" src={BagIcon} alt={BagIcon} width="25px" height="25px" /> Bag</div>
                    <div className="account__">Account</div>
                </div>
            </div>

            <div className="login__page">
                <div className="progress__login">
                    <div className="progress__indicator">

                    </div>
                </div>
                <div className="bad__content">

                </div>
            </div>
        </Fragment>
    )
}

export default Login;
