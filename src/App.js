import { useState } from 'react';
import './index.css';

/*
//Helping Ammuu on updating a selectvalue
function App() {
  const [formData, setFormData] = useState({ selectValue: "", textValue: "hi" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "selectValue") {
      setFormData({ ...formData, [id]: value });
    }
    if (id === "textValue") {
      setFormData({ ...formData, [id]: value });
    }
  };

  return (
    <>
      <form>
        <select
          id="selectValue"
          value={formData.selectValue}
          onChange={handleChange}
        >
          <option value="">Select Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          id="textValue"
          type="text"
          value={formData.textValue}
          onChange={handleChange}
        />
      </form>
      <h1>{formData.selectValue} and {formData.textValue}</h1>
    </>
  );
}
export default App;
*/
/**
 * For stateuplifting
 * import { useState } from "react";
import ProductPage from "./ProductPage";
import AddressInfo from "./AddressInfo";
import Summary from "./Summary";
 * function App() {
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

 */

/**
 *
import ChangeHeader from "./ChangeHeader"
function App() {
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
