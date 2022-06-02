import React from 'react';
import {Row, Col, ProgressBar } from 'react-bootstrap';

class OrderStats extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Order Stats</h5>
                    </div>
                    <p className="mb-3 line-height-1">Overview of orders</p>
                    <div className="order-stats-card">
                        <h3>Success</h3>
                        <ProgressBar 
                            label={`${90}%`} 
                            variant="success" 
                            now={90} 
                            className="mt-2 radius-0"
                        />
                    </div>
                    <div className="order-stats-card mt-4">
                        <h3>Pending</h3>
                        <ProgressBar 
                            label={`${50}%`} 
                            variant="info" 
                            now={50} 
                            className="mt-2 radius-0"
                        />
                    </div>
                    <div className="order-stats-card mt-4">
                        <h3>Failed</h3>
                        <ProgressBar 
                            label={`${30}%`} 
                            variant="warning" 
                            now={30} 
                            className="mt-2 radius-0"
                        />
                    </div>
                    <Row>
                        <Col sm={4}>
                            <div className="order-number-stats mt-4">
                                <span className="number text-success">79885</span>
                                <p>Success</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="order-number-stats mt-4">
                                <span className="number text-info">356</span>
                                <p>Pending</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="order-number-stats mt-4">
                                <span className="number text-warning">265</span>
                                <p>Failed</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default OrderStats;