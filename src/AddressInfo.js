import './index.css';

export default function AddressInfo() {
    const address = "Rajahmundry, Andhra Pradesh.";

    return (
        <div className="address">
            <h2>Shipping Address</h2>
            <textarea
                defaultValue={address}
                disabled
            />
        </div>
    );
}