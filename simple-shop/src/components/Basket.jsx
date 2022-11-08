import React from 'react'

function Basket(props) {
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
         <li>{item.productdisplayname} x {item.amount}, {item.amount * item.price},-</li> 
        ))}
        
      </ul>
      </section>
  )
}

export default Basket