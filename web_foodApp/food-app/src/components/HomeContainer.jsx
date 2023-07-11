import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import I1 from '../img/i1.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section
            id='home'
            className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'
        >
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img
                            className='w-full h-full object-contain'
                            src={Delivery}
                            alt=''
                        />
                    </div>
                </div>
                <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor'>
                    The fastest delivery in{' '}
                    <span className='text-[3rem] md:text-[5rem] text-orange-600'>
                        your city
                    </span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit error facilis, aliquid ab magni, nostrum voluptate
                    cumque odio vel suscipit maiores ullam deleniti? Sed,
                    aperiam possimus doloremque consectetur magnam placeat.
                </p>
                <button className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>
            </div>
            <div className='px-2 flex-1 flex items-center relative'>
                <img
                    src={HeroBg}
                    alt='hero bg'
                    className='ml-auto h-420 w-full lg:w-auto lg:h-650'
                />
                <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 py-4 gap-4 flex-wrap lg:px-20'>
                    {heroData &&
                        heroData.map((item) => (
                            <div
                                key={item.id}
                                className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'
                            >
                                <img
                                    src={item.imageSrc}
                                    alt={item.name}
                                    className='w-20 lg:w-40 -mt-10 lg:-mt-20'
                                />
                                <p className='text-base lg:text-xl text-textColor font-semibold mt-2 lg:mt-4'>
                                    {item.name}
                                </p>
                                <p className='text-[12px] lg:text-sm font-semibold text-gray-500 my-1 lg:my-3'>
                                    {item.decp}
                                </p>
                                <p className='text-sm text-headingColor font-semibold'>
                                    <span className='text-xs text-red-600'>
                                        $
                                    </span>{' '}
                                    {item.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;
