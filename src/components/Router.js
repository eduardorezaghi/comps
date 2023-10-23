import { useNavigation } from "../hooks/use-navigation";

export default function Router({ path, children }) {
    const { currentPath } = useNavigation();

    return currentPath === path ? children : null;
}