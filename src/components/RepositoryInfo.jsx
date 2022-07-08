import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'
const RepositoryInfo = ({forks, language}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
                <StyledText align='center' fontWeight='bold'>{forks}</StyledText>
                <StyledText align='center' >Forks</StyledText>
            </View>
            <View>
                <StyledText align='center'fontWeight='bold'>{language}</StyledText>
                <StyledText align='center' >Language</StyledText>
            </View>

        </View>
    )
}

export default RepositoryInfo