import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stock, onAdd}) =>{
    const[counter,setCounter] = useState(1);
    const[itemStock, setItemStock]= useState(stock);
    const[vendido, setVendido] = useState(false)

    const incrementaStock = () =>{
        if ( counter < itemStock )
        setCounter(counter + 1);
    }

    const decreStock =() =>{
        if (counter > 1){
            setCounter( counter - 1);
        }
       
    }

    const addToCart =(quantity) =>{
        setVendido(true);
        setCounter(1)
        setItemStock(itemStock-quantity);
        onAdd(quantity);
        /*if ((stock > 0) && (counter <= stock))
        console.log("agregaste:" + counter +" prductos al carrito!")
        setStock( stock - counter);
        setCounter( 1)*/
    }

    useEffect(()=>{
        setItemStock(stock)
    }, [stock])



    return (
        <div className="conatiner text-center" >
            <div className="row mb-3">
                <div className=" col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decreStock}>-</button>
                        <button type="button" className="btn btn-outline-primary"> {counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementaStock}>+</button>
                    </div>
                </div>            
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">terminar mi compra</Link> :<button className="btn btn-outline-primary" onClick={() =>{addToCart(counter)}}>agregar al carrito</button>}
                </div>

            </div>

        </div>
    )
};

export default ItemCount;