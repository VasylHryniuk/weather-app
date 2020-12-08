import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";

import "./App.scss";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setQuery("");
      setWeather(data);
    }
  };
  return (
    <div className={(typeof weather.current != 'undefined') ? ((weather.current.temp) > 16 ? 'app' : 'app cold') : 'app'}>
      <div className="app-inner">
        <div className="search">
          <input
            type="text"
            value={query}
            onKeyPress={search}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder="Search your city..."
          />
        </div>

        {weather.current && (
          <div className="location">
            <div className="location-city">
              <h2 className="location-city__name">
                {weather.location.name}
                </h2>
                <h3 className="location-city__country">{weather.location.country}</h3> 
            </div>
            <div className="location-weather">
              <span>{Math.round(weather.current.temp_c)}</span>
              <sup>&deg;C</sup>
            </div>
            <div className="location-info">
              <img
                className="city-icon"
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              />
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
