import React from 'react';
import { Link } from "react-router-dom";
import { Image } from 'react-bootstrap';

// User Images
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.jpg';

class NewCustomersList extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">New Customers</h5>
                        <span className="day">This Week</span>
                    </div>

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user1}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status online right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Amber Gibs</Link>
                        </h5>
                        <span className="gray-color fs-11">2 Minutes ago</span>
                        <span className="price">$2,000</span>
                    </div>
                    {/* End New customer card */}

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user2}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status online right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Carl Roland</Link>
                        </h5>
                        <span className="gray-color fs-11">3 Minutes ago</span>
                        <span className="price">$3,000</span>
                    </div>
                    {/* End New customer card */}

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user3}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status online right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Paul Wilson</Link>
                        </h5>
                        <span className="gray-color fs-11">4 Minutes ago</span>
                        <span className="price">$4,000</span>
                    </div>
                    {/* End New customer card */}

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user4}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status online right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Alice Jenkins</Link>
                        </h5>
                        <span className="gray-color fs-11">5 Minutes ago</span>
                        <span className="price">$5,000</span>
                    </div>
                    {/* End New customer card */}

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user5}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status away right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Lauren Cox</Link>
                        </h5>
                        <span className="gray-color fs-11">5 Minutes ago</span>
                        <span className="price">$6,000</span>
                    </div>
                    {/* End New customer card */}

                    {/* New customer card */}
                    <div className="new-customer">
                        <Link to="/" className="profile mr-3">
                            <Image
                                src={user4}
                                alt="User" 
                                roundedCircle 
                            />
                            <span className="status ofline right-3 bottom"></span>
                        </Link>
                        <h5 className="fs-13 m-0">
                            <Link to="/" className="global-color">Jessie Barnett</Link>
                        </h5>
                        <span className="gray-color fs-11">5 Minutes ago</span>
                        <span className="price">$10,000</span>
                    </div>
                    {/* End New customer card */}
                </div>
            </div>
        );
    }
}

export default NewCustomersList;