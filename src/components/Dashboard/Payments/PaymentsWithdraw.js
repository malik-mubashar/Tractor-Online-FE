import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PaymentsWithdraw = () => {
    const paymentsWithdraw = 15;
    const progressInstance = <ProgressBar 
                                striped  
                                variant="danger"
                                now={paymentsWithdraw} 
                                label={`${paymentsWithdraw}%`} 
                                className="radius-0"
                            />;
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-header">
                    <h5 className="card-title">Payments Withdraw</h5>
                </div>

                <div className="mt-3">
                    {progressInstance}
                </div>
            </div>
        </div>
    );
};

export default PaymentsWithdraw;