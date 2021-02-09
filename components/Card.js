import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet,TouchableWithoutFeedback } from 'react-native'

export default class Card extends Component {
    constructor(props) {   
        super(props)
    }
    render() {
        let pic = {uri: this.props.item.pic};
        return (
            <TouchableWithoutFeedback
            onPress={() => alert(this.props.item.title)}
            >
                <View style={styles.container}>
                    <ImageBackground source={pic} style={styles.image} imageStyle={{ borderRadius: 10, opacity: .6,backgroundColor: "black"}}>
                        <Text style={styles.text}>{this.props.item.title}</Text>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        width: 250,
        height: 100,
        borderRadius: 10,
        marginLeft: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
});