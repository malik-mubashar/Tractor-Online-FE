import React from 'react';
import {Row, Col, Breadcrumb, Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import * as Icon from 'react-feather';

class Tables extends React.Component {
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
                            <h1>Tables</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Tables</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Basic Table */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Basic Table</h5>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th className="text-center">Pages / Visit</th>
                                                <th className="text-center">New user</th>
                                                <th className="text-center">Last week</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>02.01.2019</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">1000</td>
                                                <td className="text-center">4500</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>02.02.2019</td>
                                                <td className="text-center">5400</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">4700</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>02.03.2019</td>
                                                <td className="text-center">5500</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">7600</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>02.04.2019</td>
                                                <td className="text-center">7400</td>
                                                <td className="text-center">4500</td>
                                                <td className="text-center">8700</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>02.05.2019</td>
                                                <td className="text-center">7600</td>
                                                <td className="text-center">2300</td>
                                                <td className="text-center">5400</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Basic Table */}

                    {/* Data Table */}
                    <Row> 
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Data Table</h5>
                                    </div>
                                    
                                    <Table responsive hover className="m-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Date</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Aaron Rossi</td>
                                                <td>aaron@GrammarList.com</td>
                                                <td>02.01.2019</td>
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
                                                <td>Brad Joe</td>
                                                <td>brad.joe@gmail.com</td>
                                                <td>02.02.2019</td>
                                                <td className="text-center">
                                                    <span className="badge badge-success">Active</span>
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
                                                <td>Mitch Petty</td>
                                                <td>mitch.petty@gmail.com</td>
                                                <td>02.03.2019</td>
                                                <td className="text-center">
                                                    <span className="badge badge-warning">Not Active</span>
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
                                                <td>Philip</td>
                                                <td>philip@gmail.com</td>
                                                <td>02.04.2019</td>
                                                <td className="text-center">
                                                    <span className="badge badge-success">Active</span>
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
                                                <td>Nelms</td>
                                                <td>nelms@gmail.com</td>
                                                <td>02.05.2019</td>
                                                <td className="text-center">
                                                    <span className="badge badge-success">Active</span>
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
                        </Col>
                    </Row>
                    {/* End Data Table */}
 
                    {/* Dark Table */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Dark Table</h5>
                                    </div>
                                    
                                    <Table responsive hover variant="dark" className="m-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th className="text-center">Pages / Visit</th>
                                                <th className="text-center">New user</th>
                                                <th className="text-center">Last week</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>02.01.2019</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">1000</td>
                                                <td className="text-center">4500</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>02.02.2019</td>
                                                <td className="text-center">5400</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">4700</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>02.03.2019</td>
                                                <td className="text-center">5500</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">7600</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>02.04.2019</td>
                                                <td className="text-center">7400</td>
                                                <td className="text-center">4500</td>
                                                <td className="text-center">8700</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>02.05.2019</td>
                                                <td className="text-center">7600</td>
                                                <td className="text-center">2300</td>
                                                <td className="text-center">5400</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Dark Table */}
 
                    {/* Striped Rows Table */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Striped Rows Table</h5>
                                    </div>
                                    
                                    <Table responsive hover striped className="m-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th className="text-center">Pages / Visit</th>
                                                <th className="text-center">New user</th>
                                                <th className="text-center">Last week</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>02.01.2019</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">1000</td>
                                                <td className="text-center">4500</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>02.02.2019</td>
                                                <td className="text-center">5400</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">4700</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>02.03.2019</td>
                                                <td className="text-center">5500</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">7600</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>02.04.2019</td>
                                                <td className="text-center">7400</td>
                                                <td className="text-center">4500</td>
                                                <td className="text-center">8700</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>02.05.2019</td>
                                                <td className="text-center">7600</td>
                                                <td className="text-center">2300</td>
                                                <td className="text-center">5400</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Striped Rows Table */}

                    {/* Bordered Table */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Bordered Table</h5>
                                    </div>
                                    
                                    <Table responsive hover bordered className="m-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th className="text-center">Pages / Visit</th>
                                                <th className="text-center">New user</th>
                                                <th className="text-center">Last week</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>02.01.2019</td>
                                                <td className="text-center">5000</td>
                                                <td className="text-center">1000</td>
                                                <td className="text-center">4500</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>02.02.2019</td>
                                                <td className="text-center">5400</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">4700</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>02.03.2019</td>
                                                <td className="text-center">5500</td>
                                                <td className="text-center">1400</td>
                                                <td className="text-center">7600</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>02.04.2019</td>
                                                <td className="text-center">7400</td>
                                                <td className="text-center">4500</td>
                                                <td className="text-center">8700</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>02.05.2019</td>
                                                <td className="text-center">7600</td>
                                                <td className="text-center">2300</td>
                                                <td className="text-center">5400</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Bordered Table */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Tables;