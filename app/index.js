import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import EStylesheet from 'react-native-extended-stylesheet';


// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Currency converter app/index.tsx</Text>
//             </View>
//         );
//     }
// }




EStylesheet.build ({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    
})

export default () => <Home />

