import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("Respponse", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };
 
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather app</h1>
        <div className="d-grid gap-3  col-3 mt-4">
          <input
            type="text"
            className="form-controol"
            onChange={handleChangeInput}
            value={inputCity}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          />
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">
            {(data?.main?.temp - 273.5).toFixed(2)}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
