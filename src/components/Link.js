import classNames from "classnames";
import { useNavigation } from "../hooks/use-navigation";


export default function Link({ path, children }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classNames("text-blue-500 hover:underline", { active: path === currentPath });

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