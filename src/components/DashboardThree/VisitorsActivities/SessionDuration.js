import React from 'react';
import {ProgressBar } from 'react-bootstrap';

class SessionDuration extends React.Component {
    render() {
        return (
            <div className="stats-card success-card mb-4">
                <h3>
                    01.15
                </h3>
                <p>Session Duration</p>
                <i 
                    className="lni-road icon-hover" 
                />
                <ProgressBar 
                    label={`${50}%`} 
                    variant="success" 
                    now={50} 
                    className="mt-3 radius-0"
                />
            </div>
        );
    }
}

export default SessionDuration;