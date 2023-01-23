import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav-bar">
      <Link to="/" id="link">
        Home
      </Link>
      <Link to="/projects" id="link">
        Projects
      </Link>
      <Link to="/tech" id="link">
        Tech Stack
      </Link>
      <Link to="/contact" id="link">
        Contact
      </Link>
    </section>
  );
};

export default Nav;
