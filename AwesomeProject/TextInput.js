import React from 'react';
import {View, Text, TextInput, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { Constants } from 'expo';


export default class AnyTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            isStateLoaded: false
        };
    }
    async componentDidMount () {
        const text = await AsyncStorage.getItem('text');
        console.log('Loaded from AsyncStorage:', text);
        this.setState({
            text,
            isStateLoaded: true
        })
    }
    handleTextChange = text => {
        this.setState({ text });
        AsyncStorage.setItem('text', text)
    };
    render() {
        const { text, isStateLoaded } = this.state;

        if (!isStateLoaded) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Put your text here"
                    maxLength={50}
                    onChangeText={this.handleTextChange}
                    value={this.state.text}
                />
                <Text style={styles.paragraph}>You have written: {this.state.text}</Text>
                <Text>{text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    input: {
        height: 40,
        marginTop: 40
    }
});




