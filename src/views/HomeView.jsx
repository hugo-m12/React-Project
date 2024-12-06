import { useState } from "react";
import { useEffect } from "react";
import locationsService from "../services/locationsService";
import { Link } from "wouter";
import LocationCard from "../components/LocationCard";
import LocationsGlobe from "../components/LocationsGlobe";
import LoadingAnim from "../components/loadingAnim";

function HomeView() {
  const [locations, setLocations] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await locationsService.loadLocationsData();
      setLocations(result);
    })();
  }, []);

  return (
    <>
      <article>
        <div className="Main-banner">
          <img src="src/assets/images/banner test.jpg" alt="main-banner" />
        </div>
      </article>
      <section>
        {locations && locations.length > 0 ? (
          <div className="card-container">
            <div className="cards">
              {locations.map((value) => (
                <Link
                  className="icon-social"
                  key={value.id}
                  href={`/${value.city}`}
                >
                  <LocationCard locations={value} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="LoadingAnim-container">
                  <LoadingAnim />
                </div>
        )}
      </section>
      <h2 className="detail-text">Visited Locations</h2>
      
    </>
  );
}

export default HomeView;

/*<section className="globe-section">
        <div>
          <LocationsGlobe />
        </div>
      </section>*/ //component broken