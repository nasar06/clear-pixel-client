import { Card } from 'flowbite-react';
import React from 'react';
import { FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";

const Cproduct = ({ camera, handelOrder }) => {

    const { img, productName, sellerName, time, location, originalPrice, resalePrice, use, status } = camera
    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-24">
                <figure><img style={{ width: '400px', height: '350px' }} src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{productName}</h2>
                    <div className='flex items-center justify-between mt-6'>
                        <span className='font-bold text-red-800 flex items-center gap-2'><FaMapMarkerAlt />{location}</span>
                        <span className='font-bold '>Years Of Use: <strong className='text-primary'>{use}</strong></span>
                    </div>
                    <div className='mt-5'>
                        <span className='text-xl font-bold flex items-center mt-3'>OriginalPrice $<strong className='text-red-600 line-through'>{originalPrice}</strong></span>
                        <span className='text-xl font-bold flex items-center mt-3'>ResalePrice $<strong className=''>{resalePrice}</strong></span>

                    </div>
                    {
                        status === 'verified' &&
                        <div className='mt-4'>
                            <span className='flex text-primary items-center font-bold mt-3'><FaRegCheckCircle /> <span className='text-black'>{sellerName}</span></span>
                        </div>
                    }
                    <span className='text-blue-600'>got Posted: {time.slice(0, 12)}</span>

                    <div className="card-actions justify-end">
                        {/* The button to open modal */}
                        <label onClick={() => handelOrder(camera)} htmlFor="Order-modal" className="btn btn-primary text-white">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cproduct;