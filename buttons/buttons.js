import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Buttons extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title = "Aumentar"
                    onPress = {this.props.aumentar}
                />

                <Button 
                    title = "Disminuir"
                    onPress = {this.props.disminuir}
                />
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