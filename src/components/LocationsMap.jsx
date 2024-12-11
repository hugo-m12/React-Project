import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PropTypes } from "prop-types";
import LoadingAnim from "./loadingAnim";
import "leaflet/dist/leaflet.css";

function LocationsMap({ locations }) {
  LocationsMap.propTypes = {
    locations: PropTypes.object,
  };
  return (
    <div>
      {locations.coordinates && locations.coordinates.length > 0 ? (
        <MapContainer
          center={locations.coordinates}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <>
            <Marker position={locations.coordinates}>
              <Popup>{locations.city}</Popup>
            </Marker>
          </>
        </MapContainer>
      ) : (
        <div className="flex content-center p-20">
          <LoadingAnim />
        </div>
      )}
    </div>
  );
}

export default LocationsMap;
