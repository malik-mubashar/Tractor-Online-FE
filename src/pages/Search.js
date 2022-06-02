import React from 'react';
import PropTypes from "prop-types";
import {Row, Col, Breadcrumb, Image, Pagination} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Footer from './Footer/Footer';
import Rating from '../components/Dashboard/Rating/Rating';

class Search extends React.Component {
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
                            <h1>Search</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Search</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Search Result */}
                    <Row>
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body p-30">
                                    <div className="card-header">
                                        <h5 className="card-title">{this.props.title}:
                                            <span className="fs-14 theme-color pl-1 fw-400">
                                                Apple iPhone XR
                                            </span>
                                        </h5>
                                    </div>

                                    <ul className="top-rated-products search-result">
                                        {this.props.products.map((product, idx) => (
                                            <li key={idx} className="single-product">
                                                <Link to={product.url}>
                                                    <Image src={product.image} alt="Product Image" />
                                                </Link>

                                                <Link to={product.url} className="product-title">
                                                    {product.productName}
                                                </Link>
                                                <p>{product.description}</p>

                                                <div className="rating">
                                                    <Rating ratings={product.rating} />
                                                </div>

                                                <Link to={product.url} className="view-link">
                                                    <span className="lni lni-arrow-right"></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-center">
                                        <Pagination className="d-inline-flex border-radius-fl-item mt-4 mb-0">
                                            <Pagination.First />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item active>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Last />
                                        </Pagination>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Search Result */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}  
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string,
}

Search.defaultProps = {
    title: "Search",
    products: [
        {
            id: 1,
            productName: "Apple iPhone XR (64GB)",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product1.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 2,
            productName: "Apple iPhone XR Black",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product2.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 3,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product3.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 4,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product4.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 5,
            productName: "Shoes",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product5.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 6,
            productName: "Apple iPhone XR",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product1.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 7,
            productName: "Apple iPhone XR Black",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product2.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 8,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product3.jpg'),
            rating: 3,
            url: "#"
        },
        {
            id: 9,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../assets/img/product/product4.jpg'),
            rating: 3,
            url: "#"
        }
    ]
};

export default Search;