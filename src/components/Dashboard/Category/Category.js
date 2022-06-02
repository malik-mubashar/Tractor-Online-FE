import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    return <li><Link to={props.url}>{props.category}</Link></li>
};

export default Category;