import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})