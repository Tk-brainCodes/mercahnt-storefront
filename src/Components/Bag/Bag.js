import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Bag.css';
import Emoji from './image/emoji-face.jpg';
import BagIcon from '../Bag/image/icon-bag1.svg'
const Bag = () => {
    return (
        <Fragment>
            <div className="Bag__">
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
                        <div className="bag__state"><img id="BagIcon__" src={BagIcon} alt={BagIcon} width="25px" height="25px" /> Bag</div>
                        <div className="account__"><i className="far fa-user"></i> Account</div>
                        </div>
                </div>
            </div>
            <div className="bag__content">
                <div className="bag__container">
                    <img src={Emoji} alt={Emoji} width="170px" height="170px" />
                    <p className="main__">it's empty here</p>
                    <p className="main__p">Start shopping to add items to bag your</p>
                    <Link to="/">
                        <button id="Back_home__button">Back to homepage</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Bag;
