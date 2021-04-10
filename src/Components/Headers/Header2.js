import React from 'react';
import './Header.css';

const Header2 = () => {
    return (
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
                <div className="bag__"> <i class="far fa-shopping-bag"></i> Bag</div>
                <div className="account__">Account</div>
            </div>
        </div>
    )
}

export default Header2;
