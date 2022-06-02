import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer'
import * as Icon from 'react-feather';


class TimeLine extends React.Component {
    state = {
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper"> 
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}
                
                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Time Line</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Time Line</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* TimeLine area */}
                    <div className="timeline-centered">
                        <article className="timeline-card left-aligned">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Saturday</span> 
                                    <span>13 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-purple">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Team meeting</h3>
                                    <span className="d-block text-muted fs-12">
                                        5 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>
                
                        <article className="timeline-card">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Sunday</span> 
                                    <span>14 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-primary">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Project meeting</h3>
                                    <span className="d-block text-muted fs-12">
                                        10 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>
                
                        <article className="timeline-card left-aligned">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Monday</span> 
                                    <span>15 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-success">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Project deadline</h3>
                                    <span className="d-block text-muted fs-12">
                                        15 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>
                
                        <article className="timeline-card">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Wednesday</span> 
                                    <span>16 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-secondary">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Meeting with the client about the project.</h3>
                                    <span className="d-block text-muted fs-12">
                                        5 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>

                        <article className="timeline-card left-aligned">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Tuesday</span> 
                                    <span>17 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-info">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Meeting with boss</h3>
                                    <span className="d-block text-muted fs-12">
                                        30 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>

                        <article className="timeline-card">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Tuesday</span> 
                                    <span>20 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-warning">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Meeting with boss</h3>
                                    <span className="d-block text-muted fs-12">
                                        40 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>
 
                        <article className="timeline-card left-aligned">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Thursday</span> 
                                    <span>25 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-danger">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>Cancel company tour</h3>
                                    <span className="d-block text-muted fs-12">
                                        50 minutes ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>

                        <article className="timeline-card">
                            <div className="timeline-body">
                                <time className="time">
                                    <span>Friday</span> 
                                    <span>30 March 2019</span>
                                </time>
                                <div className="timeline-icon bg-info">
                                    <Icon.Calendar 
                                        className="icon"
                                    />
                                </div>
                                <div className="timeline-label">
                                    <h3>End of the week</h3>
                                    <span className="d-block text-muted fs-12">
                                        2 hours ago
                                    </span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </article>
 
                        <article className="timeline-card begin">
                            <div className="timeline-body">
                                <div className="timeline-icon">
                                    <i className="entypo-flight"></i>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* End TimeLine area */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default TimeLine;