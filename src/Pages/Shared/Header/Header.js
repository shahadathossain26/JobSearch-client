import React from 'react';
import websiteLogo from "../../../images/logo1.png"
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">ContactUs</a></li>
                    </ul>
                </div>
                <a href="/" className="text-xl"><img className='w-[100px]' src={websiteLogo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-primary font-bold' href="/">Home</a></li>
                    <li><a className='text-primary font-bold' href="/">ContactUs</a></li>
                    <li><a className='text-primary font-bold' href="/">About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/" className="btn btn-primary text-white">Sing In</a>
            </div>
        </div>

    );
};

export default Header;