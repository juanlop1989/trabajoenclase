import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ContentTheme } from './ContexTheme';

interface Props {
    children: React.ReactNode;
}

export default function ThemeLocalProvider({ children }: Props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        console.log('Toggling theme'); // Verifica si se imprime en la consola
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <ContentTheme.Provider value={{ isDarkTheme, toggleTheme }}>
            <View style={[{ backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
                {children}
            </View>
        </ContentTheme.Provider>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
});

export const useTheme = () => {
    const context = React.useContext(ContentTheme);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de ThemeLocalProvider');
    }
    return context;
};
