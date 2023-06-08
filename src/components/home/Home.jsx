
import Navbar from '../Navbar'
import './home.css';
import bannerImg from '../../images/homebanner2.jfif'
import Header from '../Header';
import clientCompanyOne from '../../images/clientCompanyOne.png'
import clientCompanyTwo from '../../images/clientCompanyTwo.png'
import clientCompanyThree from '../../images/clientCompanyThree.png'
import clientCompanyFour from '../../images/clientCompanyFour.png'
import clientCompanyFive from '../../images/clientCompanyFive.png'
import clientCompanySix from '../../images/clientCompanySix.png'
import clientCompanySeven from '../../images/clientCompanySeven.png'
import clientCompanyEight from '../../images/clientCompanyEight.png'
import FeaturedProduct from './FeaturedProduct';
import workingInLoop from '../../images/workingInLoop.png'
import approachTimeAndMaterial from '../../images/approachTimeAndMaterial.webp'
import approachFixedPrice from '../../images/approachFixedPrice.webp'
import approachDedicatedTeam from '../../images/approachDedicatedTeam.webp'
import { useState } from 'react';
import Feedback from '../Feedback';
import clientAlaxImage from '../../images/client-Alax-image.jpg'
import clientRonImage from '../../images/client-Ron-image.jpg'
import clientKaseyImage from '../../images/client-Kasey-image.jpg'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from '../footer/Footer';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 650 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 650, min: 0 },
        items: 1
    }
};


const Home = () => {

    let [image, setImage] = useState(approachTimeAndMaterial)

    const handleImage = (index) => {
        setImage(
            index === 1 ? approachTimeAndMaterial : index === 2 ? approachFixedPrice :
                index === 3 ? approachDedicatedTeam : image
        )
    }
    return (

        <div>
            <Navbar />
            <div style={{ position: 'relative' }}>
                <img width='100%' className='header-img' src={bannerImg} alt="" />
                <Header />
            </div>

            <div className='client-companies-container' >
                <p> Companies we have worked for </p>
                <marquee behavior="scroll" direction="left">
                    <img src={clientCompanyOne} alt='' />
                    <img src={clientCompanyTwo} alt='' />
                    <img src={clientCompanyThree} alt='' />
                    <img src={clientCompanyFour} alt='' />
                    <img src={clientCompanyFive} alt='' />
                    <img src={clientCompanySix} alt='' />
                    <img src={clientCompanySeven} alt='' />
                    <img src={clientCompanyEight} alt='' />
                </marquee>
            </div>

            <section className='home-content-container'>
                <h1>We create custom website, Web apps
                    and software that delivers on your
                    business goals.</h1>

                <div className='home-service-detail'>
                    <p>We create responsive web applications and sites leveraging the most robust technologies in the industry to help you boost your business – the unique value proposition you deliver to your customers – with a bespoke, custom-crafted websites, web apps and products (that only you have access to) without worrying about or managing any of the technical details</p>
                    <p>We’re a full-cycle web and mobile application development company creating solutions for mobiles, desktops, and wearables. At Logomantic, we cultivate deep, probing insights about your business and how web, mobile, database, and IoT technology could multiply and accelerate your organization’s worldwide impact.</p>
                </div>
            </section>


            <div className='loop-working-container'>

                <div className='loop-working-container-text'>
                    <h4>At Logomantic, we help businesses grow exponentially, by designing the
                        technology tools that they need to win.</h4>
                    <h6>Web-focused development using the latest tools to deliver an effective solution for you.</h6>
                </div>

                <div>
                    <img src={workingInLoop} alt=''/>
                </div>
            </div>


            <FeaturedProduct />


            <div className='projects-industries-container'>

                <div className='projects-industries-headings'>
                    <h2>Web Design, Development and Marketing Solutions for</h2>
                    <h4>Fortune 500 Companies From 40+ Industries</h4>
                    <small>We take pride in delivering crystal clear and spotless work to our clients. Ensuring every step is according to your needs, Crea8ive Studios delivers what it promises. Keeping you in mind, we offer all types of website and logo designs, video animations, and mobile applications.</small>
                </div>

                <div className='estimated-orders-done'>
                    <div>
                        <h3>400+</h3>
                        <small>Projects Ordered</small>
                    </div>
                    <div>
                        <h3>1000+</h3>
                        <small> Satisfied Clients</small>
                    </div>
                    <div>
                        <h3>900+</h3>
                        <small>Project Completed</small>
                    </div>
                    <div>
                        <h3>300+</h3>
                        <small>Reviews Secured</small>
                    </div>
                </div>
            </div>

            <div className='development-approach-container'>
                <div className='development-approach-heading'>
                    <h1>Agile approach to development for your business.</h1>
                    <p>We follow the result-focused way of doing things and the Agile approach helps us stay
                        flexible and maintain control.</p>
                </div>

                <div className='development-approach-inner-container'>

                    <div className='development-approach-text-container'>
                        <div onMouseOver={() => handleImage(1)}>
                            <h3>Time and Material</h3>
                            <p>This approach is focused on small and mid-sized businesses as it best suits complex and long-term projects. Includes: Sketchy project concepts, changeable workflow and high control requirements.</p>
                        </div>

                        <div onMouseOver={() => handleImage(2)}>
                            <h3>Fixed Price</h3>
                            <p>The Fixed price model is suitable for startups and projects with limited project scope. We estimate the time and budget required to deliver an MVP before the development starts and handle all the management tasks. Includes: Defined time frames, detailed specification, Short-term project for MVP and No changes planned.</p>
                        </div>

                        <div onMouseOver={() => handleImage(3)}>
                            <h3>Dedicated Team</h3>
                            <p>The Dedicated Team approach best works for enterprise projects. There are two scenarios we're faced with most frequently - Dedicated team to build a product from scratch and Dedicated team for further development. Includes: Suitable for complex projects, Long-term collaboration, Global market targeting and Desired involvement level.</p>
                        </div>
                    </div>

                    <img className='development-approach-image' src={image} alt=''/>
                </div>
            </div>


            <div className="feedback-container">
                <div className='feedback-container-heading'>
                    <h1>Feedback</h1>
                    <p>The feedback we get from our customers tells about our
                        cooperation better than we do and makes us move forward.</p>
                </div>

                <Carousel autoPlay={true} autoPlaySpeed={9000} infinite={true}
                    className='carousel-container' responsive={responsive}>
                    <Feedback clientImage={clientAlaxImage} clientName='Alex' clientCountry='New York'
                        feedback="We started with a small project, which went very well. Then, a slightly bigger project. We've now been working together for the past two years on all of my big projects."
                    />
                    <Feedback clientImage={clientRonImage} clientName='Ron' clientCountry='New York'
                        feedback="They answer queries almost immediately and are so very helpful and patient. I really have full confidence in having them look after my web site - it has taken a huge weight off my shoulders."
                    />
                    <Feedback clientImage={clientKaseyImage} clientName='Kasey' clientCountry='New York'
                        feedback="The product, built by Logomantic, complied with our corporate style and functional specifications. The team followed the agreed timeline and budget flawlessly despite."
                    />
                </Carousel>
            </div>


            <Footer />




        </div>

    )
}

export default Home

