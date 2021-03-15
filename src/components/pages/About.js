import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import ClientProfile from "../ClientProfile";
import BusinessPartners from "../BusinessPartners";
import Background from "../Background";


function About() {
    return (
     <>
        <div className="about__container">
            {/* CEO profile */}
            {/* To be added? */}
            <Background />
            <BusinessPartners />   
            <ClientProfile />   
            <Footer />
        </div>
     </>
    )
}

export default About
