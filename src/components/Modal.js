import ReactDOM from "react-dom"

export default function Modal({ onClose, children, action }) {
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-800 bg-opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end font-bold ">
                        {action}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    )
}
