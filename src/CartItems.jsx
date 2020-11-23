import React from 'react'
import './cart-Item.css';


function CartItems({id, name, price, qty, btnHandler}) {

    const sum = (price * qty).toFixed(2)
    const addItem =() => btnHandler(id, qty + 1)
    const removeItem =() => btnHandler(id, qty - 1)
    
    return (
        <div className = "CartItem">
            <div>{name}</div>
            <div>{price}</div>
            <div>
            <button onClick ={removeItem} disabled={qty <= 1}> - </button>
            {qty}
            <button onClick ={addItem}> + </button>
            </div>
            <h5>Sum: ${sum}</h5>
        </div>
    )
}

export default CartItems
