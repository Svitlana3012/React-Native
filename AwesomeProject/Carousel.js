import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';
import { Font } from 'expo';

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    }
})

export default class MySwiper extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({Arial: require('./arial.ttf')});
        this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.text}>Hello Swiper</Text>
                        ) : null
                    }
                </View>
                <View style={styles.slide2}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.text}>Swiper</Text>
                        ) : null
                    }
                </View>
                <View style={styles.slide3}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.text}>Hello Swiper</Text>
                        ) : null
                    }
                </View>
            </Swiper>
        )
    }
};

AppRegistry.registerComponent('myproject', () => swiper);