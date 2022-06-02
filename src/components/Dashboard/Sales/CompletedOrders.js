import React from 'react';
import * as Icon from 'react-feather';

const CompletedOrders = () => {
    return (
        <div className="stats-card success-card mb-4">
            <h3>
                1297
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Completed Orders</p>
            <i 
                className="lni-check-mark-circle" 
            />
        </div>
    );
};

export default CompletedOrders;