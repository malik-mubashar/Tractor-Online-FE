import React from 'react';
import {ProgressBar } from 'react-bootstrap';

class BounceRate extends React.Component {
    render() {
        return (
            <div className="stats-card purple-card mb-4">
                <h3>
                    73%
                </h3>
                <p>Bounce Rate</p>
                <i 
                    className="lni-stats-up icon-hover" 
                />
                <ProgressBar 
                    label={`${73}%`} 
                    variant="primary" 
                    now={73} 
                    className="mt-3 radius-0"
                />
            </div>
        );
    }
}

export default BounceRate;