import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';

import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext';
import Logo from '../../assets/logo.jpg';


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('Log out Successful')
            }).catch((error) => {
                toast.error(error);
            })
    }

    return (

        <div className="navbar px-6 md:px-18 text-white fixed top-1 bg-neutral/50 backdrop-blur-lg shadow-sm  flex justify-between items-center z-50 ">
            <div className="flex relative group">
                <div className='rounded-full w-12 h-12'>
                    {
                        user ? <img
                            src={user.photoURL || Logo}
                            alt={user.displayName}
                            className='rounded-full'
                            referrerPolicy="no-referrer"
                        /> : <img
                            src={Logo}
                            alt='No User Is Logged In'
                            className='rounded-full'
                        />
                    }
                    {
                        user ? <div className="absolute text-nowrap top-0 -right-38 mt-2 hidden group-hover:block  text-sm p-2 rounded ">
                            {user.displayName || "Anonymous User"}
                        </div> : <div className="absolute top-0 -right-38 mt-2 hidden group-hover:block  text-sm p-2 rounded ">
                            {"No User is logged in"}
                        </div>
                    }
                </div>
            </div>
            <div className="flex-none">
                <ul className=" hidden lg:flex  justify-between items-center gap-2 menu menu-horizontal px-6">
                    <NavLink to={'/'} className=" md:p-2 hover:text-blue-600">Home</NavLink>
                    <NavLink to={'allskills'} className=" md:p-2 hover:text-blue-600">All Skills</NavLink>
                    {
                        user && <NavLink to={'/profile'} className="md:p-2 hover:text-blue-600">My Profile</NavLink>
                    }
                    <a className='md:p-2 hover:text-blue-600' href="#howItWork">About Us</a>
                    <a className='md:p-2 hover:text-blue-600' href="#footer">Contact Us</a>

                </ul>
            </div>
            <div className=' flex justify-center items-center space-x-2'>
                {
                    user ? <button onClick={handleLogOut} className='btn btn-outline  hover:bg-blue-600 hover:border-none text-white border-white'>Log Out</button> : <Link to={'/auth/login'} className='btn btn-outline  hover:bg-blue-600 text-white border-white'>Log In</Link>
                }
                {
                    user ? '' : <Link to={'/auth/signup'} className='btn btn-secondary'>Sign Up</Link>
                }
                <ul className=' lg:hidden flex justify-between items-center menu menu-horizontal'>
                    <li>
                        <details >
                            <summary className='btn btn-outline'>Menu</summary>
                            <ul className=" text-black  flex flex-col rounded-t-none px-4 py-2" >
                                <NavLink to={'/'} className=" hover:text-blue-600">Home</NavLink>
                                <NavLink to={'allskills'} className=" hover:text-blue-600">All Skills</NavLink>
                                {
                                    user && <NavLink to={'/profile'} className=" hover:text-blue-600">My Profile</NavLink>
                                }
                                <a className=' hover:text-blue-600' href="#howItWork">About Us</a>
                                <a className=' hover:text-blue-600' href="#footer">Contact Us</a>
                            </ul>
                        </details>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;