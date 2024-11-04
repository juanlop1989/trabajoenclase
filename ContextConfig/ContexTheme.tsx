import React, { createContext } from "react";

interface ContentThemeType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

export const ContentTheme = createContext<ContentThemeType>({
    isDarkTheme: false,
    toggleTheme: () => {}
});


