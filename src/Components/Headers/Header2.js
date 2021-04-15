import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header2 = () => {
    return (
        <div className="navigation__space">
            <div className="container__">
                <div className="logo__">
                    <i id="shop-store" class="fas fa-store-alt"></i>
                </div>
                <div className="text__">
                    <p className="target__font"><b style={{ fontWeight: 'bolder', fontSize: '20px', height: 'auto !important', marginBottom: '2px', color: '#2E2E2E' }}>Target</b>
                        <div style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', fontFamily: 'sans-serif', color: 'grey', marginTop: '10px' }}>Cham Tower, Plot 12 Nkruma Road, Kampala Ug </div></p>
                </div>
            </div>

            <div className="nav__items">
                <Link to="/Bag">
                    <div className="bag__"> <i id="shoppingBag" className="fas fa-shopping-bag"></i> Bag</div>
                </Link>
                <div className="account__"><i className="far fa-user"></i> Account</div>
            </div>
        </div>
    )
}

export default Header2;
