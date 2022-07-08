import React from 'react';
import { View } from 'react-native-web';
import Main from './src/components/Main';
import RepositoryList from './src/components/RepositoryList';
import { NativeRouter } from 'react-router-native';
const App  = ()  => {

return(
<NativeRouter>
    <Main/>
</NativeRouter>

) 


};


export default App;

