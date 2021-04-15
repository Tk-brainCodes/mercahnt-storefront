import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './CartDetails.css';
import Chloe from './images/Chloe.jpeg';
import Emi from './images/Emi.jpeg';
import ILOT from './images/ILOT.jpeg';
import Round_17 from './images/Round _17.png'
import STRANDMON from './images/STRANDMON.jpeg';
import Norbury from './images/Norbury .jpeg'


const CartDetails = () => {
    return (
        <Fragment >

            {/*Header2*/}
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
                    <Link to="/bag">
                        <div className="bag__"> <i id="shoppingBag" className="fas fa-shopping-bag"></i> Bag</div>
                    </Link>
                    <div className="account__"><i className="far fa-user"></i> Account</div>
                </div>
            </div>

            {/*Back to homepaege*/}
            <Link to="/">
                <div className="back__Home">
                    <i id="back__arrow" className="fas fa-chevron-left"></i>   Furniture
      </div>
            </Link>
            {/*Product body*/}
            <div className="details__body">
                <div className="slide__">
                    <div className="product__image">
                    </div>
                    <div className="dot__pagination">
                        <i id="current__pagination" className="fas fa-circle"></i>
                        <i id="light__circle" className="fas fa-circle"></i>
                        <i id="light__circle" className="fas fa-circle"></i>
                        <i id="light__circle" className="fas fa-circle"></i>
                    </div>
                </div>
                <div className="product__detail">
                    <p className="product__heading">Norbury Scandinavian Wood Leg Ottoman</p>
                    <p className="product__text">Sold as a peice, Wooden uphoistered ottoman lends a laid-back appeal to your indoor space. <br />
                     Comes with soft padding for extra comfort and support. Solid wooden and metal frame ensures<br />
                     durable, long-lasting use. Greate as a footrest or extra seat when entertaining guests
                    </p> <br />

                    <div className="product__price">
                        <p><div className="current__price">UGX 118,400 <div className="discount__tag">-20%</div></div>
                            <div className="slahed__price"><strike>UGX 148,000</strike></div></p>
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
                    <div className="buttons__shop">
                        <button className="add__toBag">Add to Bag</button>
                        <Link to="/Login"><button className="buy__Now">Buy Now</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="product__slider">
                <div className="heading__products">
                    <div className="related__products">RELATED PRODUCTS</div>
                    <div className="pagination__arrows">
                        <i id="back__" class="fas fa-chevron-circle-left"></i>
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
            </div>

            {/*Product image*/}
            <div className="images__product">
                {/*product related image 1*/}
                <div className="image__1">
                    <img src={Chloe} alt="chloe-stool" width="200px" height="200px" />
                    <figcaption>
                        Chloe Contemporary <br /> Canity Stool Gold...
            </figcaption>
                </div>
                {/*product related image 2*/}
                <div className="image__1">
                    <img src={Emi} alt="Emi dressing stool" width="200px" height="200px" />
                    <figcaption>
                        Emii Dressing <br /> Table Stool...
        </figcaption>
                </div>
                {/*product related image 3*/}
                <div className="image__1">
                    <img src={ILOT} alt="ILOT desinger chair" width="200px" height="200px" />
                    <figcaption>
                        ILOT, Chairs<br /> from Designer...
    </figcaption>
                </div>
                {/*product related image 4*/}
                <div className="image__1">
                    <img src={Round_17} alt="ILOT desinger chair" width="200px" height="200px" />
                    <figcaption>
                        Wide Round<br /> Ottoman...
    </figcaption>
                </div>
                {/*product related image 5*/}
                <div className="image__1">
                    <img src={STRANDMON} alt="STRANDMON" width="200px" height="200px" style={{ borderRadius: "6px" }} />
                    <figcaption>
                        STRANDMON Ottoman,<br />Djuparp...
</figcaption>
                </div>

                {/*product related image 6*/}
                <div className="image__1">
                    <img src={Norbury} alt="Norbury" width="200px" height="200px" style={{ borderRadius: "6px" }} />
                    <figcaption>
                        Norbury Ottoman,<br />desinger...
</figcaption>
                </div>


            </div>
            <Service />
        </Fragment>

    )
}

export default CartDetails;
