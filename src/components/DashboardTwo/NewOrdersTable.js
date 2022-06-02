import React from 'react';
import { Link } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';
import * as Icon from 'react-feather';

class NewOrdersTable extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">New Orders</h5>
                        <span className="day">This Week</span>
                    </div>

                    <Table responsive hover className="m-0">
                        <thead className="border-none bg-none">
                            <tr>
                                <th>Id</th>
                                <th>Customer Name</th>
                                <th className="text-center">Order Date</th>
                                <th className="text-center">Delivery Date</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link to="">
                                        Aaron Rossi
                                    </Link>
                                </td>
                                <td className="text-center">15 Mar</td>
                                <td className="text-center">16 Mar</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Pending</span>
                                </td>
                                <td className="text-center">
                                    <Button variant="link text-success p-0 mr-2">
                                        <Icon.Edit2
                                            className="icon wh-15"
                                        />
                                    </Button>
                                    <Button variant="link text-danger p-0">
                                        <Icon.X
                                            className="icon wh-15"
                                        />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link to="">
                                        Brad Joe
                                    </Link>
                                </td>
                                <td className="text-center">18 Mar</td>
                                <td className="text-center">18 Mar</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Completed</span>
                                </td>
                                <td className="text-center">
                                    <Button variant="link text-success p-0 mr-2">
                                        <Icon.Edit2
                                            className="icon wh-15"
                                        />
                                    </Button>
                                    <Button variant="link text-danger p-0">
                                        <Icon.X
                                            className="icon wh-15"
                                        />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link to="">
                                        Mitch Petty
                                    </Link>
                                </td>
                                <td className="text-center">19 Mar</td>
                                <td className="text-center">20 Mar</td>
                                <td className="text-center">
                                    <span className="badge badge-warning">On Hold</span>
                                </td>
                                <td className="text-center">
                                    <Button variant="link text-success p-0 mr-2">
                                        <Icon.Edit2
                                            className="icon wh-15"
                                        />
                                    </Button>
                                    <Button variant="link text-danger p-0">
                                        <Icon.X
                                            className="icon wh-15"
                                        />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link to="">
                                        Philip
                                    </Link>
                                </td>
                                <td className="text-center">21 Mar</td>
                                <td className="text-center">25 Mar</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Delayed</span>
                                </td>
                                <td className="text-center">
                                    <Button variant="link text-success p-0 mr-2">
                                        <Icon.Edit2
                                            className="icon wh-15"
                                        />
                                    </Button>
                                    <Button variant="link text-danger p-0">
                                        <Icon.X
                                            className="icon wh-15"
                                        />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <Link to="">
                                        Nelms
                                    </Link>
                                </td>
                                <td className="text-center">24 Mar</td>
                                <td className="text-center">29 Mar</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Canceled</span>
                                </td>
                                <td className="text-center">
                                    <Button variant="link text-success p-0 mr-2">
                                        <Icon.Edit2
                                            className="icon wh-15"
                                        />
                                    </Button>
                                    <Button variant="link text-danger p-0">
                                        <Icon.X
                                            className="icon wh-15"
                                        />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default NewOrdersTable;