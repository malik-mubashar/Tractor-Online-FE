import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PaymentsDue = () => {
    const paymentsDue = 25;
    const progressInstance = <ProgressBar 
                                striped  
                                variant="info"
                                now={paymentsDue} 
                                label={`${paymentsDue}%`} 
                                className="radius-0"
                            />;
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-header">
                    <h5 className="card-title">Payments Due</h5>
                </div>

                <div className="mt-3">
                    {progressInstance}
                </div>
            </div>
        </div>
    );
};

export default PaymentsDue;