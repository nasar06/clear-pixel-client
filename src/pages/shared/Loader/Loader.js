import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <CirclesWithBar
            height="70"
            width="70"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        />
    );
};

export default Loader;