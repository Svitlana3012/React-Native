import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootDrawer from './DrawerNavigator';
import MyScroll from './Scroll';


export default class App extends React.Component {
    render() {
        return (
            <View>
                <RootDrawer />
                <MyScroll />

            </View>
            )

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Text>Shake your phone to open the developer menu.</Text>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
