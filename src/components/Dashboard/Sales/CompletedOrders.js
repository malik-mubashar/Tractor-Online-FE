import React from 'react';
import * as Icon from 'react-feather';

const CompletedOrders = ({systemData}) => {
    return (
        <div className="stats-card success-card mb-4">
            <h3>
                {systemData && systemData.featured_requested}
                <Icon.ArrowUpCircle 
                    className="icon"
                />
            </h3>
            <p>Ads Requested to be Featured</p>
            <i 
                className="lni-check-mark-circle" 
            />
        </div>
    );
};

export default CompletedOrders;