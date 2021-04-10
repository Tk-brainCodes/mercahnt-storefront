import React, { Fragment } from 'react'
import './Service.css';
import Customer from './Images/customer.png';
import Services from './Images/service.png';
import Support from './Images/support.png';

const Service = () => {
    return (
        <Fragment>
            <div className="services__">
                <div className="service__">
                    <div className="fast__delivery">
                        <img src={Customer} alt="fast-deleivery" width="48px" height="40px" style={{marginBottom: "4px"}} /> <br />
                        <p>Fast Delivery </p>
                    </div>
                    <div className="buyer__protection">
                        <img src={Services} alt="buyer-protection" width="35px" height="45px" /> <br />
                        <p> Buyer Protection</p>
                    </div>
                    <div className="customer__support">
                        <img src={Support} alt="Customer-support" width="48px" height="45px" /> <br />
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>
            <div className="footer__">
                <p className="store__details">STORE DETAILS</p>
                <p className="footer__header"><b style={{ fontWeight: 'bolder', fontSize: '20px', color: '#2E2E2E', marginBottom: '20px' }}>Target</b> <br /><br />
                    <div style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', fontFamily: 'sans-serif', color: 'grey' }}>Cham Tower, Plot 12 Nkruma Road, Kampala Ug </div>
                </p>
                <button className="whatsapp__Btn"><i className="fab fa-whatsapp"></i> Chat with us</button>
            </div>
        </Fragment>
    )
}

export default Service;
