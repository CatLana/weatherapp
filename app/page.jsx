import SearchComponent from "./search";

// const categories = ["Wind Speed", "Temperature", "Humidity", "Pressure"];

let props = { title: "Weather App", description: "A simple weather app" };

export default function HomePage() {
  return (
    <div className="home">
      <Header title="Weather App" />
      <MainContainer />
    </div>
  );
}

function Header() {
  return generateTitle();
}

function MainContainer() {
  return (
    <div className="main__content">
      <SearchComponent placeholderText="Type in the city..." />
    </div>
  );
}


// function Categories() {
//   return (
//     <ul className="categories-list">
//       {categories.map((name) => (
//         <a href="#" key={name}>
//           <li className="categories-list__item">{name}</li>
//         </a>
//       ))}
//     </ul>
//   );
// }

function generateTitle() {
  return (
    <div className="home__header">
      <h2 className="header__title">{props.title}</h2>
      <p className="header__subtext">{props.description}</p>
    </div>
  );
}

