import { useState } from "react";

export default function ChangeHeader() {
    const [data, setData] = useState("");
    const [header, setHeader] = useState("See me Changed on Entering Input value and Submit");

    const handleSubmit = (e) => {
        e.preventDefault();
        setHeader(data);
        setData("");
    }
    return (
        <>
            <h1>{header}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    );
}