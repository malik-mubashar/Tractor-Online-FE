import React from 'react';
import {Row, Col, Breadcrumb, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer'
import * as Icon from 'react-feather';

// User Big Images
import user1 from '../assets/img/user/big/1.png';
import user2 from '../assets/img/user/big/2.png';
import user3 from '../assets/img/user/big/3.png';
import user4 from '../assets/img/user/big/4.png';
import user5 from '../assets/img/user/big/5.png';
import user6 from '../assets/img/user/big/6.png';

class UsersCard extends React.Component {
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
                            <h1>Users Card</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Users Card</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Users Card Style One */}
                    <h5 className="mb-3 fs-18 sm-center">Octagon Image Style</h5>
                    <Row>
                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user4} 
                                        className="octagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>Managing Director</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span className="purple-text">984</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span className="primary-text">685K</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span className="success-text">434K</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user5} 
                                        className="octagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Christopher Di</h4>
                                    <p>Web Developer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span className="purple-text">954</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span className="primary-text">655K</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span className="success-text">454K</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user6} 
                                        className="octagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Nancy Doe</h4>
                                    <p>Designer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span className="purple-text">974</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span className="primary-text">675K</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span className="success-text">474K</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}
                    </Row>
                    {/* End Users Card Style One */}

                    {/* Users Card Style Two */}
                    <h5 className="mb-3 mt-3 fs-18 sm-center">Image Circle Style</h5>
                    <Row>
                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user1} 
                                        roundedCircle
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>Managing Director</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>466</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>678</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>954</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user2} 
                                        roundedCircle
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>UI/UX Designer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>123</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>4534</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>5465</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user3} 
                                        roundedCircle
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">John Doe</h4>
                                    <p>Lead Designer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>745</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>2342</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>6456</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}
                    </Row>
                    {/* End Users Card Style Two */}

                    {/* Users Card Style Three */}
                    <h5 className="mb-3 mt-3 fs-18 sm-center">Nonagon Image Style</h5>
                    <Row>
                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user4} 
                                        className="nonagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>Managing Director</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>984K</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>23M</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>53M</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user5} 
                                        className="nonagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Christopher Di</h4>
                                    <p>Developer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>32K</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>21M</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>34M</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user6} 
                                        className="nonagon-style"
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Nancy Doe</h4>
                                    <p>Manager</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>12M</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>13M</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>57M</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}
                    </Row>
                    {/* End Users Card Style Three */}

                    {/* Users Card Style Four */}
                    <h5 className="mb-3 mt-3 fs-18 sm-center">Image Bevel Style</h5>
                    <Row>
                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user1} 
                                        className="bevel-style"  
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>Managing Director</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>464</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>568</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>987</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={6} lg={4}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user2} 
                                        className="bevel-style" 
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">Frank Martin</h4>
                                    <p>UI/UX Designer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>644</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>875</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>345</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}

                        {/* User card */}
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }}>
                            <div className="single-user-card hover-card mb-4">
                                <div className="p-30">
                                    <Image 
                                        src={user3} 
                                        className="bevel-style" 
                                        alt="User Image"
                                    />
                                    <h4 className="mb-0 mt-4">John Doe</h4>
                                    <p>Lead Designer</p>
                                    <div className="social-links">
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Twitter 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Facebook 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Linkedin 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.Instagram 
                                                className="icon"
                                            />
                                        </Link>
                                        <Link to="">
                                            <Icon.GitHub 
                                                className="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="user-card-foot">
                                    <li>
                                        Total Post
                                        <span>366</span>
                                    </li>
                                    <li className="bor-lr">
                                        Following
                                        <span>754</span>
                                    </li>
                                    <li>
                                        Followers
                                        <span>325</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* End user card */}
                    </Row>
                    {/* End Users Card Style Four */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default UsersCard;