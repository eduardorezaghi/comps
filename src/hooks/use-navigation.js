import { useContext } from "react";
import NavigationContext from "../context/Navigation";

export function useNavigation() {
    const { navigate, currentPath } = useContext(NavigationContext);

    return { navigate, currentPath };
}