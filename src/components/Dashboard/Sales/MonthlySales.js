import React from 'react';
import * as Icon from 'react-feather';

const MonthlySales = ({systemData}) => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
                {systemData && systemData.featured_ads}
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Featured ads</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default MonthlySales;