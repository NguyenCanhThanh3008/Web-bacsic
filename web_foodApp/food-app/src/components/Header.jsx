import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.config';

import Avatar from '../img/avatar.png';
import Logo from '../img/logo.png';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [isMenu, setIsmenu] = useState(false);

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionTypes.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsmenu(!isMenu);
        }
    };

    const logout = () => {
        setIsmenu(false);
        localStorage.clear();
        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        });
    };

    const showCart = () => {
        dispatch({
            type: actionTypes.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <div className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
            {/* desktop and tablet */}
            <div className='hidden md:flex w-full h-full justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={Logo} alt='' className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'
                    >
                        <li className='navHeader'>Home</li>
                        <li className='navHeader'>Menu</li>
                        <li className='navHeader'>About us</li>
                        <li className='navHeader'>Service</li>
                    </motion.ul>
                    <div
                        className='relative flex items-center justify-center'
                        onClick={showCart}
                    >
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center '>
                                <p className='text-xs text-white font-semibold'>
                                    {cartItems.length}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                            src={user ? user.photoURL : Avatar}
                            alt='avatar'
                            onClick={login}
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='absolute top-12 right-0 bg-gray-50 shadow-xl rounded-xl flex flex-col w-40 overflow-hidden'
                            >
                                {user &&
                                    user.email ===
                                        'dinhquyen03032000@gmail.com' && (
                                        <Link to='/createitem'>
                                            <p
                                                onClick={() => setIsmenu(false)}
                                                className='px-4 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'
                                            >
                                                New item <MdAdd />
                                            </p>
                                        </Link>
                                    )}
                                <p
                                    onClick={logout}
                                    className='px-4 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'
                                >
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className='flex justify-between md:hidden w-full h-full'>
                <div
                    className='relative flex items-center justify-center'
                    onClick={showCart}
                >
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    {cartItems && cartItems.length > 0 && (
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center '>
                            <p className='text-xs text-white font-semibold'>
                                {cartItems.length}
                            </p>
                        </div>
                    )}
                </div>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={Logo} alt='' className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='relative'>
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        src={user ? user.photoURL : Avatar}
                        alt='avatar'
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='absolute top-12 right-0 bg-gray-50 shadow-xl rounded-xl flex flex-col w-40 overflow-hidden'
                        >
                            {user &&
                                user.email ===
                                    'dinhquyen03032000@gmail.com' && (
                                    <Link to='/createitem'>
                                        <p className='px-4 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'>
                                            New item <MdAdd />
                                        </p>
                                    </Link>
                                )}
                            <ul className='flex flex-col'>
                                <li className='navHeader px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                    Home
                                </li>
                                <li className='navHeader px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                    Menu
                                </li>
                                <li className='navHeader px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                    About us
                                </li>
                                <li className='navHeader px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                    Service
                                </li>
                            </ul>
                            <p
                                onClick={logout}
                                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer'
                            >
                                Logout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
