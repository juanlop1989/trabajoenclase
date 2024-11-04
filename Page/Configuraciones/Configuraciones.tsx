import { View, Text } from 'react-native'
import React from 'react'
import ContextProvider from '../../Context/ContextProvider'
import Setting from '../../ContextConfig/Setting'
import ThemeLocalProvider from '../../ContextConfig/ThemeLocalProvider';

export default function Configuraciones() {
  return (
    <View>
      <ThemeLocalProvider>
        <Setting></Setting>
      </ThemeLocalProvider>
    </View>
  )
}