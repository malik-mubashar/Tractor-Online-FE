import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Breadcrumb} from 'react-bootstrap';
import Navigation from '../components/Navigation/Navigation';
import CalendarContainer from '../components/CalendarContainer';
import Footer from './Footer/Footer';

class Calendar extends React.Component {
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
                            <h1>Calendar</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Calendar</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    <Row>
                        <Col lg={12}>
                            {/* File path: src/components/CalendarContainer.js */}
                            <CalendarContainer />
                        </Col>
                    </Row>

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer /> 
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default Calendar;