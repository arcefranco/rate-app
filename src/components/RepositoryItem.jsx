import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryInfo from "./RepositoryInfo";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";


const RepositoryItem = ({id, fullName, description, forks, language, ownerAvatar}) => {
  return (
    <View key={id} style={styles.container}>
                
                <RepositoryItemHeader fullName={fullName} description={description} id={id} ownerAvatar={ownerAvatar}/>
                <RepositoryInfo forks={forks} language={language}/>

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
export default RepositoryItem