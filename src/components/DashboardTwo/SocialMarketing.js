import React from 'react';
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

class SocialMarketing extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Social Marketing</h5>
                        <span className="day">Today</span>
                    </div>

                    <div className="marketing-content">
                        <div className="list">
                            <Icon.Facebook 
                                className="icon fb"
                            />
                            <h3>
                                <Link to="">
                                    Facebook Ads
                                </Link>
                            </h3>
                            <p>1.5k Like - 598 Shares</p>
                            <div className="stats">
                                <Icon.TrendingUp 
                                    className="icon text-success"
                                /> 
                                50%
                            </div>
                        </div>

                        <div className="list">
                            <Icon.Instagram 
                                className="icon ins"
                            />
                            <h3>
                                <Link to="">
                                    Instagram Ads
                                </Link>
                            </h3>
                            <p>2.5k Follows - 598 Shares</p>
                            <div className="stats">
                                <Icon.TrendingUp 
                                    className="icon text-success"
                                /> 
                                45%
                            </div>
                        </div>

                        <div className="list">
                            <Icon.Twitter 
                                className="icon twi"
                            />
                            <h3>
                                <Link to="">
                                    Twitter Ads
                                </Link>
                            </h3>
                            <p>1.1k Like - 598 Shares</p>
                            <div className="stats">
                                <Icon.TrendingDown 
                                    className="icon text-danger"
                                /> 
                                25%
                            </div>
                        </div>

                        <div className="list">
                            <Icon.Linkedin 
                                className="icon lin"
                            />
                            <h3>
                                <Link to="">
                                    Linkedin Ads
                                </Link>
                            </h3>
                            <p>1.6k Like - 463 Shares</p>
                            <div className="stats">
                                <Icon.TrendingUp 
                                    className="icon text-success"
                                /> 
                                55%
                            </div>
                        </div>

                        <div className="list">
                            <Icon.Youtube 
                                className="icon ytb"
                            />
                            <h3>
                                <Link to="">
                                    Youtube Ads
                                </Link>
                            </h3>
                            <p>1.5m Subscribe - 598 Shares</p>
                            <div className="stats">
                                <Icon.TrendingUp 
                                    className="icon text-success"
                                /> 
                                75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialMarketing;