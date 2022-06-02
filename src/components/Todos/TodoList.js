import React from 'react';
import {Button} from 'react-bootstrap';
import * as Icon from 'react-feather';

class TodoList extends React.Component {
    render() {
        return (
            <li className="tl-two">
                <label className="control control-checkbox"> 
                    <input 
                        type="checkbox" 
                        onClick={this.props.markItemDone}
                        defaultChecked={this.props.done ? true : false}
                    />
                    <div className="control-indicator"></div>
                </label>

                <span className={`task ${this.props.done ? 'completed' : ''}`}>
                    {this.props.text} 
                </span> 
            
                <Button 
                    variant="danger" 
                    className="close-btn"
                    onClick={this.props.handleDelete}>
                    <Icon.X 
                        className="icon wh-15 mt-minus-4" 
                    />
                </Button>
            </li>
        );
    }
}

export default TodoList;