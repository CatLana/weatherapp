export default function Header({ title, subtitle }) {
  function generateTitle() {
    return (
      <div className="home__header">
        <h2 className="header__title">{title}</h2>
        <p className="header__subtext">{subtitle}</p>
      </div>
    );
  }

  return generateTitle();
}
