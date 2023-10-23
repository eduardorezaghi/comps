import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    // State to hold the current path
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Listen for changes to the path only once
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // Update state when the URL changes
        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    const navigate = (path) => {
        // Update the browser URL
        window.history.pushState({}, "", path);

        // Update the state
        setCurrentPath(path);
        console.log(currentPath);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
