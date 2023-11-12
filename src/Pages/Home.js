import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Productcard from "../Common/Productcard";
import axios from "axios";


function Home() {
  
  // create by API
  const [products, setProducts] = useState([])
  
  useEffect(() =>{

    axios.get("https://fakestoreapi.com/products?limit=18")
    .then((res) => setProducts(res.data));

  }, [])
  // when we need to write multiples lines of codes
  // function calculate() {
    // let a = 15;
    // let b = 2455;
    // let c = a + b;
    // alert(c)
    // --------------
    // if(c == 9){
    //   alert("The Answer is Corrrect")
    // }else {
    //   alert("The Answer is Wrong, Enter Another Number")
    // }
  //   c == 2470
  //     ? alert("The Answer is Corrrect")
  //     : alert("The Answer is Wrong, Enter Another Number");
  // }

  // function lu() {
  //   for (let i = 0; i < 2; i++) {
  //     alert("Hello world");
  //   }
  // }


  // create manually
  // const products = [
  //   {id: 1, title: "Black Shoe", price: 12000, img: "./../../images/1587126117875.jpg "},
  //   {id: 2, title: "Grey Shoe", price: 10000, img: "./../../images/1587126117993.jpg"},
  //   {id: 3, title: "Formular Clock", price: 11000, img: "./../../images/1590680135196.jpg"},
  // ]

  return (
    <div>
      <div className="products container p-5">
        <h4 className="h1">Hot Offer</h4>
        <div className="row mt-5 g-4 ">
          {/* <div className="col-md-4">
            <Productcard />
          </div>

          <div className="col-md-4">
            <Productcard />
          </div>

          <div className="col-md-4">
            <Productcard />
          </div>

        </div> */}

        {products.map((item) =>(
          <div key={item.id} className="col-md-4 col-sm-12">
          <Productcard data={item}/>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}


export default Home;
