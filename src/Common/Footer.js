import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-5 text-white" style={{backgroundColor:"rgb(170, 51, 106)"}}>
      <div className="container-fluid">
        <div className="row">
          {/* first column */}
          <div className="col-md-3">
            <p>Contact</p>
            <small>No 86 olowora Berger, <br/> off Ojodu Lagos state</small>
          </div>

          {/* second column */}
          <div className="col-md-3">
            <p>Menu</p>
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Shop</Link>
            <Link className="nav-link">Payment</Link>
          </div>

          {/* third column */}
          <div className="col-md-3">
            <p>Company</p>
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Terms & Conditions</Link>
            <Link className="nav-link">Payment</Link>
          </div>

          {/* forth column */}
          <div className="col-md-3">
            <p>Social Links</p>
            <Link className="nav-link"> <FaFacebook/> Facebook</Link>
            <Link className="nav-link">X</Link>
            <Link className="nav-link">Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
