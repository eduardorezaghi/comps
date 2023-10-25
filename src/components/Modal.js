import ReactDOM from "react-dom"

export default function Modal() {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
            <div className="absolute inset-40 p-10 bg-white">
                I'm a modal!
            </div>
        </div>,
        document.querySelector(".modal-container")
    )
}
