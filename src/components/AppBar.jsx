import React from 'react'
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import {Link, useLocation} from 'react-router-native'
import { ScrollView } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,   
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.secondaryText,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.primaryText
    }
})

const AppBarTab = ({active, children, to}) => {
    const { pathname } = useLocation()
    active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}



const AppBar = () => {
  return (
    <View style={styles.container}> 
        <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign in</AppBarTab>

        </ScrollView>

       
   
      
    </View>
  )
}

export default AppBar