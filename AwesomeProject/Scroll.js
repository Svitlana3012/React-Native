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
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Pop"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Etc"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
                <Button
                    style={styles.buttons}
                    title="Rock"
                    onPress={() => console.log('Pressed!')}
                />
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
        width: 50,
        height:50,
        marginLeft:50
    }

});