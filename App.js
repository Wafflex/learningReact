import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './header/header';
import Body from './body/body';
import Buttons from './buttons/buttons';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      numero : 1
    }
  }

  aumentar = () => this.setState({
    numero: this.state.numero + 1
  })

  disminuir = () => this.setState({
    numero: this.state.numero - 1
  })

  render() {
    return (
      <View style={styles.container}>
        <Header title = "App de prueba!!"/>
        <Body number = {this.state.numero}/>
        <Buttons 
          aumentar = {this.aumentar}
          disminuir = {this.disminuir}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaTres: {
    flex: 1,
  },

});
