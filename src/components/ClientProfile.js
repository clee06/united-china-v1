import React from 'react';
import "./ClientProfile.css";

function ClientProfile() {
    return (
        <>
            <div className="profile__container">    

                <div className="profile__header">
                        <h2><u> Client Profile </u></h2>
                </div>      

    
                <div class='client__profiles'>
                    <div className='profile__wrapper'>

                        <div className='profile__items'>
                            <h2> Financial Instituions </h2>
                        </div>

                        <div className='profile__items'>
                            <h2> Professional & Consultancy Clients </h2>
                        </div>

                        <div className='profile__items'>
                            <h2> Public Transportation & Logistics </h2>
                        </div>

                        <div className='profile__items'>
                            <h2> Airways </h2>
                        </div>

                        <div className='profile__items'>
                            <h2> Publishing & Advertising </h2>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ClientProfile