import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import RepositoryInfo from './RepositoryInfo'
import theme from '../theme'
const RepositoryItemHeader = ({ownerAvatar, fullName, description, id}) => {
  return (
    <View style={{flexDirection:'row', paddingBottom: 2}}>
             <View style={{paddingRight: 10}}>
                    <Image
                        source={{uri: ownerAvatar}}
                        style={{width:50, height:50}}>
                    </Image>
                </View>                
                <View style={{flex: 1, paddingBottom:5}}>
                    <StyledText fontSize='subheading' fontWeight='bold'>{id}</StyledText>
                    <StyledText style={styles.fullName} white>{fullName}</StyledText>
                    <StyledText>{description}</StyledText>
                </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom:5,
        paddingTop: 5
     }, 
     fullName: {
        padding: 4,
        backgroundColor: theme.colors.primary,
        alignSelf:'flex-start'
     }


})

export default RepositoryItemHeader