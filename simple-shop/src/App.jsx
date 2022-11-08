import { useState, useEffect } from "react"
import Basket from "./components/Basket"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {

  //cart
  const [cart, setCart] = useState([])

  function addToCart(data) {
    //do we have the product
    if (cart.find(entry => entry.id === data.id)) {
      setCart(oldCart => oldCart.map(entry => {
        if (entry.id !== data.id) {
          return entry
        }
        const copy = { ...entry };
        copy.amount = copy.amount + 1;
        return copy;
      }))
    } else {
      setCart(oldCart => oldCart.concat({...data, amount: 1}))
    }
  }

  function removeFromCart(id) {
    //find and modify a product
    setCart(oldCart => {
      const subtracted = oldCart.map(item => {
        if (item.id === id) {
          return {...item, amount:item.amount - 1}
        }
        return item;
      })

      const filtered = subtracted.filter(item => item.amount > 0);
      return filtered;

    })
  }

  //fetching product data
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await response.json();
      setProducts(data);
    }
    getData();
  }, [])

  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Basket products={products} removeFromCart={removeFromCart} cart={cart} />
    </div>
  )
}

export default App
