import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) =>{
    const[counter,setCounter] = useState(1);
    const[ stock, setStock]= useState(stockItems);

    const incrementaStock = () =>{
        if ( counter < stock )
        setCounter(counter + 1);
    }

    const decreStock =() =>{
        if (counter > 1){
            setCounter( counter - 1);
        }
       
    }

    const onAdd =() =>{
        if ((stock > 0) && (counter <= stock))
        console.log("agregaste:" + counter +" prductos al carrito!")
        setStock( stock - counter);
        setCounter( 1)
    }



    return (
        <><div className="conatiner text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick ={decreStock} >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick = { incrementaStock}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>agregar al carrito</button>

                </div>
            </div></>
    )
};

export default ItemCount;