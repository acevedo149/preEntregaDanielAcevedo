import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail =({item}) =>{
    const{addItem}= useContext(CartContext)
    


    const onAdd = (quantity) => {
            addItem(item,quantity);
        }

    return(
        <div className="row my-5">
            <div className=" col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p>{item.description}</p>
                <p>${item.precio}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
            
        </div>
    )
}

export default ItemDetail;