import './index.css';

export default function ProductPage({ product, setProduct, quantity, setQuantity }) {
    function handleSubmit(e) {
        e.preventDefault();
        setProduct(e.target.elements.pname.value);
        setQuantity(Number(e.target.elements.pquantity.value));
    }

    return (
        <div className="product">
            <h2>Product Information</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <label htmlFor="pname">Name Of the Product</label>
                <input
                    type="text"
                    name="pname"
                    value={product}
                    placeholder="Enter product name"
                    onChange={(e) => setProduct(e.target.value)}
                />
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
                <button>Add to Cart</button>
            </form>
        </div>
    );
}

