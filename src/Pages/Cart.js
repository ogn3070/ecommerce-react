import React from "react";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  return (
    <div className="cart">
      <div className="table-responsive container mt-4">
        <table className="table border ">
          <thead>
            <tr style={{ borderBottom: "5px solid #000" }}>
              <th scope="col">Image</th>
              <th scope="col">Product Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td scope="row">
                <img src="./../images/1660742367392.jpg" />
              </td>
              <td>R1C2</td>
              <td>R1C3</td>
              <td>R1C3</td>
              <td>
                <RiDeleteBinLine size={30} />
              </td>
            </tr>
            <tr class="">
              <td scope="row">
                <img src="./../images/1660742618285.jpg" />
              </td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>
                <RiDeleteBinLine size={30} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container pt-3">
        <h3>
          Subtotal: <PiCurrencyDollarBold size={20} />
          <span className="text-danger">15200</span>
        </h3>
        <p>Taxes and shipping will calculate at checkout</p>
      </div>

      <div className="my-5 container">
        <button className="btn btn-danger p-2">Continue Shopping</button>
        <button className="btn btn-danger mx-5 p-2">Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
