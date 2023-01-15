import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "./context/CartContext";
    

const Cart = () => {
    const {Cart, removeItem}= useContext(CartContext)
    return (
        <div className="conatiner py-5">
            <div className="row">
                <div className="col-md-12">

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">&nbsp</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Cart.map(item => (
                            <tr key={item.id}>

                                <td><img src={item.imagen} alt={item.nombre} width={32}/></td>
                                <td>{item.nombre}</td>
                                <td>{item.quantity}</td>
                                <td>${item.quantity * item.precio}</td>
                                <td><Link onClick={()=>{removeItem(item.id)}}></Link>   </td>

                            </tr>

                        ))}

                    </tbody>
            
                </table>

                </div>

            </div>

        </div>

    )
    
}

export default Cart;