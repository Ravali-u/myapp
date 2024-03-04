import React from 'react'
import "./Cart.css"
export default function Cart() {
  let products= [
    { name: "HotCoffee", price: 2, image: "Coffee1.jpg", qty: 2, id: "1" },
    { name: "ColdCoffe", price: 4, image: "Coffee1.jpg", qty: 4, id: "2" },
    { name: "NormalCoffee", price: 5, image: "Coffee1.jpg", qty: 8, id: "3"},
    { name: "Coffee", price: 6, image: "Coffee1.jpg", qty: 5, id: "4" },
    { name: "Coffee", price: 7, image: "Coffee1.jpg", qty: 2, id: "5" },
    { name: "Coffee", price: 8, image: "Coffee1.jpg", qty: 6, id: "6" },
];
  return (
    
  <div className="Cart-container">
    
    {products.map((value,i) => 
    (<div>
      <img src={require ('./Coffee1.jpg')} width="200px"/> 
                <div key={i}>{value.name} </div>
                <div key={i}>Price:{value.price} </div>
                <div><button>Add</button></div> 
                </div>
    ))}
  </div>
  )
}
