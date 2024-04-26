import { useState } from "react";
import ProductPage from "./ProductPage";
import AddressInfo from "./AddressInfo";
import Summary from "./Summary";
import './index.css';

function App() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (productName) => {
    setProduct(productName);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <h1 style={{ "textAlign": "center" }}>Welcome to e-Kart</h1>
      <ProductPage
        product={product}
        setProduct={handleProductChange}
        quantity={quantity}
        setQuantity={handleQuantityChange}
      />
      <AddressInfo />
      <Summary product={product} quantity={quantity} setQuantity={handleQuantityChange} />
    </>
  );
}

export default App;


/**
 *function App() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }


    return (
        <>
            <ChangeHeader /> //For ChangeHeader
        </>
    );
}

export default App; 
 * 
 */
