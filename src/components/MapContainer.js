import React from 'react';
import GoogleMapReact from 'google-map-react';

const DefaultMarkar = () => (
    <div style={{
        background: '#2962ff',
        padding: '8px 8px',
        display: 'inline-flex',
        borderRadius: '50%',
    }}>
    </div>
);

class MapContainer extends React.Component {
    render(){
        return(
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Map</h5>
                    </div>
                    <div className="map-content">
                        <GoogleMapReact
                            bootstrapURLKeys={{ 
                                key: "AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog"
                            }}
                            defaultCenter={this.props.defaultCenter}
                            center={this.props.center}
                            zoom={this.props.zoom}
                        >

                        {this.props.positions.map((position, idx) => (
                            <DefaultMarkar
                                key={idx}
                                lat={position.lat}
                                lng={position.lng}
                            />
                        ))}

                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        );
    }
}

MapContainer.defaultProps = {
    defaultCenter: {lat: 43.653876, lng: -79.383666},
    center: {lat: 43.65, lng: -79.38},
    zoom: 15,
    positions: [
        {
            id: 1,
            lat: 43.654143,
            lng: -79.384841
        },
        {
            id: 2,
            lat: 43.654329,
            lng: -79.384305
        },
        {
            id: 3,
            lat: 43.654391,
            lng: -79.383619
        },
        {
            id: 4,
            lat: 43.654453,
            lng: -79.382417
        },
        {
            id: 5,
            lat: 43.653677,
            lng: -79.383447
        },
        {
            id: 6,
            lat: 43.653242,
            lng: -79.385592
        },
        {
            id: 7,
            lat: 43.653211,
            lng: -79.383533
        },
        {
            id: 8,
            lat: 43.653336,
            lng: -79.387329
        },
        {
            id: 9,
            lat: 43.654267,
            lng: -79.379779
        },
        {
            id: 10,
            lat: 43.655944,
            lng: -79.379522
        },
    ]
}

export default MapContainer;