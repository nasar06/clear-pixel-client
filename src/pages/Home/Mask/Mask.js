import React from 'react';

const Mask = () => {
    return (
        <div className='flex justify-center my-24'>
            <div className='flex'>
                <img style={{width:'150px'}} className="mask mask-hexagon-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFkiPOqzos1JOEdI8GkyVkmlp1oHPhklqnQ&usqp=CAU" />
                <img style={{width:'150px'}} className="mask mask-hexagon-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTGTbGjdzj00zEypz9HtFTUv3ujZA0Sj-1Q&usqp=CAU" />
                <img style={{width:'150px'}} className="mask mask-hexagon-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMksB_hJQX5X8KAlR9Jd2N1vPf_XJ0ATEMQ&usqp=CAU" />
            </div>
            <div>
                <img src='https://m.media-amazon.com/images/I/81o6z3YrNZL._SX425_.jpg'></img>
            </div>
        </div>
    );
};

export default Mask;