import { useState, createContext, useContext } from 'react';

const UiModeContext = createContext();

export const useUiModeContext = () => {
    return useContext(UiModeContext);
}

function UiModeContextProvider({ children }) {
    const [uiMode, setUiMode] = useState('3d');

    return (
        <UiModeContext.Provider value={{ uiMode, setUiMode }}>
            { children }
        </UiModeContext.Provider>
    )
}

export default UiModeContextProvider
