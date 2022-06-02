import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'react-bootstrap';

class BestSellers extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>

                    <div className="height-500">
                        <Table className="m-0" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Sales</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.products.map((product, idx) => (
                                    <tr key={idx}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.sales}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

BestSellers.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string
}

BestSellers.defaultProps = {
    title: "Best Sellers",
    products: [
        {
            id: 1,
            name: "iPhone XR",
            sales: 500,
            stock: 150,
            category: "Phone"
        },
        {
            id: 2,
            name: "iPhone XR 7",
            sales: 550,
            stock: 123,
            category: "Phone"
        },
        {
            id: 3,
            name: "Headphones",
            sales: 899,
            stock: 130,
            category: "Electonics"
        },
        {
            id: 4,
            name: "Trinomic Shoe",
            sales: 1200,
            stock: 302,
            category: "Fasion"
        },
        {
            id: 5,
            name: "Books",
            sales: 839,
            stock: 200,
            category: "Books"
        },
        {
            id: 6,
            name: "Macbook pro",
            sales: 15000,
            stock: 590,
            category: "Electonics"
        },
        {
            id: 7,
            name: "The Watch",
            sales: 463,
            stock: 70,
            category: "Watch"
        },
        {
            id: 8,
            name: "Ant-Man",
            sales: 758,
            stock: 50,
            category: "Game"
        },
        {
            id: 9,
            name: "Clothing",
            sales: 978,
            stock: 29,
            category: "Boys' Fashion"
        },
        {
            id: 10,
            name: "Accessories",
            sales: 4335,
            stock: 234,
            category: "Girls' Fashion"
        }
    ]
};

export default BestSellers;