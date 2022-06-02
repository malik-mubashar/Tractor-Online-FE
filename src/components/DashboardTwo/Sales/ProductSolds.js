import React from 'react';
import * as Icon from 'react-feather';

class ProductSolds extends React.Component {
    render() {
        return (
            <div className="stats-card light-blue-card mb-4">
                <h3>
                    7,690
                    <Icon.ArrowUpCircle 
                        className="icon"
                    />
                </h3>
                <p>Product Solds</p>
                <i 
                    className="lni-shopping-basket" 
                />
            </div>
        );
    }
}

export default ProductSolds;