import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Headers/Header2';
import Service from '../Service/Service';
import './Body.css';

const Body = () => {
    // const changeRoute = () => {
    //     let bodyElement = document.getElementsByClassName('fragment__container');
    //     for (var i = 0; i < bodyElement.length; i += 1) {
    //         bodyElement[i].style.visiblity = 'hidden';
    //     }
    // }
    return (
        <Fragment className="fragment__container">
            <Header2 />
            <form className="search__bar">
                <input id="search" type="text" placeholder="Search for products..." />
                <button type="submit" id="Btn__"></button>
            </form>
            <div className="body__">
                <div className="column column1">
                    <div className="items__lists">
                        <ul>
                            <li className="active__">Electronics(12)</li>
                            <li>Face Masks(3)</li>
                            <li>Grocery(8)</li>
                            <li>Home(24)</li>
                            <li>Kids(9)</li>
                            <li id="link__">View all categories</li>
                        </ul>
                    </div>
                </div>
                <div className="column column2">
                    <div id="category__one">Electronics <div id="badge__">12</div></div><br />

                    {/*item 2*/}
                    <div className="cards__">
                        <div className="image__ image2"></div>
                        <div className="text__details">
                            <p className="heading__">Norbury Scandinavian Wood Leg Ottoman <br />
                                <p className="price__">UGX 118,400 <br /> 148,000
                                <Link style={{ textDecoration: 'none' }} exact to="/details">
                                        <div className="add__Btn">
                                            + Add
                       </div>
                                    </Link>
                                </p>
                            </p>
                        </div>
                    </div>

                    {/*item 1*/}
                    <div className="cards__">
                        <div className="image__ image1"></div>
                        <div className="text__details">
                            <p className="heading__">Kids' 2pk Cloth Face Masks <br />
                                <p className="price__">UGX 185,000
                             <div className="add__Btn">
                                        + Add
                           </div>
                                </p>
                            </p>
                        </div>
                    </div>

                    {/*item 3*/}
                    <div className="cards__">
                        <div className="image__ image3"></div>
                        <div className="text__details">
                            <p className="heading__">Baby-Cut Carrot - 1lb - Good & Gather <br />
                                <p className="price__"> UGX 4,000
                            <div className="add__Btn">
                                        + Add
                      </div>
                                </p>
                            </p>
                        </div>
                    </div>

                    {/*item 4*/}
                    <div className="cards__">
                        <div className="image__ image4"></div>
                        <div className="text__details">
                            <p className="heading__">Metal Country Charlet Charm and Wood Bench - Saracina Home <br />
                                <p className="price__">UGX 34,000
                                <div className="add__Btn">
                                        + Add
                        </div>
                                </p>
                            </p>
                        </div>
                    </div>

                    {/*item 5*/}
                    <div className="cards__">
                        <div className="image__ image5"></div>
                        <div className="text__details">
                            <p className="heading__ ">Alternative Protein Ground -16oz Good & Gather <br />
                                <p className="price__">UGX 8,000
                            <div className="add__Btn">
                                        + Add
                        </div>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column column3">
                    <div className="bag__bar">Bag  <div id="badge__">0</div></div>
                    {/*emoji image*/}
                    <div className="state__">
                        <div className="emoji__image"></div><br />
                        <p className="current__state">It's empty here</p>
                        <p className="p__text">Start shopping to add items <br /> to your bag</p>
                    </div>
                </div>
            </div>
            <Service />
        </Fragment>
    )
}

export default Body;

