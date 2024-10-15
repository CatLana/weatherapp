"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Forecast from './forecast';
import Header from "./header";

export default function HomePage() {
  const [userInput, updateUserInput] = useState("Dublin");
  const [isWeatherResultShown, setIsWeatherResultShown] = useState();
  const handleOnInput = (event) => {
    updateUserInput(event.target.value);
  };

  const handleButtonClick = async (event) => {
    await postData();
    setIsWeatherResultShown(true);
    updateUserInput(userInput);
  };
  const [data, setData] = useState("test");
  const apiUrl = "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=fa703d109f0bf254d82d15323f20";
  const sessionToken = "";
  const headersProps = {
    "Content-type": "application/json",
    "Authorization": `Bearer ${sessionToken}`
  };
  const placeholderText = 'Type in the city...';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(apiUrl, headersProps);
        setData(response.data);
      } catch (error) {
        console.log("Error occured in your request:", error);
      }
    };
    getData();
  }, [userInput]);

  const postData = async () => {
    let body = {
      city: userInput,
    };
    try {
      const response = await axios.post(apiUrl, body, headersProps);
      console.log(response);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="home">
      <Header title="Weather App" subtitle="A simple weather app" />
      <div className="main__content">
        <div className="form__input--city">
          <label htmlFor="search">City</label>
          <div>
            <input
              type="text"
              name="search"
              placeholder={placeholderText}
              onInput={handleOnInput}
            ></input>
            <button
              type="button"
              id="main__form__btn"
              onClick={handleButtonClick}
            >
              Search
            </button>
          </div>
          {isWeatherResultShown && <Forecast cityName={userInput} />}
        </div>
        <p>{data.city}</p>
      </div>
    </div>
  );
}
