import React, { useEffect, useState } from 'react';


import { useNavigate, useSearchParams } from 'react-router';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [searchParams] = useSearchParams();
    const navigate= useNavigate();



    useEffect(() => {
        const filledEmail = searchParams.get('typedEmail');
        if (filledEmail) {
            setEmail(filledEmail);
        }
    }, [searchParams])
    const handleForgetPassword = (e) => {
        e.preventDefault();
        window.location.href = "https://mail.google.com";
        navigate('/');
        
    }

    return (
        <div className="grid place-content-center min-h-screen justify-center items-center ">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForgetPassword} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label text-white">Email</label>
                        <input type="email" name='email' value={email} className="input  text-black" placeholder="Email" />
                        <button type='submit' className="btn btn-secondary mt-2 ">
                            Reset Password</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;