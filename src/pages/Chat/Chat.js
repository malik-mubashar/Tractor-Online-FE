import React from 'react';
import {Row, Col, Breadcrumb, Tab, Nav, Image, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../pages/Footer/Footer'

// User Images
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.jpg';
import user3 from '../../assets/img/user/user3.jpg';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.jpg';

class Chat extends React.Component {
    state = {
        sideMenu: true
    };

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
                            <h1>Chat</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Chat</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Chat */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="chat">
                        <Row className="mb-4">
                            <Col xl={12}>
                                <Tab.Content className="inbox-content-wrap">
                                    <Tab.Pane eventKey="chat">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="chatOne">
                                            <Row>
                                                <Col md={4}>
                                                    {/* Chat item nav */}
                                                    <div className="mail-item-nav">
                                                        {/* Search form */}
                                                        <Form className="search-contact">
                                                            <Form.Control type="text" placeholder="Search..." />
                                                        </Form>
                                                        {/* End search form */}

                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatOne">
                                                                    <Image className="wh-30" src={user1} alt="User" roundedCircle />
                                                                    <span className="status online"></span>

                                                                    <div className="info">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Welcome to React World</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatTwo">
                                                                    <Image className="wh-30" src={user2} alt="User" roundedCircle />
                                                                    <span className="status online"></span>

                                                                    <div className="info">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 2, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatThree">
                                                                    <Image className="wh-30" src={user3} alt="User" roundedCircle />
                                                                    <span className="status online"></span>

                                                                    <div className="info">
                                                                        <div className="name">Brad Joe</div>
                                                                        <p>New order informations</p>
                                                                        <span className="date">Mar 3, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatFour">
                                                                    <Image className="wh-30" src={user4} alt="User" roundedCircle />
                                                                    <span className="status online"></span>

                                                                    <div className="info">
                                                                        <div className="name">Mitch Petty</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 4, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatFive">
                                                                    <Image className="wh-30" src={user5} alt="User" roundedCircle />
                                                                    <span className="status away"></span>

                                                                    <div className="info">
                                                                        <div className="name">George Petty</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 5, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatSix">
                                                                    <Image className="wh-30" src={user1} alt="User" roundedCircle />
                                                                    <span className="status away"></span>

                                                                    <div className="info">
                                                                        <div className="name">Petty Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 6, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatSeven">
                                                                    <Image className="wh-30" src={user2} alt="User" roundedCircle />
                                                                    <span className="status ofline"></span>

                                                                    <div className="info">
                                                                        <div className="name">George Petty</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 7, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatEight">
                                                                    <Image className="wh-30" src={user3} alt="User" roundedCircle />
                                                                    <span className="status ofline"></span>

                                                                    <div className="info">
                                                                        <div className="name">Mitch Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy...</p>
                                                                        <span className="date">Mar 8, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="chatNine">
                                                                    <Image className="wh-30" src={user4} alt="User" roundedCircle />
                                                                    <span className="status ofline"></span>

                                                                    <div className="info">
                                                                        <div className="name">Brad Joe</div>
                                                                        <p>New order informations</p>
                                                                        <span className="date">Mar 9, 2019</span>
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </div>
                                                    {/* End Chat item nav */}
                                                </Col>

                                                <Col md={8}>
                                                    <Tab.Content>
                                                        {/* chatOne */}
                                                        <Tab.Pane eventKey="chatOne" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user1} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Aaron Rossi</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatOne */}

                                                        {/* chatTwo */}
                                                        <Tab.Pane eventKey="chatTwo" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Marco Gomez</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatTwo */}

                                                        {/* chatThree */}
                                                        <Tab.Pane eventKey="chatThree" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user3} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Brad Joe</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatThree */}

                                                        {/* chatFour */}
                                                        <Tab.Pane eventKey="chatFour" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user4} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Mitch Petty</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End EmailFour */}

                                                        {/* chatFive */}
                                                        <Tab.Pane eventKey="chatFive" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user5} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">George Petty</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatFive */}

                                                        {/* chatSix */}
                                                        <Tab.Pane eventKey="chatSix" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user1} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Petty Rossi</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatSix */}

                                                        {/* chatSeven */}
                                                        <Tab.Pane eventKey="chatSeven" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">George Petty</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}


                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatSeven */}

                                                        {/* chatEight */}
                                                        <Tab.Pane eventKey="chatEight" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user3} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Mitch Rossi</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatEight */}

                                                        {/* chatNine */}
                                                        <Tab.Pane eventKey="chatNine" className="relative">
                                                            <div className="email-details-warp chat-details-warp">
                                                                <div className="d-flex">
                                                                    <Image className="wh-40 mr-2" src={user5} alt="User" roundedCircle />
                                                                    <div className="info">
                                                                        <div className="name mt-2 fs-15">Brad Joe</div>
                                                                    </div>
                                                                </div>

                                                                <hr/>

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}

                                                                {/* Chat list right */}
                                                                <div className="chat-list-right">
                                                                    <Image className="wh-40" src={user1} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Aaron Rossi</div>
                                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list right */}

                                                                {/* Chat list left */}
                                                                <div className="chat-list-left">
                                                                    <Image className="wh-40 mr-2" src={user2} alt="User" roundedCircle />
                                                                    <div className="chat-details">
                                                                        <div className="name">Marco Gomez</div>
                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                                        <span className="date">Mar 1, 2019</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Chat list left */}
                                                            </div>

                                                            <div className="chat-box">
                                                                <Form>
                                                                    <Form.Control as="textarea" rows="3" placeholder="Type a message here" />
                                                                </Form>
                                                            </div>
                                                        </Tab.Pane>
                                                        {/* End chatNine */}
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    {/* End Chat */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default Chat;