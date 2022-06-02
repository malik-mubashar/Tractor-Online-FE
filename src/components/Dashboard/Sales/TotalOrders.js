import React from 'react';
import * as Icon from 'react-feather';

const TotalOrders = () => {
    return (
        <div className="stats-card light-blue-card mb-4">
            <h3>
                2099
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total Orders</p>
            <i 
                className="lni-shopping-basket" 
            />
        </div>
    );
};

export default TotalOrders;