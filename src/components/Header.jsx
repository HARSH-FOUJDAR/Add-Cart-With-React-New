import { FaCartPlus } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ createallproduct }) => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary d-flex justify-content-between px-5">
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3 font-poppins">
            <NavLink
              to="/"
              className=" font-bold  text-2xl list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled text-light p-0 text-2xl pointer font-bold">ABOUT</li>
            <li className="list-unstyled text-light p-0 pointer font-bold text-2xl ">CONTACT</li>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >

              <FaCartPlus style={{ fontSize: "2rem", color: "white", }} />
            </NavLink>

            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 roght relative"
              style={{ backgroundColor: "orange", right: '-45%' }}
            >1
              {createallproduct.length}

            </span>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Header;


