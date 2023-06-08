

import React from 'react'
import ContactForm from '../home/ContactForm'
import logo from '../../images/logo.gif'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Footer = () => {
    return (
        <div>
            <div>
                <ContactForm />
            </div>

            <div className='footer-container'>

                <div className='footer-section-one'>
                    <img style={{ width: '180px' }} src={logo} alt='logo'/>
                    <small>
                        Logo Mantic provides broad range of technology services to help organizations
                        translate their business objectives in to IT initiatives and solutionS
                    </small>
                </div>

                {/* ✔ ➤  */}
                <div className='footer-section-two'>
                    <h3>Services</h3>
                    <small> ✔ Website Design</small>
                    <small> ✔ Wordpress Development</small>
                    <small> ✔ Ecommerce Web Development</small>
                    <small> ✔ Web Application Development</small>
                    <small> ✔ Backend Development</small>
                    <small> ✔ Custom Website Development</small>
                    <small> ✔ Mobile App Development</small>
                    <small> ✔ Website Maintainance</small>
                    <small> ✔ Domain And Hosting</small>
                </div>

                <div className='footer-section-three'>
                    <h3>Contact Information</h3>

                    <div className='footer-section-three-inner-one'>
                        <p> <b>Business Hours </b></p>
                        <small>Time: 24/7</small>
                        <small>Monday - Friday: 9am - 5pm</small>
                        <small>Phone: 12345678</small>
                        <small>Adress: xyz street, Abc country</small>
                    </div>

                    <div className='footer-section-three-inner-two'>
                        <OverlayTrigger placement='bottom' overlay={<Tooltip>facebook</Tooltip>}>
                            <i style={{ color: '#0F90F3' }} className="fa-brands fa-facebook fa-2x tooltiptext"></i>
                        </OverlayTrigger>

                        <OverlayTrigger placement='bottom' overlay={<Tooltip>linkedin</Tooltip>}>
                        <i style={{ color: '#0A66C2' }} className="fa-brands fa-linkedin fa-2x"></i>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement='bottom' overlay={<Tooltip>email</Tooltip>}>
                        <i style={{ color: '#0F90F3' }} className="fa-solid fa-envelope fa-2x"></i>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement='bottom' overlay={<Tooltip>whatsapp</Tooltip>}>
                        <i style={{ color: '#25D366' }} className="fa-brands fa-whatsapp fa-2x"></i>
                        </OverlayTrigger>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer