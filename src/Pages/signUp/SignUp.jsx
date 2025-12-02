import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Spinner from '../../Components/spinner/Spinner';

const SignUp = () => {
    const { setUser, signUp, googleLogIn, setLoading, loading, updateUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [typedEmail, setTypedEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true)
        
        const regExPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!regExPass.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
            setLoading(false);
            return;
        }
        signUp(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                updateUser({ displayName: name, photoURL: imageURL })
                form.reset();
                toast.success('Account created & profile updated successfully!')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleGoogleSignUp = () => {
        googleLogIn().then(res => {
            const user = res.user;
            setUser(user)
            toast.success('Account Created')
            navigate(`${location.state ? location.state : '/'}`)
        }).catch(error => {
            toast.error(error.message);
        })
    }

    const passForgetPassword = () => {
        navigate(`/auth/forgetpassword?typedEmail=${encodeURIComponent(typedEmail)}`)
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row mt-16">
                <div className="text-center text-white lg:text-left">
                    <h1 className="text-5xl text-nowrap  font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        New!!!!, Create an Account now
                    </p>
                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-white">Name</label>
                            <input type="text" name='name' className="input text-black" placeholder="Name" />

                            <label className="label text-white">PhotoURL</label>
                            <input type="text" name='photo' className="input text-black" placeholder="PhotoURL" />

                            <label className="label text-white">Email</label>
                            <input onChange={(e) => {
                                setTypedEmail((e.target.value));
                            }} type="email" name='email' className="input text-black" placeholder="Email" required />
                            <div className='relative'>
                                <label className="label text-white">Password</label>
                                <input type={show ? 'text' : 'password'} name='password' className="input text-black" placeholder="Password" />
                            </div>
                            <div onClick={() => setShow(toggle => !toggle)} className='absolute  inset-y-0 top-21 md:right-12 right-10 flex items-center cursor-pointer z-50'>
                                {
                                    show ? <FaEyeSlash size={19} color='black'></FaEyeSlash> : <FaEye size={19} color='black'></FaEye>
                                }
                            </div>
                            <div className='flex flex-col'>
                                <button className='text-left' onClick={passForgetPassword}>
                                    <Link to={'/auth/forgetpassword'} className="link text-white hover:text-secondary link-hover hover:underline">Forgot password?</Link>
                                </button>
                                <Link to={'/auth/login'} className="link text-white hover:text-secondary link-hover hover:underline">Already Have An Account? log In Now </Link>
                            </div>
                            <button type='submit' className="btn btn-secondary mt-2 ">
                                {loading ? <Spinner></Spinner> : 'Register'}</button>

                            <button type='button' onClick={handleGoogleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Sign Up with Google
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;