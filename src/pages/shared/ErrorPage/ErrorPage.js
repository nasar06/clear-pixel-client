import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'><img style={{width:'100%'}} src='https://cdn.dribbble.com/users/1291613/screenshots/3198569/minion_stuart_404_800x600.png'></img></Link>
        </div>
    );
};

export default ErrorPage;