// this component is unused yet.
// it was created to test using iteration mechanism with map()

export default function Categories() {
  const categories = ["Wind Speed", "Temperature", "Humidity", "Pressure"];

  return (
    <ul className="categories-list">
      {categories.map((name) => (
        <a href="#" key={name}>
          <li className="categories-list__item">{name}</li>
        </a>
      ))}
    </ul>
  );
}
