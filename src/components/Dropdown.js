import { useState, useEffect, useRef } from "react";
import Panel from './Panel'

export default function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            // If the click was inside of the ref'd element, do nothing.
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
        };

        document.addEventListener("click", handler);

        // Cleanup function
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

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
        <div ref={ref} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
            </Panel>
            {!!isOpen && <Panel
                className="absolute top-full border rounded">{renderedOptions}
            </Panel>}
        </div>
    );
}
