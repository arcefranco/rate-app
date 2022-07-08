import React from 'react'
import  Constants  from 'expo-constants'
import { View, Text } from 'react-native'
import AppBar from './AppBar.jsx'
import RepositoryList from './RepositoryList.jsx'
const Main = () => {
  return (
    <View style={{flexGrow:1}}>
        <AppBar/>
        <RepositoryList/>
        </View>
  )
}



export default Main