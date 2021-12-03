import * as React from 'react';
import { useState } from 'react';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import { BsGeoAltFill } from "react-icons/bs";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';


const Map: React.FC<MapProps> = (props) => {

    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWJwYXJrZXIiLCJhIjoiY2t3bWI0N2RvMmFhMTJ2cWlwcGd5Y3YxZyJ9._v1TWBh8SpFjt_kiSwX68w'; // Set your mapbox token here

    const geolocateStyle = {
        float: 'left',
        margin: '50px',
        padding: '10px'
    };

    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: 33.511690,
        longitude: -86.803695,
        zoom: 13
    });

    const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 500 });

    const [selectedMarker, setSelectedMarker] = useState(null);

    return (
        <div style={{ margin: '0 auto' }}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v8"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                {/* Blueprint on 3rd marker */}
                <Marker
                    latitude={33.516638}
                    longitude={-86.788852}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(1);
                    }}>
                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>

                {/* Pies & Pints marker */}
                <Marker
                    latitude={33.511690}
                    longitude={-86.803695}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(2);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 2 && (
                    <Popup
                        latitude={33.511690}
                        longitude={-86.803695}
                    >
                        <div>
                            <p className="text-dark">Pies and Pints</p>
                        </div>
                    </Popup>
                )}
                {/* Yo Mamas marker */}
                <Marker
                    latitude={33.517633}
                    longitude={-86.801768}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(3);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 3 && (
                    <Popup
                        latitude={33.517633}
                        longitude={-86.801768}
                    >
                        <div>
                            <p className="text-dark">Yo Mamas</p>
                        </div>
                    </Popup>
                )}
                {/* Bamboo on 2nd marker */}
                <Marker
                    latitude={33.516894}
                    longitude={-86.803320}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(4);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 4 && (
                    <Popup
                        latitude={33.516894}
                        longitude={-86.803320}
                    >
                        <div>
                            <p className="text-dark">Bamboo on 2nd</p>
                        </div>
                    </Popup>
                )}
                {/* Carrigans Public House marker */}
                <Marker
                    latitude={33.513097}
                    longitude={-86.788097}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(5);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 5 && (
                    <Popup
                        latitude={33.513097}
                        longitude={-86.788097}
                    >
                        <div>
                            <p className="text-dark">Carrigan's Public House</p>
                        </div>
                    </Popup>
                )}
                {/* The Hive marker */}
                <Marker
                    latitude={33.501780}
                    longitude={-86.797205}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(6);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 6 && (
                    <Popup
                        latitude={33.501780}
                        longitude={-86.797205}
                    >
                        <div>
                            <p className="text-dark">The Hive</p>
                        </div>
                    </Popup>
                )}
                {/* El Barrio marker */}
                <Marker
                    latitude={33.516739}
                    longitude={-86.803246}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(7);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 7 && (
                    <Popup
                        latitude={33.516739}
                        longitude={-86.803246}
                    >
                        <div>
                            <p className="text-dark">El Barrio</p>
                        </div>
                    </Popup>
                )}
                {/* Hattie Bs marker */}
                <Marker
                    latitude={33.511484}
                    longitude={-86.788577}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(8);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 8 && (
                    <Popup
                        latitude={33.511484}
                        longitude={-86.788577}
                    >
                        <div>
                            <p className="text-dark">Hattie B's</p>
                        </div>
                    </Popup>
                )}
                {/* Todd English P.U.B. marker */}
                <Marker
                    latitude={33.525448}
                    longitude={-86.808526}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(9);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 9 && (
                    <Popup
                        latitude={33.525448}
                        longitude={-86.808526}
                    >
                        <div>
                            <p className="text-dark">Todd English P.U.B.</p>
                        </div>
                    </Popup>
                )}
                {/* EastWest marker */}
                <Marker
                    latitude={33.517515}
                    longitude={-86.802017}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(10);
                    }}>

                        <BsGeoAltFill className="text-tea" />
                    </button>
                </Marker>
                {selectedMarker == 10 && (
                    <Popup
                        latitude={33.517515}
                        longitude={-86.802017}
                    >
                        <div>
                            <p className="text-dark">EastWest</p>
                        </div>
                    </Popup>
                )}
                {/* Bluprint on 3rd popup */}
                {selectedMarker == 1 && (
                    <Popup
                        latitude={33.516638}
                        longitude={-86.788852}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h1 className="col-12 text-light text-center basic-font">Blueprint on 3rd</h1>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="card-title m-2">title</p>
                                            <p className="card-text m-2">date</p>
                                        </div>
                                        <img className="card-img-top" src="https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/1/f1/1f124696-6fcf-57bb-be06-dcd013e9fb1d/5b5f7c66cfdaa.image.jpg?resize=1200%2C675" alt="pizza" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text">username</p>
                                            <p className="card-text">restaurant name</p>
                                        </div>
                                        <p className="card-text text-center">content</p>
                                        <p className="card-text text-center">tags</p>
                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-tea">
                                <p className="basic-font m-2">See More</p>
                            </button>
                        </div>
                    </Popup>
                )}
            </MapGL>
        </div>
    )
};

interface MapProps { }

export default Map;