import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';

export default class RecEvi1 extends Component {
    render() {
        return (
            <View>
                <Text style = {styles.menu}> Recoleccion de Evidencias </Text>
                <Text style = {styles.texto}> Realice capturas de pantalla de chats, imágenes, navegadores y cualquier otra aplicación que, a su criterio, considere oportuna como evidencia digital. {'\n'}
                    Cuando inicie la recolección, presione 2 (dos) veces sobre el botón de encendido de su teléfono para capturar la evidencia:
                </Text>
                {/* averiguar si se puede poner una Image, no una Image Background */}
                {/* <ImageBackground source={require('../assets/capev.png')} style={styles.imagen} > </ImageBackground> */}
                <Button title={'Iniciar Recolección de Evidencias'} onPress={() =>
                    this.props.navigation.navigate('RecEvi1')}> </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: '#4F3CFF',
        color: '#00FF00',
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 360,
        height: 76
    },
    texto: {
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'justify'
    },
    imagen: {
        width: '100%',
        height: '50%',
    }
});