import React from 'react';
import PropTypes from "prop-types";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating/Rating';

class TopRatedProducts extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>

                    <ul className="top-rated-products height-408">
                        {this.props.products.map((product, idx) => (
                            <li key={idx} className="single-product">
                                <Link to="/">
                                    <Image src={product.image} alt={product.productName} />
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
                </div>
            </div>
        );
    }
}

TopRatedProducts.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string,
}

TopRatedProducts.defaultProps = {
    title: "Top Rated Products",
    products: [
        {
            id: 1,
            productName: "Apple iPhone XR",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product1.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 2,
            productName: "Apple iPhone XR Black",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product2.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 3,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product3.jpg'),
            rating: 5,
            url: "#"
        },
        {
            id: 4,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product4.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 5,
            productName: "Shoes",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product5.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 6,
            productName: "Apple iPhone XR",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product1.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 7,
            productName: "Apple iPhone XR Black",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product2.jpg'),
            rating: 4,
            url: "#"
        },
        {
            id: 8,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product3.jpg'),
            rating: 3,
            url: "#"
        },
        {
            id: 9,
            productName: "HeadPhone",
            description: "There are many variations of passages...",
            image: require('../../assets/img/product/product4.jpg'),
            rating: 3,
            url: "#"
        }
    ]
};

export default TopRatedProducts;