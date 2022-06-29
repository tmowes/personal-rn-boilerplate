import React from 'react'
import { StatusBar } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Home from './pages/Home'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#09091A' }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </GestureHandlerRootView>
  )
}
