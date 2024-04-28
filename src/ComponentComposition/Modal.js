function Modal({ children }) {
    return (
        <>
            {children}
        </>
    );
}

function Success() {
    return <h1 style={{ color: "#007f5f", textAlign: "center" }}
        onMouseEnter={() => console.log("Entered Success")}
        onMouseLeave={() => console.log("Left Success")}>Success</h1>
}

function Warning() {
    return <h1 style={{ color: "#ffaa00", textAlign: "center" }}>Warning</h1>
}

function Error() {
    return <h1 style={{ color: "#c1121f", textAlign: "center" }}>Error</h1>
}

export { Success, Warning, Error };
export default Modal;