import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useParams } from "wouter";
import { useEffect, useState } from "react";
import LocationsMap from "../components/LocationsMap";
import locationsService from "../services/locationsService";
import LoadingAnim from "../components/loadingAnim";

function LocationDetailView() {
  const params = useParams();
  const [city, setCity] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      const data = await locationsService.loadLocationsData();
      const foundCity = data.find(
        (p) => p.city.toLowerCase() === params.locationName.toLowerCase()
      );
      if (foundCity === undefined) {
        // return <Redirect to="/" />;
        window.location = "/404";
      }
      setCity(foundCity);
    };

    fetchCityData();
  }, [params.locationName]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const result = await locationsService.getCurrentLocationWeather(
        params.locationName
      );
      setCityWeather(result);
    };
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const fetchForecastData = async () => {
      const result = await locationsService.getLocation5daysForecast(
        params.locationName
      );
      setForecastWeather(result);
    };
    fetchForecastData();
  }, []);
  return (
    <>
      <section>
        <div className="Details-titles">
        <h1>{city.country}</h1>
        <h1>{city.city}</h1>
        <p>{city.arrivalDate}</p>
        </div>
        <div className="Img-Slider">
          <Swiper //ty to do this component in the components folder
            modules={[EffectFade]}
            effect="fade"
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {city.LocationImages && city.LocationImages.length > 0 ? (
              city.LocationImages.map((image) => (
                <SwiperSlide key={image.filename}>
                  <img
                    className="slider-image"
                    src={image.path}
                    alt={`Image of ${city.city}`}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="LoadingAnim-container">
                  <LoadingAnim />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
      <article>
        <div className="Location-description">
          <p>{city.description}</p>
        </div>
      </article>
      <section>
        <div className="map-container">
          <LocationsMap locations={city} className="map-container" />
        </div>
      </section>
      <section>
        <div className="Location-Weather">
          {cityWeather?.weather && cityWeather.weather.length > 0 ? (
            <div className="weather-card">
              <h1> Current weather </h1>
              <h2> {city.city} </h2>
              {cityWeather.weather.map((data) => (
                <div key={data.id}>
                  <h3> {data.main}</h3>
                  <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt="w-icon"
                  />
                  <p className="capitalize-text"> {data.description}</p>
                </div>
              ))}
              <p> Current Temperature : {cityWeather.main.temp} °C </p>
              <p> Min Temperature : {cityWeather.main.temp_min} °C </p>
              <p> Max Temperature : {cityWeather.main.temp_max} °C </p>
            </div>
          ) : cityWeather?.weather ? (
            <p>No weather data available.</p>
          ) : (
            <div className="LoadingAnim-container">
                  <LoadingAnim />
            </div>
          )}
        </div>
      </section>
      <div className="weather-section">
        <h1 className="detail-text"> 5 day Forecast </h1>
        {forecastWeather?.list && forecastWeather.list.length > 0 ? (
          <div className="card-container">
            {forecastWeather.list.map((data) => (
              <div className="weather-cards" key={data.dt}>
                {data.weather.map((details) => (
                  <div key={details.id}>
                    <h3> {details.main}</h3>
                    <img
                      src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                      alt="weather-icon"
                    />
                    <p className="capitalize-text"> {details.description}</p>
                  </div>
                ))}
                <p> Temperature: {data.main.temp} °C</p>
              </div>
            ))}
          </div>
        ) : forecastWeather?.weather ? (
          <p>No weather data available.</p>
        ) : (
          <div className="LoadingAnim-container">
                  <LoadingAnim />
          </div>
        )}
      </div>
    </>
  );
}

export default LocationDetailView;
