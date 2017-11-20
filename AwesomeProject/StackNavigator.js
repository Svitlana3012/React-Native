import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>You can chat here!</Text>
                <Button
                    onPress={() => navigate('Chat', { user: 'Alex' })}
                    title="Chat with Alex"
                />
            </View>
        );
    }
}
class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (

            <View>
                <Text>Let`s chat, {params.user}</Text>
            </View>
        );
    }
}

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'My chats',
        },
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            headerTitle: this.navigationOptions
        },
    },
});


export default RootNavigator;