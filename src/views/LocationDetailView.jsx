import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import LocationsMap from "../components/LocationsMap";
import locationsService from "../services/locationsService";
import LoadingAnim from "../components/loadingAnim";

function LocationDetailView() {
  const params = useParams();
  const [city, setCity] = useState([]);
  const [cityWeather, setCityWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchCityData = async () => {
      const data = await locationsService.loadLocationsData();
      const foundCity = data.find(
        (p) => p.city.toLowerCase() === params.locationName.toLowerCase()
      );
      if (!foundCity) {
        setLocation("/404");
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
        <div className="text-2xl text-center font-bold">
        <h1>{city.country}</h1>
        <h1>{city.city}</h1>
        <p>{city.arrivalDate}</p>
        </div>
        <div className="p-5">
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
                    className="block w-full h-auto object-contain max-h-[600px] mx-auto"
                    src={image.path}
                    alt={`Image of ${city.city}`}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="flex content-center p-20">
                  <LoadingAnim />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
      <article>
        <div className="p-5 text-wrap">
          <p>{city.description}</p>
        </div>
      </article>
      <section>
        <div className="p-5">
          <LocationsMap locations={city} className="p-5" />
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          {cityWeather?.weather && cityWeather.weather.length > 0 ? (
            <div className="weather-card">
              <h1 className="text-3xl font-bold mb-3"> Current weather </h1>
              <h2 className="text-2xl font-bold mb-4"> {city.city} </h2>
              {cityWeather.weather.map((data) => (
                <div className="justify-center" key={data.id}>
                <h3>{data.main}</h3>
                <div className="flex justify-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                    alt="Weather icon"
                    className="w-auto h-auto max-w-xs"
                  />
                </div>
                <p className="capitalize">{data.description}</p>
              </div>
              ))}
              <p> Current Temperature : {cityWeather.main.temp} °C </p>
              <p> Min Temperature : {cityWeather.main.temp_min} °C </p>
              <p> Max Temperature : {cityWeather.main.temp_max} °C </p>
            </div>
          ) : cityWeather?.weather ? (
            <p>No weather data available.</p>
          ) : (
            <div className="flex content-center p-20">
                  <LoadingAnim />
            </div>
          )}
        </div>
      </section>
      <div className="p-7">
        <h1 className="text-5xl text-center font-black"> 5 day Forecast </h1>
        {forecastWeather?.list && forecastWeather.list.length > 0 ? (
          <div className="flex justify-center gap-6 m-12">
            {forecastWeather.list.map((data) => (
              <div className="text-center" key={data.dt}>
                {data.weather.map((details) => (
                  <div className="justify-center" key={details.id}>
                    <h3> {details.main}</h3>
                    <div className="flex justify-center">
                    <img
                      src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                      alt="weather-icon"
                      className="w-auto h-auto max-w-xs"
                      />
                  </div>
                    <p className="capitalize"> {details.description}</p>
                  </div>
                ))}
                <p> Temperature: {data.main.temp} °C</p>
              </div>
            ))}
          </div>
        ) : forecastWeather?.weather ? (
          <p>No weather data available.</p>
        ) : (
          <div className="flex content-center p-20">
                  <LoadingAnim />
          </div>
        )}
      </div>
    </>
  );
}

export default LocationDetailView;
