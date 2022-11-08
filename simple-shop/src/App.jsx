import { useState, useEffect } from "react"
import Basket from "./components/Basket"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {

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
      <ProductList products={products} />
      <Basket products={products} />
    </div>
  )
}

export default App
