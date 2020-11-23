import React from 'react'

function CartItems({name, price, qty, btnHandler, id}) {

    const sum = (price * qty).toFixed(2)
    const addItem =() => btnHandler(id, qty  + 1)
    const removeItem =() => btnHandler(id, qty - 1)
    
    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <div>
            <button onClick ={removeItem} disabled={qty <= 1}>-</button>
            {qty}
            <button onClick={addItem}>+</button>
            </div>
            <h5>Sum: ${sum}</h5>
        </div>
    )
}

export default CartItems
