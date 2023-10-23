import classNames from "classnames";
import { useNavigation } from "../hooks/use-navigation";


/**
 * A component that renders a link with navigation functionality.
 * @param {Object} props - The props object.
 * @param {string} props.path - The path to navigate to when the link is clicked.
 * @param {ReactNode} props.children - The children to render inside the link.
 * @returns {JSX.Element} - The Link component.
 */
export default function Link({ path, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classNames("text-blue-500 hover:underline", "mb-3",
        className,
        path === currentPath && activeClassName,
    );

    function handleClick(event) {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        navigate(path);
    }

    return (
        <a
            className={classes}
            href={path}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}