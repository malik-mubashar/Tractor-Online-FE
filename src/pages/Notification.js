import React from 'react';
import {Row, Col, Breadcrumb, Image, Media, ListGroup} from 'react-bootstrap';
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer'

// User Images
import user1 from '../assets/img/user/user1.jpg';
import user2 from '../assets/img/user/user2.jpg';
import user3 from '../assets/img/user/user3.jpg';
// Post Image
import postImage from '../assets/img/post-image.png';


class Notification extends React.Component {
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
                            <h1>Notification</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Notification</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col lg={6}>
                            <div className="notifications-card mb-4">
                                <h5 className="noti-card-title">Notifications</h5>

                                <ListGroup>
                                    <ListGroup.Item>
                                        <Icon.CloudLightning 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Aaron Rossi</Link> went traveling
                                            <div className="time">1 min ago</div>
                                        </div>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.Sun 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Brad Joe</Link> played destiny
                                            <div className="time">15 min ago</div>
                                        </div>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.User 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Mitch</Link> & <Link to="#">2 others</Link> followed you.
                                            <div className="time">30 min ago</div>
                                        </div>

                                        <div className="content pt-0">
                                            <ul>
                                                <li><Image className="wh-30" src={user1} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user2} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user3} alt="User" roundedCircle /></li>
                                            </ul>
                                        </div>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.Camera 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">George Petty</Link> uploaded a photo
                                            <div className="time">2 min ago</div>
                                        </div>

                                        <div className="content">
                                            <Image src={postImage} alt="User"  />
                                        </div>    
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.Flag 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Marco Gomez</Link> flagged your post
                                            <div className="time">2 min ago</div>
                                        </div>

                                        <div className="content media mt-2">
                                            <Image className="wh-40 mr-3" src={user1} alt="User" roundedCircle /> 
                                            <Media.Body>
                                                <h5 className="fs-14 mb-1">George Petty</h5>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </Media.Body>
                                        </div>    
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.ThumbsUp 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Mitch</Link> & <Link to="#">2 others</Link> Liked your post.
                                            <div className="time">3 min ago</div>
                                        </div>

                                        <div className="content pt-0">
                                            <ul>
                                                <li><Image className="wh-30" src={user1} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user2} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user3} alt="User" roundedCircle /></li>
                                            </ul>
                                        </div>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Icon.MessageSquare 
                                            className="icon"  
                                        />

                                        <div className="pr-70">
                                            <Link to="#">Mitch</Link> & <Link to="#">2 others</Link> commented on your post.
                                            <div className="time">1 min ago</div>
                                        </div>

                                        <div className="content pt-0">
                                            <ul>
                                                <li><Image className="wh-30" src={user1} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user2} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user3} alt="User" roundedCircle /></li>
                                            </ul>
                                        </div>
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item>
                                        <Icon.Settings 
                                            className="icon"  
                                        />

                                        <div className="pr-70">
                                            <Link to="#">Mitch</Link> & <Link to="#">2 others</Link> updated their settings.
                                            <div className="time">4 min ago</div>
                                        </div>

                                        <div className="content pt-0">
                                            <ul>
                                                <li><Image className="wh-30" src={user1} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user2} alt="User" roundedCircle /></li>
                                                <li><Image className="wh-30" src={user3} alt="User" roundedCircle /></li>
                                            </ul>
                                        </div>
                                    </ListGroup.Item>
 
                                    <ListGroup.Item>
                                        <Icon.File 
                                            className="icon"  
                                        />
                                        <div className="pr-70">
                                            <Link to="#">Philip Satemburgo</Link> & <Link to="#">2 others</Link> quit his job.
                                            <div className="time">4 min ago</div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/">
                                            <Image
                                                width={60}
                                                height={60}
                                                className="mr-3"
                                                src={user1}
                                                alt="User" 
                                                thumbnail
                                            />
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Aaron Rossi</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media> 
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user2}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status online right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Marco Gomez</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media>     
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user3}
                                                alt="User" 
                                                roundedCircle 
                                            />
                                            <span className="status online right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Brad Joe</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media>
                                </div>
                            </div>
 
                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/">
                                            <Image
                                                width={60}
                                                height={60}
                                                className="mr-3"
                                                src={user1}
                                                alt="User" 
                                                thumbnail
                                            />
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Mitch Petty</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media>
                                    
                                    <Media className="notification-card-one mt-3">
                                        <Link to="/">
                                            <Image
                                                width={60}
                                                height={60}
                                                className="mr-3"
                                                src={user2}
                                                alt="User" 
                                                thumbnail
                                            />
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Petty</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">1 minutes ago</span>
                                        </Media.Body>
                                    </Media>

                                    <Media className="notification-card-one mt-3">
                                        <Link to="/">
                                            <Image
                                                width={60}
                                                height={60}
                                                className="mr-3"
                                                src={user3}
                                                alt="User" 
                                                thumbnail
                                            />
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Petty Rossi</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">02.02.19 &nbsp; 08:00 AM</span>
                                        </Media.Body>
                                    </Media>
                                </div>
                            </div>
 
                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user1}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status online right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">Mitch Rossi</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media>

                                    <Media className="notification-card-one mt-3">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user2}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status away right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Mitch</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">5 minutes ago</span>
                                        </Media.Body>
                                    </Media>

                                    <Media className="notification-card-one mt-3">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user3}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status ofline right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Petty</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">02.02.19 &nbsp; 08:00 AM</span>
                                        </Media.Body>
                                    </Media>
                                </div>
                            </div>
 
                            <div className="card mb-4">
                                <div className="card-body">
                                    <Media className="notification-card-one">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user1}
                                                alt="User" 
                                                roundedCircle 
                                            />
                                            <span className="status online right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Mitch</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">0 seconds ago</span>
                                        </Media.Body>
                                    </Media>

                                    <Media className="notification-card-one mt-3">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user2}
                                                alt="User" 
                                                roundedCircle 
                                            />
                                            <span className="status away right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Mitch</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">2 minutes ago</span>
                                        </Media.Body>
                                    </Media>

                                    <Media className="notification-card-one mt-3">
                                        <Link to="/" className="position-relative mr-3">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user3}
                                                alt="User" 
                                                roundedCircle 
                                            />
                                            <span className="status ofline right-3 bottom-3"></span>
                                        </Link>

                                        <Media.Body>
                                            <h5 className="fs-14 m-0">
                                                <Link to="/" className="global-color">George Mitch</Link>
                                            </h5>
                                            <p className="mt-1 mb-1">
                                                Just sent a new comment!
                                            </p>
                                            <span className="gray-color">02.02.19 &nbsp; 08:00 AM</span>
                                        </Media.Body>
                                    </Media>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="notification-card-two text-center">
                                        <Link to="/">
                                            <Image
                                                width={60}
                                                height={60}
                                                src={user1}
                                                alt="User" 
                                                thumbnail roundedCircle
                                            />
                                        </Link>

                                        <h5 className="fs-14 mt-3 mb-0">
                                            <Link to="/" className="global-color">Aaron Rossi</Link>
                                        </h5>
                                        <p className="mt-1 mb-1 mw-350">
                                            Just sent a new comment! Lorem Ipsum is simply dummy text of the.
                                        </p>
                                        <span className="gray-color">0 seconds ago</span>
                                    </div> 
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="notification-card-one text-center">
                                        <Link to="/" className="position-relative d-inline-block">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user2}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status online right-3 bottom-3"></span>
                                        </Link>
 
                                        <h5 className="fs-14 mt-3 mb-0">
                                            <Link to="/" className="global-color">Mitch Rossi</Link>
                                        </h5>
                                        <p className="mt-1 mb-1 mw-350">
                                            Just sent a new comment! Lorem Ipsum is simply dummy text of the.
                                        </p>
                                        <span className="gray-color">5 minutes ago</span>
                                    </div>     
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="notification-card-one text-center">
                                        <Link to="/" className="position-relative d-inline-block">
                                            <Image
                                                width={60}
                                                height={60} 
                                                src={user3}
                                                alt="User" 
                                                thumbnail roundedCircle 
                                            />
                                            <span className="status ofline right-3 bottom-3"></span>
                                        </Link>
 
                                        <h5 className="fs-14 mt-3 mb-0">
                                            <Link to="/" className="global-color">George Mitch</Link>
                                        </h5>
                                        <p className="mt-1 mb-1 mw-350">
                                            Just sent a new comment! Lorem Ipsum is simply dummy text of the.
                                        </p>
                                        <span className="gray-color">03.03.19 &nbsp; 05:00 AM</span>
                                    </div>     
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Notification;