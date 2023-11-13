import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {

  const total = useSelector((state) => state.cart.total)


  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{ backgroundColor: "rgb(170, 51, 106)" }}
      >
        <img
          className="rounded-circle img-thumbnail mx-5"
          width="100"
          height="55"
          src="../../images/Anikorb Collection .jpg"
          alt=""
          style={{ backgroundColor: "rgb(255,192,203)" }}
        />

        <div className="container">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
              <Link className="nav-link" to={"/aboutus"}>
                AboutUs
              </Link>
            </ul>

            <div className="">
              <form className="form w-50 m-auto  d-flex ">
                <input
                  type="search"
                  placeholder="Search on Anikorb"
                  // onClick={() => lu()}
                  className="form-control"
                  style={{ width: "50vw" }}
                />
                <BiSearchAlt2
                  size={30}
                  style={{
                    color: "rgb(255,192,203)",
                    marginLeft: "-25px",
                    position: "relative",
                    bottom: "-1px",
                  }}
                />
              </form>
            </div>

            <Link to={"/cart"} className="">
              <sup
                className="rounded-circle p-1 fw"
                style={{
                  color: "rgb(170, 51, 106)",
                  backgroundColor: "rgb(255,192,203)",
                  position: "relative",
                  left: "43px",
                  top: "-20px",
                }}
              >
                {total}
              </sup>

              <BsCart4
                size={40}
                style={{ color: "rgb(255,192,203)", marginRight: "10px" }}
              />
            </Link>

            
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm nav-lighter" style={{ backgroundColor: "rgb(255,192,203)" }} >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="nav2 navbar-nav container justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Category{" "}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Children
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
