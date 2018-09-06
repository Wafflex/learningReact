import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.number}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 3,
        alignItems : 'center',
        justifyContent : 'center'
    }
})