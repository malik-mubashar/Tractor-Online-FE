import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {VectorMap} from 'react-jvectormap';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer'
 
class CustomJVectorMap extends React.Component {
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
                            <h1>Vector Map</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Vector Map</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* World Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">World Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'world_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End World Map */}

                    {/* US Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">US Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'us_aea'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End US Map */}

                    {/* Europe Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Europe Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'europe_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Europe Map */}

                    {/* Continents Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Continents Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'continents_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Continents Map */}
 
                    <Row> 
                        {/* Oceania Map */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Oceania Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'oceania_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* End Oceania Map */}
                        
                        {/* Africa Map */}
                        <Col xl={6}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Africa Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'africa_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* End Africa Map */}
                    </Row>
 
                    {/* Asia Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Asia Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'asia_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Asia Map */}

                    {/* North America Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">North America Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'north_america_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* North America Asia Map */}

                    {/* South America Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">South America Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'south_america_mill'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* South America Asia Map */}

                    {/* Canada Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Canada Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'ca_lcc'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Canada Map */}

                    {/* Brazil Map */}
                    <Row> 
                        <Col lg={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Brazil Map</h5>
                                    </div>
                                    <div className="map-height-500">
                                        <VectorMap map={'brazil'}
                                            backgroundColor="#3b96ce"
                                            ref="map"
                                            containerStyle={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            containerClassName="map"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* Brazil Map */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default CustomJVectorMap;