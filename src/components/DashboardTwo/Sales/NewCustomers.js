import React from 'react';
import * as Icon from 'react-feather';

class NewCustomers extends React.Component {
    render() {
        return (
            <div className="stats-card danger-card mb-4">
                <h3>
                    7,890
                    <Icon.ArrowUpCircle 
                        className="icon"
                    />
                </h3>
                <p>New Customers</p>
                <i 
                    className="lni-users" 
                />
            </div>
        );
    }
}

export default NewCustomers;