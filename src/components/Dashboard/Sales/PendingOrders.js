import React from 'react';
import * as Icon from 'react-feather';

const PendingOrders = ({ systemData}) => {
    return (
        <div className="stats-card danger-card mb-4">
            <h3>
                {systemData && systemData.unfeatured_ads}
                <Icon.ArrowDownCircle 
                    className="icon"
                />
            </h3>
            <p>Ads that are not Featured</p>
            <i 
                className="lni-reload" 
            />
        </div>
    );
};

export default PendingOrders;