import { PropTypes } from "prop-types";
import './LocationCard.css';

function LocationCard({ locations }) {
  LocationCard.propTypes = {
    locations: PropTypes.object,
  };

  return (
    <>
      <div className="locationcard" key={locations.id}>
        <div className="card-details">
          <p className="text-title">{locations.city}</p>
          <p>{locations.country}</p>
          <img src={locations.thumbnail.path} />
          <p>{locations.arrivalDate}</p>
        </div>
        <button className="locationcard-button">More info</button>
      </div>
    </>
  );
}

export default LocationCard;
