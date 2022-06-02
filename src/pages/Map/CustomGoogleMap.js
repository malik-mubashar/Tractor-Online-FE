import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import GoogleMapReact from 'google-map-react';
import Footer from '../Footer/Footer'

const AnyReactComponent = () => (
    <div style={{
        background: '#2962ff',
        padding: '8px 8px',
        display: 'inline-flex',
        borderRadius: '50%',
    }}>
    </div>
);


class CustomGoogleMap extends React.Component {
    state = {
        sideMenu: true
    };

    // Toggle side bar menu
    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    //
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

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
                            <h1>Google Map</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Google Map</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* GoogleMap area */}
                    <Row> 
                        <Col lg={12}>
                            {/* Important! Always set the container height explicitly */}
                            <div style={{ height: '100vh', width: '100%' }}>
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text={'Kreyser Avrora'}
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                    {/* End GoogleMap area */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}
                </div>
            </div>
        );
    }
}

export default CustomGoogleMap;