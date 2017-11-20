import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RootNavigator from './StackNavigator'


const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootDrawer = DrawerNavigator({
    Chat: {
        screen: RootNavigator,
        navigationOptions: {
            drawerLabel: 'My chats',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
},
{
    InitialRouteHome: 'Chat',
        contentOptions: {
    activeTintColor: 'red'
    }
}
);

export default RootDrawer;