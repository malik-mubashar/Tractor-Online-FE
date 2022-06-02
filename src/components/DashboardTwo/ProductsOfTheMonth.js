import React from 'react';
import { Link } from "react-router-dom";
import { Form, Table } from 'react-bootstrap';

class ProductsOfTheMonth extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Products of the Month</h5>
                        <Form className="select-month-form">
                            <Form.Control as="select">
                                <option>Select Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                            </Form.Control>
                        </Form>
                    </div>

                    <Table responsive hover className="m-0">
                        <thead className="border-none bg-none">
                            <tr>
                                <th>Id</th>
                                <th>Products</th>
                                <th>Customer Name</th>
                                <th className="text-center">Invoice</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link to="">
                                        Macbook Pro
                                    </Link>
                                </td>
                                <td>Aaron Rossi</td>
                                <td className="text-center">67</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Active</span>
                                </td>
                                <td className="text-center">
                                    $1,299
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>
                                    <Link to="">
                                        Iphone x
                                    </Link>
                                </td>
                                <td>Marco Gomez</td>
                                <td className="text-center">68</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Pending</span>
                                </td>
                                <td className="text-center">
                                    $850
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>
                                    <Link to="">
                                        Nike Shoes
                                    </Link>
                                </td>
                                <td>Brad Joe</td>
                                <td className="text-center">69</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Active</span>
                                </td>
                                <td className="text-center">
                                    $39.99
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>
                                    <Link to="">
                                        Headphone
                                    </Link>
                                </td>
                                <td>Joe Brad</td>
                                <td className="text-center">70</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Pending</span>
                                </td>
                                <td className="text-center">
                                    $500
                                </td>
                            </tr>
                            
                            <tr>
                                <td>5</td>
                                <td>
                                    <Link to="">
                                        Bicycle
                                    </Link>
                                </td>
                                <td>George Petty</td>
                                <td className="text-center">75</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Active</span>
                                </td>
                                <td className="text-center">
                                    $3,500
                                </td>
                            </tr>   
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ProductsOfTheMonth;