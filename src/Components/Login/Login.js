import React, { Fragment } from 'react';
import BagIcon from '../Bag/image/icon-bag1.svg'
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Fragment>
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
                        <div className="bag__state"><img id="BagIcon__" src={BagIcon} alt={BagIcon} width="25px" height="25px" /> Bag</div>
                    </Link>
                    <div className="account__"><i className="far fa-user"></i> Account</div>
                </div>
            </div>

            <div className="login__page">
                <div className="progress__login">
                    <div className="progress__indicator">
                        {/*Form stepper*/}
                        <div class="container">
                            {/*Completed*/}
                            <div class="step completed">
                                <div class="v-stepper">
                                    <div class="circle">1</div>
                                    <div class="line"></div>
                                </div>

                                <div class="content wrapper">
                                    <div className="stepper__description">Account <br />
                                        <div className="paragraph__desp" id="space__p">To place your orders, log in by entering your 10 digits mobile number</div></div>
                                    <p className="mobile__number">Mobile Number</p>
                                    <form>
                                        <div className="form__">
                                            <div className="mobile__numbeForm">
                                                <div className="phone__code">+256</div>
                                                <input type="tel" id="phone" autoComplete="off" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                            </div>
                                            <input id="login__Btn" type="submit" placeholder="Login" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/*active*/}
                            <div className="step active">
                                <div className="v-stepper">
                                    <div className="circle" id="cricle__2">2</div>
                                    <div className="line"></div>
                                </div>

                                <div class="content stepper2">
                                    <div className="stepper__description">Delivery address <br />
                                        <div className="paragraph__desp"> Select your delivery address from the existing one or add a new one.</div></div>
                                </div>
                            </div>

                            {/*
                         <div class="step empty">
                         <div class="v-stepper">
                             <div class="circle"></div>
                             <div class="line"></div>
                         </div>

                         <div class="content">
                         </div>
                     </div>

                        */}
                            {/*regular*/}
                            <div class="step">
                                <div class="v-stepper">
                                    <div class="circle">3</div>
                                    <div class="line"></div>
                                </div>

                                <div class="content">
                                    <div className="stepper__description">Payment<br />
                                        <div className="paragraph__desp"> Select your payment method.</div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bag__item">
                    <div className="heading__">
                        <div className="Bag__0"><div className="Bag__Content">Bag <div id="baged___0">2</div> </div>
                            <div className="clear__bag">Clear Bag</div></div>
                    </div>

                    <div className="bag__itemsProduct">
                        <div className="productHeading__">Earrings and Mangtikka</div>
                        <div className="sub__Heading">Per peice</div>
                        <div className="productNo__1">
                            <div className="prices__">
                                <div className="prices__1">UGX 118,400</div>
                                <div className="prices__2"><strike>UGX 148,000</strike></div>
                            </div>

                            <div className="conter__">
                                {/*decrement*/}
                                <div className="decrement">
                                    <i className="fas fa-minus"></i>
                                </div>
                                <div className="number">
                                    1
                         </div>
                                {/*Decrement*/}
                                <div className="increment">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>

                        </div>


                        <div className="productHeading__">Colorful Earrings Jhumki</div>
                        <div className="sub__Heading">Per peice</div>
                        <div id="productNo__2" className="productNo__1">
                            <div className="prices__">
                                <div className="prices__1">UGX 118,400</div>
                                <div className="prices__2"><strike>UGX 148,000</strike></div>
                            </div>

                            <div className="conter__">
                                {/*decrement*/}
                                <div className="decrement">
                                    <i className="fas fa-minus"></i>
                                </div>
                                <div className="number">
                                    1
                     </div>
                                {/*Decrement*/}
                                <div className="increment">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="sub__total">
                        <div className="subTotal__price">
                            <div className="Subtotal__ same">Subtotal</div>
                            <div className="Price__">UGX 12,700</div>
                        </div>
                        <br />
                        <div className="Delivery__">
                            <div className="SubDelivery__ same">Delivery</div>
                            <div className="Free__">Free</div>
                        </div>
                        <br /><br />
                        <div className="subTotal__price">
                            <div className="Subtotal__ total">Total</div>
                            <div id="bold">UGX 12,700</div>
                        </div>
                        <div className="Tax__">
                            <div className="Promo__">Inclusive of all taxes</div>
                        </div>
                        <div className="promo__text">You are about to save UGX 12,700 on this order</div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Login;
