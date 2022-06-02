import React from 'react';
import {Row, Col, Breadcrumb, Form, Button, CardColumns, Card} from 'react-bootstrap';
import FlipMove from 'react-flip-move';
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer';

class Notes extends React.Component {
    state = {
        notes: [...this.props.notes], // Include default props to default state
        text: '',
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    // Add new demo text
    onHandleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    // Add New demo notes
    onHandleNoteSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            notes: state.notes.concat(newItem),
            text: ''
        }));
    }

    // Delete demo notes
    onHandleDelete = () => {
        this.setState(state => {
            const [first, ...rest] = state.notes;
            return {
                notes: rest, first
            };
        });
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
                            <h1>Notes</h1>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Notes</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col lg={12}>
                            {/* Notes Item */}
                            <CardColumns>
                                {/* Notes Card */}
                                <FlipMove>
                                    {
                                        this.state.notes.map((note, idx) => (
                                            <Card className="notes-card mb-4" key={idx}>
                                                <Card.Body>
                                                    <Card.Text>
                                                        {note.text}
                                                        <Button 
                                                            variant="danger"
                                                            onClick={this.onHandleDelete}>
                                                            <span className="lni-close"></span>
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card> 
                                        ))
                                    }
                                </FlipMove>
                                
                                {/* End Notes Card */}


                            </CardColumns>
                            {/* End Notes Item */}

                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="notes-content">
                                        <Form onSubmit={this.onHandleNoteSubmit}>
                                            <Form.Control 
                                                as="textarea"
                                                onChange={this.onHandleChange}
                                                value={this.state.text} 
                                                rows="4" 
                                                placeholder="Add your notes.." />
                                            <Button 
                                                variant="primary" 
                                                type="submit">
                                                Add
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

// Default demo notes props
Notes.defaultProps = {
    notes: [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
        {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
        {
            id: 3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
        {
            id: 4,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
        {
            id: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
        {
            id: 6,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
        },
    ]
}

export default Notes;