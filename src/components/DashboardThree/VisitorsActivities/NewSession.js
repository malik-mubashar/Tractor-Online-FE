import React from 'react';
import {ProgressBar } from 'react-bootstrap';

class NewSession extends React.Component {
    render() {
        return (
            <div className="stats-card light-blue-card mb-4">
                <h3>
                    85%
                </h3>
                <p>New Session</p>
                <i 
                    className="lni-user icon-hover" 
                />
                <ProgressBar 
                    label={`${50}%`} 
                    variant="primary" 
                    now={50} 
                    className="mt-3 radius-0"
                />
            </div>
        );
    }
}

export default NewSession;