import { useContext } from "react";
import { useStore } from "../context/StoreContext";

export default function Cart() {
    const { cart,removeFromCart} = useStore();

    if (cart.length === 0) return <h2>Your cart is emty</h2>;

    return (
        <div className="page-content">
            <h1>My Cart</h1>
            {cart.map((g)=>(
                <div key={g.id} className="cart-item">
                    <img src={g.image} alt={g.title} />
                    
                <h3>{g.title}</h3>
                <p>{g.price}</p>
                <button onClick={()=>removeFromCart(g.id)}className="btn">Remove</button>
                </div>
            ))}
        </div>
    );
}