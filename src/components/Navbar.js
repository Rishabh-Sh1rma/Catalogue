import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          {/* <img
            alt=" "
            className="logo"
            src="data:image/png;base64,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"
          /> */}
          Shree Ji Gems
        </h1>
        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
