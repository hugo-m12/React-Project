async function loadLocationsData() {
    try {
        const response = await fetch("src/data/locations.json");
        const result = await response.json();
    
        return(result);
    } catch (error) {
        console.error(error); 
        return [];
    }
  }

  async function getCurrentLocationWeather(city) { 
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=702f1736e87f6994a12d0929f92c0d76&units=metric`);
        const result = await response.json();
        return(result);
    } catch (error) {
        console.error(error); 
        return [];
    }
  }

  async function getLocation5daysForecast(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=5&APPID=702f1736e87f6994a12d0929f92c0d76&units=metric`);
        const result = await response.json();
        return(result);
    } catch (error) {
        console.error(error); 
        return [];
    }
  }

  export default {
    loadLocationsData,
    getCurrentLocationWeather,
    getLocation5daysForecast
}