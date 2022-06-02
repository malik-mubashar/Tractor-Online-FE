import React from 'react';
import {Row, Col, Breadcrumb, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';

// Cards Images
import card_thumb_one from '../../assets/img/card-thumb-one.jpg';
import card_thumb_two from '../../assets/img/card-thumb-two.jpg';
import card_thumb_three from '../../assets/img/card-thumb-three.jpg';
import card_overlay_thumb from '../../assets/img/overlay-thumb-bg.jpg';

class Cards extends React.Component {
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
                            <h1>Cards</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Cards</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    
                    {/* Basic Cards */}
                    <h6 className="fw-600 mb-3">Basic Cards</h6>
                    <Row>
                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Img src={card_thumb_one} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Button</Button>
                                </Card.Body>
                                <Card.Img src={card_thumb_two} className="radius-0" alt="Card Image" />
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Img src={card_thumb_three} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Basic Cards */}

                    {/* Cards Content Types */}
                    <h6 className="fw-600 mb-3">Cards Content Types</h6>
                    <Row>
                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title className="m-0">Card Heading</Card.Title>
                                </Card.Body>

                                <Card.Img src={card_thumb_one} className="radius-0" alt="Card Image" />

                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title className="m-0">Card Heading</Card.Title>
                                </Card.Body>

                                <Card.Img src={card_thumb_two} className="radius-0" alt="Card Image" />

                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title className="m-0">Card Heading</Card.Title>
                                </Card.Body>

                                <Card.Img src={card_thumb_three} className="radius-0" alt="Card Image" />

                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Cards Content Types */}
                    
                    {/* Cards Without Image */}
                    <h6 className="fw-600 mb-3">Cards Without Image</h6>
                    <Row>
                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Cards Without Image */}

                    {/* Cards with Image Caption */}
                    <h6 className="fw-600 mb-3">Cards with Image Caption</h6>
                    <Row>
                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Img src={card_thumb_one} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text><small className="text-muted">Last updated 5 mins ago</small></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">

                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text><small className="text-muted">Last updated 2 mins ago</small></Card.Text>
                                </Card.Body>

                                <Card.Img src={card_thumb_two} className="radius-0" alt="Card Image" />
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Img src={card_thumb_three} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Heading</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text><small className="text-muted">Last updated 10 mins ago</small></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Cards with Image Caption */}

                    {/* Cards Text alignment */}
                    <h6 className="fw-600 mb-3">Cards Text alignment</h6>
                    <Row>
                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4 text-left">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4 text-center">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4 text-right">
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted fs-12">Card Subtitle</Card.Subtitle>

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Cards Text alignment */}

                    {/* Cards Kitchen Sink */}
                    <h6 className="fw-600 mb-3">Cards Kitchen Sink</h6>
                    <Row>
                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4">
                                <Card.Img src={card_thumb_one} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>

                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} lg={4} xl={4}>
                            <Card className="mb-4 text-center">
                                <Card.Img src={card_thumb_two} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>

                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={4} xl={4}>
                            <Card className="mb-4 text-right">
                                <Card.Img src={card_thumb_three} className="radius-0" alt="Card Image" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>

                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Kitchen Sink */}

                    {/* Cards Header and Footer */}
                    <h6 className="fw-600 mb-3">Cards Header and Footer</h6>
                    <Row>
                        <Col lg={6}>
                            <Card className="mb-4 text-center">
                                <Card.Header className="header">Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card className="mb-4 text-center">
                                <Card.Header className="header">Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Cards Header and Footer */}


                    {/* Image Overlays */}
                    <h6 className="fw-600 mb-3">Image Overlays</h6>
                    <Row>
                        <Col lg={6}>
                            <Card className="mb-4 bg-dark text-white">
                                <Card.Img src={card_overlay_thumb} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text className="white-color">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="white-color">Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card className="mb-4 bg-dark text-white">
                                <Card.Img src={card_overlay_thumb} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text className="white-color">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="white-color">Last updated 5 mins ago</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    {/* End Image Overlays */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Cards;