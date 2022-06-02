import React from 'react';
import {ProgressBar } from 'react-bootstrap';

class NewVisits extends React.Component {
    render() {
        return (
            <div className="stats-card danger-card mb-4">
                <h3>
                    5,890
                </h3>
                <p>New Visits</p>
                <i 
                    className="lni-users icon-hover" 
                />
                <ProgressBar 
                    label={`${50}%`} 
                    variant="danger" 
                    now={50} 
                    className="mt-3 radius-0"
                />
            </div>
        );
    }
}

export default NewVisits;