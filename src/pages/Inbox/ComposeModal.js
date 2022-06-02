import React from 'react';
import {Row, Col, Form, Button, Modal} from 'react-bootstrap';

class DefaultModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col sm={6}> 
                                <Form.Group>
                                    <Form.Control type="email" placeholder="To" />
                                </Form.Group>
                            </Col>

                            <Col sm={6}> 
                                <Form.Group>
                                    <Form.Control type="text" placeholder="CC" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea" rows="8" placeholder="Write Something" />
                        </Form.Group>

                        <Button variant="primary w-80" onClick={this.props.onHide}>
                            Send
                        </Button>

                        <Button variant="secondary float-right w-80" onClick={this.props.onHide}>
                            Cancle
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
  
class ComposeModal extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <>
                <Button
                    variant="primary rounded btn-block"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    Compose
                </Button>

                <DefaultModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </>
        );
    }
}

export default ComposeModal;