import './index.css';

export default function Summary({ product, quantity, setQuantity }) {
    function handleSubmit(e) {
        e.preventDefault();
        setQuantity(Number(e.target.elements.pquantity.value));
    }
    return (
        <div className="summary">
            <h2>Cart Information</h2>
            <h3>Product : {product}</h3>
            <form className="product-form" onSubmit={handleSubmit}>
                <label htmlFor="pquantity">Quantity</label>
                <select
                    value={quantity}
                    name="pquantity"
                    onChange={e => setQuantity(Number(e.target.value))}
                >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <button>Order</button>
            </form>
        </div>
    );
}