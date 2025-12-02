import React, { useContext, useEffect } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/footer/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import MainSpinner from '../../Components/spinner/MainSpinner';
import { AuthContext } from '../../Context/AuthContext';




const Root = () => {
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, []);

    if (loading) {
        return <MainSpinner></MainSpinner>
    }
    return (
        <div className='font'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='container mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;