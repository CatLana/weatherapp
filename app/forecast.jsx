export default function Forecast({ cityName }) {
  function generateForecastForTheCity(city) {
    return city === "Rome" ? "Warm and Sunny" : "Cold and Rainy";
  }

  return (
    <p>
      Today in {cityName} it is {generateForecastForTheCity(cityName)}
    </p>
  );
}
