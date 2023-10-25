import classNames from "classnames";
import Link from "./Link";

export default function Sidebar() {
    const links = [
        { path: "/", label: "Dropdown" },
        { path: "/accordion", label: "Accordion" },
        { path: "/buttons", label: "Buttons" },
        { path: "/modal", label: "Modal" },
    ];

    const classes = classNames("flex", "flex-col", "col-span-2", "bg-white", "p-4", "shadow-lg", "rounded-lg")
    
    return (
        <div
            className={classes}
        >
            {links.map(({ path, label }) => (
                <Link
                    key={path}
                    path={path}
                    activeClassName="font-bold text-blue-700 border-l-4 border-blue-500 pl-2"
                    className="text-blue-500 hover:underline"
                >{label}</Link>
            ))}
        </div>
    );
}