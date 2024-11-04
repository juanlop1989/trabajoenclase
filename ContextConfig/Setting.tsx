import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from './ThemeLocalProvider';

export default function Setting() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <View style="container">
            <Text>
                Tema Actual: {isDarkTheme ? 'Oscuro' : 'Claro'}
            </Text>
            <Button title="Cambiar color" onPress={toggleTheme} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
});
