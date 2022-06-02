import React from 'react';
import PropTypes from "prop-types";
import Category from './Category/Category';

class ProductCategories extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>

                    <div className="d-flex flex-row product-cat-content height-365">
                        <div className="w-50">
                            <ul className="product-categories">
                                {this.props.categories.map((category, idx) => (
                                    <Category 
                                        key={idx} 
                                        category={category.categoryName} 
                                        url={category.url} 
                                    />
                                ))}
                            </ul>
                        </div>

                        <div className="w-50">
                            <ul className="product-categories">
                                {this.props.categories.map((category, idx) => (
                                    <Category 
                                        key={idx} 
                                        category={category.categoryName} 
                                        url={category.url} 
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductCategories.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string
}

ProductCategories.defaultProps = { 
    title: "Product Categories",
    categories: [
        {
            id: 1,
            categoryName: "Arts & Crafts",
            url: "#"
        },
        {
            id: 2,
            categoryName: "Automotive",
            url: "#"
        },
        {
            id: 3,
            categoryName: "Baby",
            url: "#"
        },
        {
            id: 4,
            categoryName: "Beauty & Personal Care",
            url: "#"
        },
        {
            id: 5,
            categoryName: "Books",
            url: "#"
        },
        {
            id: 6,
            categoryName: "Computers",
            url: "#"
        },
        {
            id: 7,
            categoryName: "Digital Music",
            url: "#"
        },
        {
            id: 8,
            categoryName: "Electronics",
            url: "#"
        },
        {
            id: 9,
            categoryName: "Kindle Store",
            url: "#"
        },
        {
            id: 10,
            categoryName: "Prime Video",
            url: "#"
        },
        {
            id: 11,
            categoryName: "Women's Fashion",
            url: "#"
        },
        {
            id: 12,
            categoryName: "Men's Fashion",
            url: "#"
        },
        {
            id: 13,
            categoryName: "Girls' Fashion",
            url: "#"
        },
        {
            id: 14,
            categoryName: "Deals",
            url: "#"
        },
        {
            id: 15,
            categoryName: "Health & Household",
            url: "#"
        },
        {
            id: 16,
            categoryName: "Home & Kitchen",
            url: "#"
        },
        {
            id: 17,
            categoryName: "Industrial & Scientific",
            url: "#"
        },
        {
            id: 18,
            categoryName: "Boys' Fashion",
            url: "#"
        },
        {
            id: 19,
            categoryName: "Luggage",
            url: "#"
        },
        {
            id: 20,
            categoryName: "Movies & TV",
            url: "#"
        },
        {
            id: 21,
            categoryName: "Music, CDs & Vinyl",
            url: "#"
        },
        {
            id: 22,
            categoryName: "Pet Supplies",
            url: "#"
        },
        {
            id: 23,
            categoryName: "Software",
            url: "#"
        },
        {
            id: 24,
            categoryName: "Sports & Outdoors",
            url: "#"
        },
        {
            id: 25,
            categoryName: "Tools & Home Improvements",
            url: "#"
        },
        {
            id: 26,
            categoryName: "Toys & Games",
            url: "#"
        },
        {
            id: 27,
            categoryName: "Video Games",
            url: "#"
        },
        {
            id: 28,
            categoryName: "Agriculture & Food",
            url: "#"
        },
        {
            id: 29,
            categoryName: "Auto & Transportation",
            url: "#"
        },
        {
            id: 30,
            categoryName: "Bags, Shoes & Accessories",
            url: "#"
        },
        {
            id: 31,
            categoryName: "Electronics",
            url: "#"
        },
        {
            id: 32,
            categoryName: "Electrical Equipment",
            url: "#"
        },
        {
            id: 33,
            categoryName: "Gifts, Sports & Toys",
            url: "#"
        },
        {
            id: 34,
            categoryName: "Health & Beauty",
            url: "#"
        },
        {
            id: 35,
            categoryName: "Construction",
            url: "#"
        },
        {
            id: 36,
            categoryName: "Advertising & Office",
            url: "#"
        }

    ]
};

export default ProductCategories;