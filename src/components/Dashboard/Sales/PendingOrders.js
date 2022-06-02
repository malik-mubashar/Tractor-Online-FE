import React from 'react';
import * as Icon from 'react-feather';

const PendingOrders = () => {
    return (
        <div className="stats-card danger-card mb-4">
            <h3>
                1277
                <Icon.ArrowDownCircle 
                    className="icon"
                />
            </h3>
            <p>Pending Orders</p>
            <i 
                className="lni-reload" 
            />
        </div>
    );
};

export default PendingOrders;