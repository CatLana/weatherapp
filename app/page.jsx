import SearchComponent from "./search";
import Header from "./header";

export default function HomePage() {
  return (
    <div className="home">
      <Header title="Weather App" subtitle="A simple weather app" />
      <div className="main__content">
        <SearchComponent placeholderText="Type in the city..." />
      </div>
    </div>
  );
}
