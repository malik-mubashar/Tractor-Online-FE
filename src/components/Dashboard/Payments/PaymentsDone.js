import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PaymentsDone = () => {
    const paymentsDone = 85;
    const progressInstance = <ProgressBar 
                                striped  
                                variant="success"
                                now={paymentsDone} 
                                label={`${paymentsDone}%`} 
                                className="radius-0"
                            />;
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-header">
                    <h5 className="card-title">Payments Done</h5>
                </div>

                <div className="mt-3">
                    {progressInstance}
                </div>
            </div>
        </div>
    );
};

export default PaymentsDone;