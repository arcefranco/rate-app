import React from 'react'
import { View, Text } from 'react-native'
import AppBar from './AppBar.jsx'
import {Route, Routes} from 'react-router-native'
import RepositoryList from './RepositoryList.jsx'
import LogIn from '../pages/LogIn.jsx'
const Main = () => {
  return (
    <View style={{flexGrow:1}}>
        <AppBar/>
        <Routes>
          <Route exact path="/" element={<RepositoryList/>}/>
          <Route exact path="/signin" element={<LogIn/>}/>

        </Routes>
        
               
      
  
         
        </View>
  )
}



export default Main