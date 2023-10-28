/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/images/logo.svg";

const items = [
  { id: 1, name: "Home" },
  { id: 2, name: "New" },
  { id: 3, name: "Popular" },
  { id: 4, name: "Trending" },
  { id: 5, name: "Categories" },
];

const Navbar = () => {
  return (
    <header className="container">
      <nav className="navigation" role="navigation">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>

        <div className="menuToggle">
          <input className="menu-btn" type="checkbox" id="menu-btn" />

          {[...Array(3)].map((e, i) => (
            <span key={i}></span>
          ))}

          <ul className="menuItem">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
