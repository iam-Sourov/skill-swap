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
    console.log(user);

    return (
        <nav className="navbar px-6 md:px-18 text-white fixed top-0  backdrop-blur-md shadow-sm  flex justify-between items-center z-50">
            <div className='relative group'>
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
                        user ? <div className="absolute text-nowrap top-0 -right-[145px] mt-2 hidden group-hover:block  text-sm p-2 rounded ">
                            {user.displayName || "Anonymous User"}
                        </div> : <div className="absolute top-0 -right-35 mt-2  hidden group-hover:block  text-sm p-2 rounded ">
                            {"No User is logged in"}
                        </div>
                    }
                </div>
            </div>
            <div className=" flex justify-between items-center gap-2 ">
                <NavLink to={'/'} className=" md:p-2 hover:text-blue-600">Home</NavLink>
                <NavLink to={'skills'} className=" md:p-2 hover:text-blue-600">All Skills</NavLink>

                {
                    user && <NavLink to={'/profile'} className="md:p-2 hover:text-blue-600">My Profile</NavLink>
                }
                <NavLink to={'/'} className=" md:p-2 hover:text-blue-600">About Us</NavLink>
                <NavLink to={'/'} className=" md:p-2 hover:text-blue-600">Contact Us</NavLink>
            </div>
            <div className=' flex space-x-2'>
                {
                    user ? <button onClick={handleLogOut} className='btn btn-outline  hover:bg-blue-600 hover:border-none text-white border-white'>Log Out</button> : <Link to={'/auth/login'} className='btn btn-outline  hover:bg-blue-600 text-white border-white'>Log In</Link>
                }
                {
                    user ? '' : <Link to={'/auth/signup'} className='btn btn-secondary'>Sign Up</Link>
                }
            </div>
        </nav>

    );
};

export default Navbar;