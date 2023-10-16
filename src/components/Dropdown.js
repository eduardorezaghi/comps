import { useState } from "react";

export default function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log("isOpen", isOpen);
        setIsOpen((nextIsOpen) => !nextIsOpen);
    };

    const handleOptionClick = (option) => {
        onChange(option);
        console.log("Selected: ", option);
        setIsOpen(false);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                onClick={() => handleOptionClick(option)}
                key={option.value}
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <div
                className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
            </div>
            {!!isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
        </div>
    );
}
