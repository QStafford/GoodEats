import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div style={{ margin: '0 auto' }} className="map-container">
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
                        <BsGeoAltFill className="text-fire" />
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

                        <BsGeoAltFill className="text-sun" />
                    </button>
                </Marker>

                {/* Yo Mamas marker */}
                <Marker
                    latitude={33.517633}
                    longitude={-86.801768}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(3);
                    }}>

                        <BsGeoAltFill className="text-fire" />
                    </button>
                </Marker>

                {/* Bamboo on 2nd marker */}
                <Marker
                    latitude={33.516894}
                    longitude={-86.803320}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(4);
                    }}>

                        <BsGeoAltFill className="text-grass" />
                    </button>
                </Marker>

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

                {/* The Hive marker */}
                <Marker
                    latitude={33.501780}
                    longitude={-86.797205}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(6);
                    }}>

                        <BsGeoAltFill className="text-sun" />
                    </button>
                </Marker>

                {/* El Barrio marker */}
                <Marker
                    latitude={33.516739}
                    longitude={-86.803246}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(7);
                    }}>

                        <BsGeoAltFill className="text-sunset" />
                    </button>
                </Marker>

                {/* Hattie Bs marker */}
                <Marker
                    latitude={33.511484}
                    longitude={-86.788577}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(8);
                    }}>

                        <BsGeoAltFill className="text-fire" />
                    </button>
                </Marker>

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

                {/* EastWest marker */}
                <Marker
                    latitude={33.517515}
                    longitude={-86.802017}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedMarker(10);
                    }}>

                        <BsGeoAltFill className="text-grass" />
                    </button>
                </Marker>

                {/* Bluprint on 3rd popup */}
                {selectedMarker == 1 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.516638}
                        longitude={-86.788852}
                        closeButton={true}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Blueprint on 3rd</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/-lXj9nLjHKuVRrJNvywFcw/o.jpg" alt="surf and swamp" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">SammieEatsBham</p>
                                            <p className="card-text basic-font smaller-font">Blueprint on 3rd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Had the Surf and Swamp at Blueprint on 3rd and totally felt like I was right in the Bayou!!!! Swim the swamp to get to this meal.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/qIS6isOuAqLyuMo-LrBhog/o.jpg" alt="pork, grits, greens" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">JEats</p>
                                            <p className="card-text basic-font small-font">Blueprint on 3rd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Pork, Grits, Greens…. Need I say more.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/ra81D4U9PK1oFOsv0oXwvA/o.jpg" alt="" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">TasteeTabs</p>
                                            <p className="card-text basic-font small-font">Blueprint on 3rd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            The way this Red Beans and Rice brought me back home to New Orleans is crazy. Made me think that my granny was in the back cooking lol.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/1' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Pies & Pints Popup */}
                {selectedMarker == 2 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.511690}
                        longitude={-86.803695}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Pies and Pints</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/txuWz6G9qvda7bTZyMhHug/o.jpg" alt="pizza" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">Pizzaholic</p>
                                            <p className="card-text basic-font small-font">Pies and Pints</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            A Pizza divided at Pies and Pints. We have Sriacha Shrimp pizza on one side and Steak and Mushroom on the other. Little Surf and Turf action.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/GYHVCHrsXr0-gljDW0JM3g/o.jpg" alt="wings" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">WingGoddess</p>
                                            <p className="card-text basic-font small-font">Pies and Pints</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Char Grilled wings that will make you sing!!!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/lyA-JpRdlh0xKw0MVNxB-A/o.jpg" alt="pies and pints" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">EatingToLive</p>
                                            <p className="card-text basic-font small-font">Pies and Pints</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Italian Salad and an ice cold Beer! Its called balance lol.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/2' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Yo Mamas Popup */}
                {selectedMarker == 3 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.517633}
                        longitude={-86.801768}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Yo Mamas</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/eqlAYtdJPvr4lEghfs1Cbw/o.jpg" alt="waffles" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">FactorJr</p>
                                            <p className="card-text basic-font small-font">Yo Mamas</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            There must be magic in this sauce for the chicken and Waffles!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/SBCHOBg9DUlyoJay1F1qsw/o.jpg" alt="wings" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">WhitJanay</p>
                                            <p className="card-text basic-font small-font">Yo Mamas</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Wings and fries that will have you crunching for more!!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/A7p_9yL0QFY66ULrXL4BHA/o.jpg" alt="shrimp and grits" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">StateFarmTim</p>
                                            <p className="card-text basic-font small-font">Yo Mamas</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Shrimp and grits always make me feel right at home.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/3' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Bamboo on 2nd popup */}
                {selectedMarker == 4 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.516894}
                        longitude={-86.803320}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Bamboo on 2nd</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/9bFARnffZZ1wyYm22ZOvmQ/o.jpg" alt="sushi" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">ChiCharlie</p>
                                            <p className="card-text basic-font small-font">Bamboo on 2nd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Godzilla! Godzilla! A monster of a roll!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/--8qqB_4vuODZ135CORMew/o.jpg" alt="Eggrolls" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">PaulaShore</p>
                                            <p className="card-text basic-font small-font">Bamboo on 2nd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Egg rolls were the star of the table….
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/rUZEQMTr4AXae2ubRXA9ig/o.jpg" alt="pork belly" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">EddieEdible</p>
                                            <p className="card-text basic-font small-font">Bamboo on 2nd</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            The only thing bad about this pork belly… I wanted more!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/4' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Carrigan's popup */}
                {selectedMarker == 5 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.513097}
                        longitude={-86.788097}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Carrigan's Public House</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/QsuH_5vP4luMg5AH0RaO0g/o.jpg" alt="wings" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">GMann</p>
                                            <p className="card-text basic-font smaller-font">Carrigan's Public House</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Chx wings get in my Belly!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/xgkCkVaZEJBTTF6sQ80NIg/o.jpg" alt="snacks" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">Joshanator</p>
                                            <p className="card-text basic-font smaller-font">Carrigan's Public House</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Schnitzel Fingers greatest beer snack!!!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/_-le2YDs0frWV7GrMVWmlA/o.jpg" alt="wings, sausage" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">BottomsUp</p>
                                            <p className="card-text basic-font smaller-font">Carrigan's Public House</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Wings, corndog, bratwurst… the holy trinity!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/5' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* The Hive popup */}
                {selectedMarker == 6 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.501780}
                        longitude={-86.797205}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">The Hive</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/FKG81HhJaX9LQH1fBJlyDQ/o.jpg" alt="nachos" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">ViViBamaGirl</p>
                                            <p className="card-text basic-font small-font">The Hive</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Chicken nachos in time for the game!!!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/S7EXr0BNpmU8-ElaNRoDOg/o.jpg" alt="cheese curds" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">EarlthePearl</p>
                                            <p className="card-text basic-font small-font">The Hive</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Cheese Curds with all the squeak!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/oh2VT3qmwcqGNe5FwEg64w/o.jpg" alt="brunch" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">BrunchingBet</p>
                                            <p className="card-text basic-font small-font">The Hive</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Did someone say brunch???
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/6' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* El Barrio popup */}
                {selectedMarker == 7 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.516739}
                        longitude={-86.803246}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">El Barrio</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/Zxln9GTOxxV-uXaf38cP0A/o.jpg" alt="tostada" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">TASTEET</p>
                                            <p className="card-text basic-font small-font">El Barrio</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Tostada taste so homemade.
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/zdsN882m6FrGVJd9xJENhw/o.jpg" alt="elote" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">WilsonandTom4ever</p>
                                            <p className="card-text basic-font small-font">El Barrio</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Elote's my love language
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/g0IcwU6aqKBGsPmPDnN-3g/o.jpg" alt="Mexican pizza" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">GoobleGuy</p>
                                            <p className="card-text basic-font small-font">El Barrio</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Mexican pizza but make it fancy!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/7' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Hattie B's popoup */}
                {selectedMarker == 8 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.511484}
                        longitude={-86.788577}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Hattie B's</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/Ej0sPisD1Q1O2rWK9avdkQ/o.jpg" alt="chicken" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">Kem123</p>
                                            <p className="card-text basic-font small-font">Hattie B's</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            You know why I’m here… Chicken lol
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/SKJBlQGH3yYSfpaAfq46Pw/o.jpg" alt="slaw" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">PotterPics</p>
                                            <p className="card-text basic-font small-font">Hattie B's</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            The secret is in the slaw
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/8CxcQAUrYa_hwGCFWbdA_w/o.jpg" alt="baked beans" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">WeasleyWay</p>
                                            <p className="card-text basic-font small-font">Hattie B's</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Well we came for the chicken but we stay for the bake beans!!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/8' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* Todd English P.U.B. popup */}
                {selectedMarker == 9 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.525448}
                        longitude={-86.808526}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">Todd English P.U.B.</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/4LofwA1YF-oyUHHOx1TtXw/o.jpg" alt="fish and chips" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">GoBestFriend</p>
                                            <p className="card-text basic-font smaller-font">Todd English P.U.B.</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Fish and Chips for the win !!!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/elBREU0nTGammDD7zxSyqw/o.jpg" alt="Todd English P.U.B." />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">WhataWonderfulDay</p>
                                            <p className="card-text basic-font smaller-font">Todd English P.U.B.</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Perfect Lunch combo
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/Q13f0u86N6Xb0lDOBWK_wg/o.jpg" alt="tuna burger" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font smaller-font">UptownEats</p>
                                            <p className="card-text basic-font smaller-font">Todd English P.U.B.</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Chopped Tuna Burger! This was so good!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/9' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
                {/* EastWest popup */}
                {selectedMarker == 10 && (
                    <Popup
                        className="mapboxgl-popup-content"
                        latitude={33.517515}
                        longitude={-86.802017}
                    >
                        <div className="container bg-fire d-flex flex-wrap justify-content-center">
                            <h2 className="text-light text-center basic-font m-2">EastWest</h2>
                            <div className="container bg-fire d-flex flex-wrap justify-content-center">
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/L1LpwetBZpwoligrbj3UHQ/o.jpg" alt="shrimp and grits" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">SewandEat3</p>
                                            <p className="card-text basic-font small-font">EastWest</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Shrimp and Grits with asian flare!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/vIxzntI1altfQBNMvAniQw/o.jpg" alt="bun pork belly" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">Ben10</p>
                                            <p className="card-text basic-font small-font">EastWest</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            Warm bun, crispy pork belly and cream sriracha sauce makes me a happy boy!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                                <div className="card small-crd m-1">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <p className="card-text m-2 basic-font small-font">11-29-2021</p>
                                        </div>
                                        <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/4fol0oZPXkmTdhApDUIqHQ/o.jpg" alt="lettuce wraps" />
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text basic-font small-font">BunnyBuster</p>
                                            <p className="card-text basic-font small-font">EastWest</p>
                                        </div>
                                        <p className="card-text text-center basic-font small-font">
                                            The only way I will eat lettuce is in these chicken lettuce wraps!
                                        </p>
                                        <p className="card-text text-center basic-font small-font">tags</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container d-flex justify-content-between m-2">
                                <Link to='/restaurants/10' className="btn btn-sm btn-tea">
                                    <p className="basic-font m-1">See More!</p>
                                </Link>
                                <Link to='/post' className="btn btn-sm btn-sun">
                                    <p className="basic-font m-1">Post Your Dish!</p>
                                </Link>
                            </div>
                        </div>
                    </Popup>
                )}
            </MapGL>
        </div>
    )
};

interface MapProps { }

export default Map;