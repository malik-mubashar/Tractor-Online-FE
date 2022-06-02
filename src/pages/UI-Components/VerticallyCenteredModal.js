import React from 'react';
import {Modal, Button, ButtonToolbar } from 'react-bootstrap';


class DefaultModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Centered Modal</h5>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
  
class VerticallyCenteredModal extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }
  
    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <ButtonToolbar>
                <Button
                    variant="primary"
                    onClick={() => this.setState({ modalShow: true })}
                >
                    Launch Vertically Centered Modal
                </Button>

                <DefaultModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
            </ButtonToolbar>
        );
    }
}

export default VerticallyCenteredModal;