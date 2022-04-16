import React from "react";
import {Map, TileLayer, GeoJSON, CircleMarker} from "react-leaflet";
import Navbar from "../navbar/Navbar"
import Filterbar from "../filter_bar/Filterbar"
import ControlPanel from "../control_panel/ControlPanel"
import "./Mailmap.css"
import L from "leaflet";
import fetchData from "../api/trackerAPI";
import moment from 'moment'

class Mailmap extends React.Component {
    state = {
        geoJSON: {
            type: "FeatureCollection",
            features: []
        },
        isLoading: false,
        markers: null,
        lines: null,
    };

    fetchCoordinates = async () => {
        const markers = await fetchData();
        const gjson = {type:  "FeatureCollection", features: markers};
        this.setState({geoJSON: gjson});
    };



    pointToLayer = function (feature, latlng) {
        const datetime = new Date(feature.properties.time["$date"]);
        const currTime = moment(datetime).fromNow();
        return L.circleMarker(latlng, geojsonMarkerOptions)
            .bindTooltip(currTime, {
                permanent: false,
                direction: 'top'
            }).bindPopup(currTime).openPopup()
    };

    onEachFeature = function (feature, layer) {

    };

    updateMarkers = async (trackingNumber) => {
        const leafletMap = this.leafletMap.leafletElement;
        if (this.state.markers) this.state.markers.remove();
        if (this.state.lines) this.state.lines.remove();
        await this.fetchCoordinates();
        console.log(this.state.geoJSON);
        const markers = L.geoJSON(this.state.geoJSON, {pointToLayer: this.pointToLayer, onEachFeature: this.onEachFeature}).addTo(leafletMap);
        const arrLength = this.state.geoJSON.features.length;
        // const lines = L.polyline(this.state.geoJSON.features[arrLength - 1].geometry.coordinates).addTo(leafletMap);
        this.setState({markers});
    };

    render() {
        return (
            <div>
                <Navbar/>
                <Filterbar updateMarkers = {this.updateMarkers}/>
                {this.state.isLoading && <p>Loading ... </p>}
                <div className={"map"}>
                    <Map
                        ref={m => { this.leafletMap = m; }}
                        center={[0, 0]}
                        zoom={3}
                    >
                        <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                    </Map>

                </div>
            </div>
        )
    }

}

const geojsonMarkerOptions = {
    color:"#9C6ADE",
    radius: 5,
    fillOpacity: 0.8,
    opacity: 0.8
};

export default Mailmap;
