import React from 'react';
import * as Icon from 'react-feather';

const TotalOrders = ({systemData}) => {
    return (
        <div className="stats-card light-blue-card mb-4">
            <h3>
                {systemData && systemData.total_ads}
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Total Ads</p>
            <i 
                className="lni-shopping-basket" 
            />
        </div>
    );
};

export default TotalOrders;