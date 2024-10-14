'use client';

import {useState} from 'react';
import Forecast from './forecast';


export default function SearchComponent({ placeholderText }) {
    // array destructuring
    // the first item in the array is the state value
    // The second item in the array is a function to update the value.
    // You can also take the opportunity to add the initial value of your likes state to 0.
  
    const [userInput, updateUserInput] = useState("Dublin");
    const [isWeatherResultShown, setIsWeatherResultShown] = useState();
    const handleOnInput = (event) => {
      updateUserInput(event.target.value);
    };
  
    const handleButtonClick = (event) => {
      setIsWeatherResultShown(true);
      updateUserInput(userInput);
    };
  
    return (
      <div className="form__input--city">
        <label htmlFor="search">City</label>
        <div>
          <input
            type="text"
            name="search"
            placeholder={placeholderText}
            onInput={handleOnInput}
          ></input>
          <button type="button" id="main__form__btn" onClick={handleButtonClick}>
            Search
          </button>
        </div>
        {isWeatherResultShown && <Forecast cityName={userInput} />}
      </div>
    );
  }