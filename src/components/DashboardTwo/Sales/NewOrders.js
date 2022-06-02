import React from 'react';
import * as Icon from 'react-feather';

class NewOrders extends React.Component {
    render() {
        return (
            <div className="stats-card success-card mb-4">
                <h3>
                    7,790
                    <Icon.ArrowUpCircle 
                        className="icon"
                    />
                </h3>
                <p>New Orders</p>
                <i 
                    className="lni-cart" 
                />
            </div>
        );
    }
}

export default NewOrders;