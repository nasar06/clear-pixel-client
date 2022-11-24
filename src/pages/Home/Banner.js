import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[450px] w-10/12 mx-auto rounded-lg" style={{ backgroundImage: `url("https://i.pinimg.com/736x/8a/87/75/8a8775dfc4ba988d9e3003f09c08bddc.jpg")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-8/12">
                    <h1 className="mb-5 text-5xl font-bold">The best websites to buy used camera gear</h1>
                    <p className="mb-5"></p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;