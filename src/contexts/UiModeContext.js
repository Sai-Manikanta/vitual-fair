import { useState, createContext, useContext } from 'react';
import { isMobile } from "react-device-detect";

const UiModeContext = createContext();

export const useUiModeContext = () => {
    return useContext(UiModeContext);
}

function UiModeContextProvider({ children }) {
    const [uiMode, setUiMode] = useState(isMobile ? '2d' : '3d');

    return (
        <UiModeContext.Provider value={{ uiMode, setUiMode }}>
            { children }
        </UiModeContext.Provider>
    )
}

export default UiModeContextProvider
