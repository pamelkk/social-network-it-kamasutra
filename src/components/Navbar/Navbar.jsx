import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  let navbarElements = props.state.pages.map((page) => (
    <NavbarItem link={page.link} name={page.name} />
  ));

  return (
    <nav className={classes.nav}>
      <ul className={classes.navItems}>{navbarElements}</ul>
      <section className={classes.friendsOnline}>
        <h2>Friends Online</h2>
        <ul>
          <li>
            <NavLink to={"/friend/" + props.id}>
              <img
                src="https://i.pinimg.com/236x/ed/0e/6e/ed0e6e3750115d9b9009deb0650b0086--cat-s-kitty-cats.jpg?nii=t"
                width="40"
                height="40"
                alt="profile pic"
              ></img>
              <span>Бостон</span>
              <span id={classes.blink}></span>
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
