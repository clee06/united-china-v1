import React from 'react';
import './ServicesIntro.css';
import ServiceLanding from './ServiceLanding';

function ServicesIntro() {
    return (

        <>                      
            <div className='services__container'>
                <ServiceLanding /> 

                {/* CORPORATE MULTI RISK */}
                <div className="services__wrapper">
                    <div className='services__left'>
                        <img src='../images/img-corporate-2.jpg' alt=''></img>
                    </div>
                    <div className='services__rightInfo'>
                        <h3 className='services__title'> Corporate Multi-Risk Solutions </h3>
                        <p className='services__info'> 
                        Business Package Insurance <br/>
                        Office Package Insurance <br />
                        Shop / Retailer Package Insurance 
                        </p>
                    </div>
                </div>

                {/* PROPERTY INSURANCE */}
                <div className="services__left__wrapper">
                    <div className='services__leftInfo'>
                        <h3 className='services__title'> Property Insurance </h3>
                        <p className='services__info'> 
                        Fire & Allied Insurance <br/> 
                        Property All Risks Insurance <br />
                        Theft Insurance
                        </p>
                    </div>

                    <div className='services__right'>
                        <img src='../images/img-property.jpg' alt=''></img>
                    </div>
                </div>

                {/* Transportation Insurance */}
                <div className="services__wrapper">
                    <div className='services__left'>
                        <img src='../images/img-marine.jpg' alt=''></img>
                    </div>
                    <div className='services__rightInfo'>
                        <h3 className='services__title'> Transportation Insurance </h3>
                        <p className='services__info'> 
                        Marine Insurance <br/>
                        Inland Transit Insurance <br/>
                        Bulk Shipment Insurance <br/>
                        Freight Fowarder Liability Insurance <br/>
                        </p>
                    </div>
                </div>

                {/* FINANCIAL LINES INSURANCE */}
                <div className="services__left__wrapper">
                    <div className='services__leftInfo'>
                        <h3 className='services__title'> Financial Line Insurance </h3>
                        <p className='services__info'> 
                        Director & Officer Liability Insurance<br/> 
                        Kidnap & Ransom Insurance <br />
                        Fraud & Crime Insurance
                        </p>
                    </div>

                    <div className='services__right'>
                        <img src='../images/financial-insurance.jpg' alt=''></img>
                    </div>
                </div>

                {/* Liability Insurance */}
                <div className="services__wrapper">
                    <div className='services__left'>
                        <img src='../images/liability-insurance.jpg' alt=''></img>
                    </div>
                    <div className='services__rightInfo'>
                        <h3 className='services__title'> Liability Insurance </h3>
                        <p className='services__info'> 
                        Commerical General Liability Insurance <br/>
                        Products Liability Insurance <br/>
                        Professional Indemnity Insurance <br/>
                        Environmental Liability Insurance <br />
                        Cyber Insurance
                        </p>
                    </div>
                </div>

                {/* EMPLOYEE BENEFITS */}
                <div className="services__left__wrapper">
                    <div className='services__leftInfo'>
                        <h3 className='services__title'> Employee Benefits </h3>
                        <p className='services__info'> 
                        Group Medical Insurance <br/> 
                        Senior Office Top Up Medical Plan <br />
                        Key Man Insurance <br />
                        Group Life Insurance <br />
                        Group Wellness Benefits
                        </p>
                    </div>

                    <div className='services__right'>
                        <img src='../images/employee-benefits.jpg' alt=''></img>
                    </div>
                </div>

                {/* Personal Insurance */}
                <div className="services__wrapper">
                    <div className='services__left'>
                        <img src='../images/personal-insurance.jpg' alt=''></img>
                    </div>
                    <div className='services__rightInfo'>
                        <h3 className='services__title'> Personal Insurance </h3>
                        <p className='services__info'> 
                        Motor Insurance <br/>
                        Home Insurance <br/>
                        Individual Medical Insurance <br/>
                        Health Insurance <br/>
                        Fine Art and Valuable Insurance
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServicesIntro;