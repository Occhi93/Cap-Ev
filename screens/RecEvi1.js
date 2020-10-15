import React, {Fragment} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useCapture} from "../components/CapturaPantalla";

function Capturar() {
    const {captureViewRef, onSaveCapture} = useCapture();

    return(
        <Fragment>
            <Button onPress={onSaveCapture} title="Guardar" />
            <View style={styles.capture} ref={captureViewRef}>
                <Text style={styles.content}>Capturar</Text>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    capture: {
        flex: 1,
        backgroundColor: '#313131',
        justifyContent: 'center',
    },
    content: {
        color: 'white',
        fontSize: 40,
    },
});

export default Capturar;