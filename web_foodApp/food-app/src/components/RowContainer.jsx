import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { actionTypes } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();

    const [{ cartItems }, dispatch] = useStateValue();

    const [items, setItems] = useState([]);

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addToCart();
    }, [items]);

    const addToCart = () => {
        dispatch({
            type: actionTypes.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };
    return (
        <div
            ref={rowContainer}
            className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
                flag
                    ? 'overflow-x-scroll scrollbar-none'
                    : 'overflow-x-hidden flex-wrap justify-center'
            }`}
        >
            {data &&
                data.map((item) => (
                    <div
                        key={item.id}
                        className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-[225px] my-12 backdrop-blur-lg bg-cardOverlay p-2 rounded-lg hover:drop-shadow-lg flex flex-col items-center justify-between'
                    >
                        <div className='w-full flex items-center justify-between'>
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                src={item.imageURL}
                                alt=''
                                className='w-40 h-40 object-contain -mt-8 drop-shadow-2xl'
                            />
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                onClick={() => setItems([...cartItems, item])}
                                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                            >
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>

                        <div className='w-full flex flex-col items-end justify-end'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>
                                {item.title}
                            </p>
                            <p className='mt-1 text-sm text-gray-500'>
                                {item.calories} Calories
                            </p>
                            <div className='flex items-center gap-8'>
                                <p className='text-lg text-headingColor font-semibold'>
                                    <span className='text-sm text-red-500'>
                                        $
                                    </span>{' '}
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default RowContainer;
