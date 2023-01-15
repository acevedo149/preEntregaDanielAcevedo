import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidgts = () => {

  const {carTotal} = useContext(CartContext);

    return(
        <Link to ={"/Cart"} className="btn areapublicidad position-relative">
            <i className="bi bi-cart4"></i>
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{carTotal()}
    
  </span>
    </Link>

    )
}

export default CartWidgts;