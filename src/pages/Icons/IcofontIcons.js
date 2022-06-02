import React from 'react';
import {Row, Col, Breadcrumb} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Icofont from 'react-icofont';


class IcofontIcons extends React.Component {
    state = {
        sideMenu: true
    };

    // Toggle side bar menu
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
                            <h1>Icofont Icons</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Icofont Icons</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Feather Icons */}
                    <Row>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="addons" 
                                    className="icofont-2x"
                                />
                                <span>addons</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="address-book" 
                                    className="icofont-2x"
                                />
                                <span>address-book</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="adjust" 
                                    className="icofont-2x"
                                />
                                <span>adjust</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="alarm" 
                                    className="icofont-2x"
                                />
                                <span>alarm</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="anchor" 
                                    className="icofont-2x"
                                />
                                <span>anchor</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="archive" 
                                    className="icofont-2x"
                                />
                                <span>archive</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="at" 
                                    className="icofont-2x"
                                />
                                <span>at</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="attachment" 
                                    className="icofont-2x"
                                />
                                <span>attachment</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="audio" 
                                    className="icofont-2x"
                                />
                                <span>audio</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="automation" 
                                    className="icofont-2x"
                                />
                                <span>automation</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="badge" 
                                    className="icofont-2x"
                                />
                                <span>badge</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bag-alt" 
                                    className="icofont-2x"
                                />
                                <span>bag-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bag" 
                                    className="icofont-2x"
                                />
                                <span>bag</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="ban" 
                                    className="icofont-2x"
                                />
                                <span>ban</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bar-code" 
                                    className="icofont-2x"
                                />
                                <span>bar-code</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bars" 
                                    className="icofont-2x"
                                />
                                <span>bars</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="basket" 
                                    className="icofont-2x"
                                />
                                <span>basket</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bed" 
                                    className="icofont-2x"
                                />
                                <span>bed</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bell" 
                                    className="icofont-2x"
                                />
                                <span>bell</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="beverage" 
                                    className="icofont-2x"
                                />
                                <span>beverage</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bin" 
                                    className="icofont-2x"
                                />
                                <span>bin</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="binary" 
                                    className="icofont-2x"
                                />
                                <span>binary</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="binoculars" 
                                    className="icofont-2x"
                                />
                                <span>binoculars</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bluetooth" 
                                    className="icofont-2x"
                                />
                                <span>bluetooth</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bomb" 
                                    className="icofont-2x"
                                />
                                <span>bomb</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="book-mark" 
                                    className="icofont-2x"
                                />
                                <span>book-mark</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="box" 
                                    className="icofont-2x"
                                />
                                <span>box</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="briefcase" 
                                    className="icofont-2x"
                                />
                                <span>briefcase</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="broken" 
                                    className="icofont-2x"
                                />
                                <span>broken</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bucket" 
                                    className="icofont-2x"
                                />
                                <span>bucket</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bug" 
                                    className="icofont-2x"
                                />
                                <span>bug</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="building" 
                                    className="icofont-2x"
                                />
                                <span>building</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bulb-alt" 
                                    className="icofont-2x"
                                />
                                <span>bulb-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bullhorn" 
                                    className="icofont-2x"
                                />
                                <span>bullhorn</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bullseye" 
                                    className="icofont-2x"
                                />
                                <span>bullseye</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="calendar" 
                                    className="icofont-2x"
                                />
                                <span>calendar</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="camera" 
                                    className="icofont-2x"
                                />
                                <span>camera</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="card" 
                                    className="icofont-2x"
                                />
                                <span>card</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="cart-alt" 
                                    className="icofont-2x"
                                />
                                <span>cart-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="cart" 
                                    className="icofont-2x"
                                />
                                <span>cart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="chat" 
                                    className="icofont-2x"
                                />
                                <span>chat</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="check-alt" 
                                    className="icofont-2x"
                                />
                                <span>check-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="check-circled" 
                                    className="icofont-2x"
                                />
                                <span>check-circled</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="check" 
                                    className="icofont-2x"
                                />
                                <span>check</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="checked" 
                                    className="icofont-2x"
                                />
                                <span>checked</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="clock-time" 
                                    className="icofont-2x"
                                />
                                <span>clock-time</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="close-circled" 
                                    className="icofont-2x"
                                />
                                <span>close-circled</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="close-line-circled" 
                                    className="icofont-2x"
                                />
                                <span>close-line-circled</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="cloud-download" 
                                    className="icofont-2x"
                                />
                                <span>cloud-download</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="code" 
                                    className="icofont-2x"
                                />
                                <span>code</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="comment" 
                                    className="icofont-2x"
                                />
                                <span>comment</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="computer" 
                                    className="icofont-2x"
                                />
                                <span>computer</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="contacts" 
                                    className="icofont-2x"
                                />
                                <span>contacts</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="copyright" 
                                    className="icofont-2x"
                                />
                                <span>copyright</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="credit-card" 
                                    className="icofont-2x"
                                />
                                <span>credit-card</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="crop" 
                                    className="icofont-2x"
                                />
                                <span>crop</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="dashboard" 
                                    className="icofont-2x"
                                />
                                <span>dashboard</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="data" 
                                    className="icofont-2x"
                                />
                                <span>data</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="database-add" 
                                    className="icofont-2x"
                                />
                                <span>database-add</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="database-locked" 
                                    className="icofont-2x"
                                />
                                <span>database-locked</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="database-remove" 
                                    className="icofont-2x"
                                />
                                <span>database-remove</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="database" 
                                    className="icofont-2x"
                                />
                                <span>database</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="download" 
                                    className="icofont-2x"
                                />
                                <span>download</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="envelope-open" 
                                    className="icofont-2x"
                                />
                                <span>envelope-open</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="envelope" 
                                    className="icofont-2x"
                                />
                                <span>envelope</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="exclamation-tringle" 
                                    className="icofont-2x"
                                />
                                <span>exclamation-tringle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="exclamation" 
                                    className="icofont-2x"
                                />
                                <span>exclamation</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="exit" 
                                    className="icofont-2x"
                                />
                                <span>exit</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="eye-alt" 
                                    className="icofont-2x"
                                />
                                <span>eye-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="eye" 
                                    className="icofont-2x"
                                />
                                <span>eye</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="favourite" 
                                    className="icofont-2x"
                                />
                                <span>favourite</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="fax" 
                                    className="icofont-2x"
                                />
                                <span>fax</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="filter" 
                                    className="icofont-2x"
                                />
                                <span>filter</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="fire-alt" 
                                    className="icofont-2x"
                                />
                                <span>fire-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="flag" 
                                    className="icofont-2x"
                                />
                                <span>flag</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="flash" 
                                    className="icofont-2x"
                                />
                                <span>flash</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="folder" 
                                    className="icofont-2x"
                                />
                                <span>folder</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="gear" 
                                    className="icofont-2x"
                                />
                                <span>gear</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="gears" 
                                    className="icofont-2x"
                                />
                                <span>gears</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="grocery" 
                                    className="icofont-2x"
                                />
                                <span>grocery</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="hand" 
                                    className="icofont-2x"
                                />
                                <span>hand</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="heart-alt" 
                                    className="icofont-2x"
                                />
                                <span>heart-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="heart" 
                                    className="icofont-2x"
                                />
                                <span>heart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="home" 
                                    className="icofont-2x"
                                />
                                <span>home</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="inbox" 
                                    className="icofont-2x"
                                />
                                <span>inbox</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="info-circle" 
                                    className="icofont-2x"
                                />
                                <span>info-circle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="info" 
                                    className="icofont-2x"
                                />
                                <span>info</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="institution" 
                                    className="icofont-2x"
                                />
                                <span>institution</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="key" 
                                    className="icofont-2x"
                                />
                                <span>key</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="layers" 
                                    className="icofont-2x"
                                />
                                <span>layers</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="layout" 
                                    className="icofont-2x"
                                />
                                <span>layout</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="leaf" 
                                    className="icofont-2x"
                                />
                                <span>leaf</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="letter" 
                                    className="icofont-2x"
                                />
                                <span>letter</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="learn" 
                                    className="icofont-2x"
                                />
                                <span>learn</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="light-bulb" 
                                    className="icofont-2x"
                                />
                                <span>light-bulb</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="like" 
                                    className="icofont-2x"
                                />
                                <span>like</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="link" 
                                    className="icofont-2x"
                                />
                                <span>link</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="live-support" 
                                    className="icofont-2x"
                                />
                                <span>live-support</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="location-pin" 
                                    className="icofont-2x"
                                />
                                <span>location-pin</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="lock" 
                                    className="icofont-2x"
                                />
                                <span>lock</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="login" 
                                    className="icofont-2x"
                                />
                                <span>login</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="logout" 
                                    className="icofont-2x"
                                />
                                <span>logout</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="map-pins" 
                                    className="icofont-2x"
                                />
                                <span>map-pins</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="minus" 
                                    className="icofont-2x"
                                />
                                <span>minus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="mobile-phone" 
                                    className="icofont-2x"
                                />
                                <span>mobile-phone</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="moon" 
                                    className="icofont-2x"
                                />
                                <span>moon</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="not-allowed" 
                                    className="icofont-2x"
                                />
                                <span>not-allowed</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="notebook" 
                                    className="icofont-2x"
                                />
                                <span>notebook</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="notepad" 
                                    className="icofont-2x"
                                />
                                <span>notepad</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="notification" 
                                    className="icofont-2x"
                                />
                                <span>notification</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="options" 
                                    className="icofont-2x"
                                />
                                <span>options</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="pay" 
                                    className="icofont-2x"
                                />
                                <span>pay</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="phone" 
                                    className="icofont-2x"
                                />
                                <span>phone</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="bell" 
                                    className="icofont-2x"
                                />
                                <span>bell</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="plugin" 
                                    className="icofont-2x"
                                />
                                <span>plugin</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="plus" 
                                    className="icofont-2x"
                                />
                                <span>plus</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="power" 
                                    className="icofont-2x"
                                />
                                <span>power</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="print" 
                                    className="icofont-2x"
                                />
                                <span>print</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="question" 
                                    className="icofont-2x"
                                />
                                <span>question</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="quote-left" 
                                    className="icofont-2x"
                                />
                                <span>quote-left</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="quote-right" 
                                    className="icofont-2x"
                                />
                                <span>quote-right</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="random" 
                                    className="icofont-2x"
                                />
                                <span>random</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="recycle" 
                                    className="icofont-2x"
                                />
                                <span>recycle</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="repair" 
                                    className="icofont-2x"
                                />
                                <span>repair</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="reply-all" 
                                    className="icofont-2x"
                                />
                                <span>reply-all</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="reply" 
                                    className="icofont-2x"
                                />
                                <span>reply</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="responsive" 
                                    className="icofont-2x"
                                />
                                <span>responsive</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="send-mail" 
                                    className="icofont-2x"
                                />
                                <span>send-mail</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="server" 
                                    className="icofont-2x"
                                />
                                <span>server</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="settings-alt" 
                                    className="icofont-2x"
                                />
                                <span>settings-alt</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="settings" 
                                    className="icofont-2x"
                                />
                                <span>settings</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="share" 
                                    className="icofont-2x"
                                />
                                <span>share</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="shopping-cart" 
                                    className="icofont-2x"
                                />
                                <span>shopping-cart</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="sign-in" 
                                    className="icofont-2x"
                                />
                                <span>sign-in</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="sign-out" 
                                    className="icofont-2x"
                                />
                                <span>sign-out</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="signal" 
                                    className="icofont-2x"
                                />
                                <span>signal</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="site-map" 
                                    className="icofont-2x"
                                />
                                <span>site-map</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="smart-phone" 
                                    className="icofont-2x"
                                />
                                <span>smart-phone</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="soccer" 
                                    className="icofont-2x"
                                />
                                <span>soccer</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="space" 
                                    className="icofont-2x"
                                />
                                <span>space</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="spanner" 
                                    className="icofont-2x"
                                />
                                <span>spanner</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="speed-meter" 
                                    className="icofont-2x"
                                />
                                <span>speed-meter</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="spinner-alt-1" 
                                    className="icofont-2x"
                                />
                                <span>spinner-alt-1</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="spinner" 
                                    className="icofont-2x"
                                />
                                <span>spinner</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="star" 
                                    className="icofont-2x"
                                />
                                <span>star</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="street-view" 
                                    className="icofont-2x"
                                />
                                <span>street-view</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tag" 
                                    className="icofont-2x"
                                />
                                <span>tag</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tasks" 
                                    className="icofont-2x"
                                />
                                <span>tasks</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="thumbs-down" 
                                    className="icofont-2x"
                                />
                                <span>thumbs-down</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="thumbs-up" 
                                    className="icofont-2x"
                                />
                                <span>thumbs-up</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tick-mark" 
                                    className="icofont-2x"
                                />
                                <span>tick-mark</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tie" 
                                    className="icofont-2x"
                                />
                                <span>tie</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tools-alt-2" 
                                    className="icofont-2x"
                                />
                                <span>tools-alt-2</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="tools" 
                                    className="icofont-2x"
                                />
                                <span>tools</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="touch" 
                                    className="icofont-2x"
                                />
                                <span>touch</span>
                            </div>
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <div className="icon-preview hover-card mb-4">
                                <Icofont 
                                    icon="verification-check" 
                                    className="icofont-2x"
                                />
                                <span>verification-check</span>
                            </div>
                        </Col>
                    </Row>
                    {/* End Feather Icons */}

                    {/* Footer */}
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer */}
                </div>
            </div>
        );
    }
}

export default IcofontIcons;