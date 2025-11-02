import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Header = ({ createallproduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary d-flex justify-content-between px-5">
          {/* Navigation Links */}
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3 font-poppins">
            <NavLink
              to="/"
              className="font-bold text-2xl list-unstyled text-light text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled text-light text-2xl font-bold">ABOUT</li>
            <li className="list-unstyled text-light text-2xl font-bold">CONTACT</li>
          </ul>

          {/* Cart Icon */}
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink to="/cart" className="list-unstyled text-light">
              <FaCartPlus style={{ fontSize: "2rem", color: "white" }} />
            </NavLink>

            {/* Cart Count */}
            <span
              className="text-decoration-none rounded-pill text-dark position-absolute top-0"
              style={{
                backgroundColor: "orange",
                right: "-45%",
                padding: "2px 8px",
                fontWeight: "bold",
              }}
            >
              {createallproduct.length}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
