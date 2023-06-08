
import React from 'react'
import bannerImg from '../../images/aboutBanner.png'
import Navbar from '../Navbar'
import Footer from '../footer/Footer'

const Contact = () => {
    return (
        <>
        <div>
            <Navbar />
            <div style={{ position: 'relative' }}>
                <img className='about-header-img' src={bannerImg} alt="" />
                <h1 className='about-header-text'>GET IN TOUCH, WE ARE HERE TO HELP YOU.</h1>
            </div>

            <div>
                <div className="about-content-container">
                    <h1>We’ve got our priorities straight.
                        And they start with you.</h1>
                    <p>We put client relationships first. At Logomantic, we have a legacy of working with long-term
                        clients, enjoying frequent repeat business and positive reviews.</p>
                </div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511999.363939513!2d-124.59730773194227!3d37.16013687278052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1686163968823!5m2!1sen!2s"
                    width="100%" height="450"
                    loading="lazy"></iframe>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact