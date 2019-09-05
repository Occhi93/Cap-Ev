import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';

export default class RecEvi1 extends Component {
    render() {
        return (
            <View>
                <Text> Recoleccion de Evidencias </Text>
                <Text> Realice capturas de pantalla de chats, imágenes, navegadores y cualquier otra aplicación que, a su criterio, considere oportuna como evidencia digital.
                    Cuando inicie la recolección, presione 2 (dos) veces sobre el botón de encendido de su teléfono para capturar la evidencia:
                </Text>
                <Button title={'Iniciar Recolección de Evidencias'}> </Button>
            </View>
        )
    }
}