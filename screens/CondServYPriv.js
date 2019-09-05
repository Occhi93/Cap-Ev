import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native'

var Estado=true

class CondServYPriv extends React.Component {
    state = {
        isOnToggleSwitch: false
    }

    onToggle(isOnToggleSwitch) {
        Estado = !isOnToggleSwitch.isOnToggleSwitch
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.texto}> 
                        CONDICIONES DE USO Y POLITICAS DE PRIVACIDAD PARA CAPEV {'\n'} {'\n'}
                        1) CONDICIONES DE USO {'\n'}
                        CONDICIONES GENERALES {'\n'}
                        El presente documento tiene por objeto establecer las Condiciones Generaler de Uso de la aplicación móvil "CAPEV", con domicilio social en ciudad de Salta, Argentina. {'\n'}
                        Los términos "nosotros", "nos" y "nuestro" se refieren a CAPEV. {'\n'} {'\n'}
                        Cualquier función nueva o herramienta que se añdan a la aplicación actual, también estarán sujetas a los Términos de Servicio. Puedes revisar la versión actualizada de los Términos de Servicio. Puedes revisar la versión actualizada de los Términos de Servicio en cualquier momento.
                    </Text>
                < ToggleSwitch
                    label="Acepto Terminos y Condiciones"
                    labelStyle={{marginVertical: 70}}
                    onColor="#0E9D59"
                    isOn={this.state.isOnToggleSwitch}
                    onToggle={isOnToggleSwitch => {
                        this.setState({isOnToggleSwitch});
                        this.onToggle({isOnToggleSwitch});
                    }}
                />
                    <Button buttonStyle={styles.boton} titleStyle={styles.textoBoton} disabled={Estado} title={'CONTINUAR'} onPress={() =>
                        this.props.navigation.navigate('MenuPrincipal')}>
                    </Button>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    texto: {
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'justify'
    },
    boton: {
        backgroundColor: '#0000FF',
        marginVertical: 5,
        width: 206,
        height: 36
    },
    textoBoton: {
        color: '#00FF00'
    }
})

export default CondServYPriv;