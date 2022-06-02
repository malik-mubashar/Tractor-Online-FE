import React from 'react';
import FlipMove from 'react-flip-move';
import {Row, Col, Breadcrumb, Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer'
import TodoList from '../components/Todos/TodoList';

class Todos extends React.Component {
    state = {
        items: [
            { id: 1, text: 'Meeting with Aaron Rossi', done: true },
            { id: 2, text: 'Pick up kids from school', done: false },
            { id: 3, text: 'Print Statements', done: false },
            { id: 4, text: 'Prepare for presentation', done: false },
            { id: 5, text: 'Create invoice', done: false }
        ],
        text: '',
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    // Add text to demo items
    _handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    // Add new demo items
    _handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            done: false,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    // Done default demo items
    markItemDone = (i) => {
        this.setState(state => {
            const items = state.items.map((item) => {
                if (item.id === i){
                    return {
                        ...item,
                        done: !item.done
                    };
                } else {
                    return item;
                }
            });
            return {
                items,
            };
        });
    }

    // Delete demo todo items
    handleDelete = () => {
        this.setState(state => {
            const [first, ...rest] = state.items;
            return {
                items: rest, first
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
                            <h1>Todos</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Todos</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Todo list */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body todo-list">
                                    <div className="card-header">
                                        <h5 className="card-title">Todo List</h5>
                                    </div>
                                    
                                    <Form className="add-new-task" onSubmit={this._handleSubmit}>
                                        <Form.Control 
                                            type="text" 
                                            onChange={this._handleChange}
                                            value={this.state.text}
                                            placeholder="What do you need to do today?" 
                                        />
                                        <Button variant="primary" type="submit">
                                            Add
                                        </Button>
                                    </Form>
                                    
                                    <ul>
                                        <FlipMove duration={250} easing="ease-out">
                                            {this.state.items.map((item, idx) => (
                                                // File path: src/components/Todos/TodoList.js
                                                <TodoList 
                                                    key={idx}
                                                    text={item.text} 
                                                    done={item.done}
                                                    markItemDone={() => this.markItemDone(item.id)} 
                                                    handleDelete={this.handleDelete}
                                                />
                                            ))}
                                        </FlipMove>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Todo list */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default Todos;