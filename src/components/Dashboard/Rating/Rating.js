import React from 'react';

const Rating = (props) => {
    let stars = [];
    for (let i = 0; i < props.ratings; i++ ){
        stars.push(<span key={i} className="lni lni-star-filled"></span>);
    }
    return <>{stars}</>;
};

export default Rating;