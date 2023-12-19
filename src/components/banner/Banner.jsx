import React, { useEffect } from 'react';
import fb from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import mypic from '../../assets/img/My project.png'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, [])

    return (
        <div className='skew-y-6 '>
            {/* Your Banner Code */}
            <div className="hero min-h-screen ">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse text-center text-neutral-content lg:gap-96">
                    {/* Your Hero Section Code */}
                    <div  className='h-[335px] hover:-skew-y-6 transition-all duration-700 bg-slate-600 rounded-lg border mt-40' data-aos="fade-right">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2100" className="relative  -top-40 hero-content flex-col lg:flex-row-reverse ">
                            <img
                                src={mypic}
                                className="max-w-sm rounded-lg shadow-4xl "
                                alt="Hero Image"
                            />

                        </div>
                    </div>
                    <div>
                        <h1 className="mb-5 text-5xl ">hi I'm</h1>
                        <p className="mb-5 text-5xl font-extrabold">
                            Siam Islam
                        </p>
                        <div className="avatar">
                            <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <a href="https://www.facebook.com/siam909q" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="Facebook" className='cursor-pointer' />
                                </a>
                            </div>
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <a href="https://www.linkedin.com/in/siam909/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="LinkedIn" className='cursor-pointer' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MessengerCustomerChat
                pageId="197394270118190"
                appId="281256954477258"

            />
        </div>
    );
};

export default Home;
