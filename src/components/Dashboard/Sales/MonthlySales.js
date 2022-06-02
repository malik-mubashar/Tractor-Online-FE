import React from 'react';
import * as Icon from 'react-feather';

const MonthlySales = () => {
    return (
        <div className="stats-card purple-card mb-4">
            <h3>
                $7,590
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Last Month Sales</p>
            <i 
                className="lni-cart-full" 
            />
        </div>
    );
};

export default MonthlySales;