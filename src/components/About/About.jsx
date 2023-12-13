import { useLottie } from 'lottie-react';
import about from '../../assets/animation/about.json'

const About = () => {

    const options = {
        animationData: about,
        loop: 1,

    };

    const { View } = useLottie(options);
    return (
        <div className='w-full'>
            {/* Your Banner Code */}
            <div className="hero w-full min-h-screen ">
                <div className="hero-overlay"></div>
                <div className="hero-content flex-col lg:flex-row-reverse text-center text-neutral-content lg:gap-96">
                    {/* Your Hero Section Code */}
                    
                        <div className=" hero-content flex-col lg:flex-row-reverse animate-wiggle">
                            {/* <img
                                src={View}
                                className="max-w-sm rounded-lg shadow-4xl "
                                alt="Hero Image"
                            /> */}
                            <span className='w-96 border rounded-lg'>{View}</span>
                        </div>
                    
                    <div>
                        <h1 className="mb-5 text-5xl ">Asslamualikum</h1>
                        {/* <p className="mb-5 text-5xl font-extrabold">
                            I'm Siam Islam
                        </p> */}
                        <p className="mb-5 text-xl">
                            As a practicing Muslim, I bring sincerity and integrity to my work. My commitment to honesty is reflected not only in my professional endeavors but in all aspects of life.
                        </p>
                        {/* <div className="avatar">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;