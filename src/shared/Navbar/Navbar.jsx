import { useState } from "react";
import { NavLink } from "react-router-dom";
import pdf from '../../../public/myresume.pdf'
import s from "../../assets/animation/navicon.json"
import { useLottie } from "lottie-react";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const navLinks =
        <>
            <li><NavLink to='/' className="btn btn-outline btn-default pt-2 border-b-amber-600 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">Home</NavLink></li>

            <li><NavLink to='/a' className="btn btn-outline btn-default pt-2 border-b-amber-600 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">About</NavLink></li>
            
        </>

        const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const options = {
        animationData: s,
        loop: 3,

    };

    const { View } = useLottie(options);

    return (
        <div>
            <div className={navbar ? 'navbar bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 bg-white bg-opacity-10 fixed z-10 bg-transparent' : 'navbar bg-white bg-opacity-10 fixed z-10 bg-transparent'}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <span className=" w-24  ml-20 hidden sm:block md:block" >{View}</span>
                    {/* <a className="btn btn-ghost text-xl">Siam</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {navLinks}
                        
                    </ul>
                </div>
                <div className="navbar-end mr-20">
                    <a href={pdf} className="btn" download="Resume">Get My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;