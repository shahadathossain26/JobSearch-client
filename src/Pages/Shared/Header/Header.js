import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import websiteLogo from "../../../images/logo1.png"
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => { console.error(err) })
    }

    return (
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='text-primary font-bold'>Home</Link></li>
                        <li><Link to='/about' className='text-primary font-bold'>About</Link></li>
                        <li><Link to='contact_us' className='text-primary font-bold'>ContactUs</Link></li>
                    </ul>
                </div>
                <a href="/" className="text-xl"><img className='w-[100px]' src={websiteLogo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className='text-primary font-bold'>Home</Link></li>
                    <li><Link to='/about' className='text-primary font-bold'>About</Link></li>
                    <li><Link to='contact_us' className='text-primary font-bold'>ContactUs</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className='flex items-center'>
                    <h3 className='text-black font-semibold'>Job Seeker</h3>
                    <label htmlFor='toggleButton' className='w-20 h-10 rounded-full cursor-pointer  relative border border-gray-300 mx-2'  >
                        <input type="checkbox" name="toggleButton" id="toggleButton" className=' sr-only peer' />
                        <span className='w-2/5 h-4/5 absolute rounded-full bg-primary top-1 left-1 peer-checked:left-11 transition-all duration-500'></span>
                    </label>
                    <h3 className='text-black font-semibold'>Job Poster</h3>
                </div>
                <div className='ml-10'>
                    {
                        user?.email ? <Link onClick={handleSignOut} className='btn btn-primary text-white'>SignOut</Link>
                            :
                            <Link to='/signin' className='btn btn-primary text-white'>SignIn</Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default Header;