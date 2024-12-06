import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function AddLocationView() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [description, setdescription] = useState("");
  const [thumbnail, setthumbnail] = useState("");

  function addLocationHandler() {
    const newLocation = {
      country,
      city,
      arrivalDate,
      departureDate,
      description,
      thumbnail,
    };
    console.log(newLocation);
    console.table(newLocation);
  }

  return (
    <>
      <h1 className="addlocaltitle"> Suggest me a new location to Visit! </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="NewLocationForm">
          <input required={true}
            defaultValue={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          ></input>
          <input required={true}
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          ></input>
          <div className="form-dates-grid">
            <p>Arrival Date</p>
            <p>Departure Date</p>
            <input
              required={true}
              defaultValue={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              type="date"
            ></input>
            <input
              required={true}
              defaultValue={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              type="date"
            ></input>
          </div>
          <textarea
            defaultValue={description}
            onChange={(e) => setdescription(e.target.value)}
            rows={5}
            placeholder="Location description"
          ></textarea>

          <label className="custom-file-upload" htmlFor="file">
            <div className="icon">
              <FontAwesomeIcon className="fa-l" icon={faFileImage} />
            </div>
            <div className="text">
              <span>Click to upload image</span>
            </div>
            <input
              defaultValue={thumbnail}
              onChange={(e) => setthumbnail(e.target.value)}
              type="file"
              id="file"
            />
          </label>

          <button onClick={addLocationHandler} className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">Save</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddLocationView;

/*<input type="file" placeholder="Select Your thumbnail image"></input>   */
