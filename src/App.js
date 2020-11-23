import React from 'react'
import './App.css';
import Cart from './Cart'

const items = [
  {id: "1", name: "Amour", price: "02.35", qty: "3"},
  {id: "2", name: "Ship", price: "20.35", qty: "2"},
  {id: "3", name: "Ancor", price: "06.35", qty: "1"},
  {id: "4", name: "Boat", price: "50.35", qty: "0"},
  {id: "5", name: "Ferry", price: "90.35", qty: "2"},

]

function App() {
  return (
    <div className="App">
    <Cart initialItems = {items}/>
    </div>
  );
}

export default App;
