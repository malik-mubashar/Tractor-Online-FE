import React from 'react';
import { Table } from 'react-bootstrap';

class OpenInvoicesTable extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Open Invoices</h5>
                    </div>
                    <Table responsive hover striped className="m-0 ">
                        <thead>
                            <tr>
                                <th>Invoice Id</th>
                                <th>Customer</th>
                                <th>Ship</th>
                                <th>Price</th>
                                <th>Stats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>80020</td>
                                <td>Amber Gibs</td>
                                <td>Australia</td>
                                <td>
                                    <strong>$8,070</strong>
                                </td>
                                <td> 
                                    <span className="badge badge-success">Progress</span>
                                </td>
                            </tr>
                            <tr>
                                <td>80021</td>
                                <td>Carl Roland</td>
                                <td>Bangladesh</td>
                                <td>
                                    <strong>$9,070</strong>
                                </td>
                                <td>
                                    <span className="badge badge-danger">On hold</span>
                                </td>
                            </tr>
                            <tr>
                                <td>80022</td>
                                <td>Amber Gibs</td>
                                <td>Brazil</td>
                                <td>
                                    <strong>$10,070</strong>
                                </td>
                                <td>
                                    <span className="badge badge-warning">Open</span>
                                </td>
                            </tr>
                            <tr>
                                <td>80023</td>
                                <td>Paul Wilson</td>
                                <td>Canada</td>
                                <td>
                                    <strong>$11,070</strong>
                                </td>
                                <td>
                                    <span className="badge badge-success">Progress</span>
                                </td>
                            </tr>
                            <tr>
                                <td>80024</td>
                                <td>Lauren Cox</td>
                                <td>China</td>
                                <td>
                                    <strong>$12,070</strong>
                                </td>
                                <td>
                                    <span className="badge badge-success">Progress</span>
                                </td>
                            </tr>
                            <tr>
                                <td>80025</td>
                                <td>Jessie Barnett</td>
                                <td>Germany</td>
                                <td>
                                    <strong>$15,070</strong>
                                </td>
                                <td>
                                    <span className="badge badge-success">Progress</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default OpenInvoicesTable;