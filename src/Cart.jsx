import React, {useState} from 'react'
import CartItems from './CartItems'
import './Cart.css'

function Cart({initialItems}) {

    const [btnItems, setBtnItems] = useState(initialItems)

    const Grandtotal = btnItems.reduce((total, item) => (
        total + item.qty * item.price
    ),0).toFixed(2)

    const btnHandler = (id, action) => {
        const newItems = btnItems.map(btnItem =>{
            if(btnItem.id === id){
                return {...btnItem, qty: action}
            } else return btnItem
        })
        setBtnItems(newItems)
    }
    return (
        <div className="Cart">
            <h1 className="shopping">Shopping Cart</h1>
            <hr/>
            {btnItems.map(item => 
                <CartItems key ={item.id} {...item} btnHandler ={btnHandler}/>
            )}
            <h3>Total: ${Grandtotal}</h3>
        </div>
    )
}

export default Cart
