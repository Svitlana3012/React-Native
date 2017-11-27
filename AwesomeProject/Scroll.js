import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Button,
    Text,
    View
} from 'react-native';

export default class MyScroll extends React.Component {
    constructor (props) {
        super(props);

    }
    render(){

        return (
            <ScrollView
                horizontal
                contentContainerStyle={styles.contentContainer} >
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Pop"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Symphony"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Hip Hop"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Jazz"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Blues"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                /></View>
                <View style={{marginRight: 16}}>
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                /></View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 50,
        height: 300,
        backgroundColor: '#97CAE5',

    },
    buttons: {

    }

});