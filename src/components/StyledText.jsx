import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme'


const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.main
    },
    white: {
        color: 'white'
    },
    colorPrimary : {
        color: theme.colors.primary
    },
    colorSecondary : {
        color: theme.colors.textSecondary
    },

    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    },
    textAlignCenter: {
        textAlign:'center'
    }
     
})

export default function StyledText ({blue, bold, children, big, fontSize, color, fontWeight,
    small, white, style, align, ...restOfProps}){
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        white && styles.white,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style
    ]
   return(
    <Text style={textStyles} {...restOfProps}>
        {children}
    </Text>
) 
}

