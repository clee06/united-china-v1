import React from 'react';
import './BusinessPartners.css';

function BusinessPartners() {
    return (
        <>
            <div className='partners__header'>
                <h2 className='partners__title'> Business Partners </h2>
            </div>           

            <div className='partners__container'>              
                <div className='partners__card'>
                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/AIA-logo2.png' alt='logo'></img> 
                        <p> AIA Hong Kong </p>           
                    </div>

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/AXA-logo.png' alt='logo'></img> 
                        <p> AXA Hong Kong </p>           
                    </div>

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/aig-logo.png' alt='logo'></img> 
                        <p> AIG Hong Kong </p>           
                    </div>  

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/bupa-logo2.png' alt='logo'></img> 
                        <p> BUPA </p>           
                    </div>
                    
                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/ing-logo.png' alt='logo'></img> 
                        <p> ING Insurance </p>           
                    </div >    

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/manulife-logo.png' alt='logo'></img> 
                        <p> Manulife </p>           
                    </div>     

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/msig-logo.png' alt='logo'></img> 
                        <p> MSIG Insurance </p>           
                    </div>     

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/metlife-icon.png' alt='logo'></img> 
                        <p> Metlife Insurance </p>           
                    </div>   

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/cigna-logo.png' alt='logo'></img> 
                        <p> CIGNA </p>          
                    </div>          

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/prudential-logo.png' alt='logo'></img> 
                        <p> Prudential </p>          
                    </div>  

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/mm-logo.png' alt='logo'></img> 
                        <p> Mass Mutual </p>          
                    </div>                         

                    <div className='partners__item__details'>
                        <img className='partner__logo' src='../images/insurance-logos/zurich-logo.png' alt='logo'></img> 
                        <p> Zurich Insurance</p>           
                    </div>   
                </div>
            </div>
        </>
    )
}

export default BusinessPartners;