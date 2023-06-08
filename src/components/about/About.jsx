

import Navbar from '../Navbar'
import bannerImg from '../../images/aboutBanner.png'
import Footer from '../footer/Footer'
const About = () => {
    return (
        <>
        <div>
            <Navbar />
            <div style={{ position: 'relative' }}>
                <img className='about-header-img' src={bannerImg} alt="" />
                <h1 className='about-header-text'>WE DON’T STOP UNTIL WE MAKE YOUR IDEA WORK.</h1>
            </div>

            <div className="about-content-container">
                <h1>We’ve got our priorities straight.
                    And they start with you.</h1>
                <p>We put client relationships first. At Logomantic, we have a legacy of working with long-term
                    clients, enjoying frequent repeat business and positive reviews.</p>
            </div>

            <div className='badges-main-container'>
                <div className="badges-container">
                        <h6>2016 - 2018</h6>
                        <h3>BEST COMPANY TO WORK IN CALIFORNIA</h3>
                        <i className="fa-solid fa-trophy fa-3x"></i>
                </div>

                <div className="badges-container">
                        <h6>2016 - 2018</h6>
                        <h3>BEST COMPANY TO WORK IN CALIFORNIA</h3>
                        <i className="fa-solid fa-trophy fa-3x"></i>
                </div>

                <div className="badges-container">
                        <h6>2016 - 2018</h6>
                        <h3>BEST COMPANY TO WORK IN CALIFORNIA</h3>
                        <i className="fa-solid fa-trophy fa-3x"></i>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About