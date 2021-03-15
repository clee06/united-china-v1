import React from 'react';
import "./ClientProfile.css";

function ClientProfile() {
    return (
        <>
            <div className="profile__container">    

                <div className="profile__header">
                        <h2> Client Profile </h2>
                </div>      

                <div class='client__profiles'>
                    <div className='profile__wrapper'>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2>Financial Instituions</h2></a> */}
                            <h2> Financial Instituions </h2>
                            <p>Principal Insurance Company HK Ltd. 信安 保 險</p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2>Professional & Consultancy Clients</h2></a> */}
                            <h2> Professional & Consultancy Clients </h2>
                            <p> Benoy Ltd. </p>
                            <p> Lead 8 Ltd. </p> 
                            <p> LWDesign Ltd.</p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Public Transportation & Logistics </h2></a> */}
                            <h2> Public Transportation & Logistics </h2>
                            <p> Cargo-Partner Logistics (China) Ltd. </p>
                            <p> Geodis Wilson HK Ltd. </p> 
                            <p> Hellmann Worldwide Logistics Ltd. </p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Airways </h2></a> */}
                            <h2> Airways </h2>
                    
                            <p> South African Airways 南 非 航 空 </p>
                        </div>

                        <div className='profile__items'>
                            {/* <a className='profile__title'><h2> Publishing & Advertising </h2></a> */}
                            <h2> Publishing & Advertising </h2>

                            <p> POAD Ltd. </p>
                            <p> Light House Technologies Ltd. </p> 
                            <p> LIM InfraSystems Co. Ltd. / Square Solutions </p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ClientProfile