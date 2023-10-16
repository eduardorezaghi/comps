import Dropdown from "./components/Dropdown";
import React from "react";
import "./index.css";

export default function App() {
    const [selected, setSelected] = React.useState(null);

    const onSelectedChange = (selected) => {
        setSelected(selected);
    };

    const options = [
        {
            label: "The Color Red",
            value: "red",
        },
        {
            label: "The Color Green",
            value: "green",
        },
        {
            label: "A Shade of Blue",
            value: "blue",
        },
    ];

    return (
        <Dropdown
            options={options}
            value={selected}
            onChange={onSelectedChange}
        />
    );
}
