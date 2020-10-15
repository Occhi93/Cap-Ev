import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

class MenuPrincipal extends React.Component {
    render() {
        return (
            <View>
                {/* <Header>
                    <Left>
                        <Icon name="android-menu" onPress={() => this.props.navigation.navigate(DrawerOpen)} />
                    </Left>
                </Header> */}
                <ImageBackground source={require('../assets/logo2.png')} style={styles.imagen}>
                {this.props.children}
                <Text style={styles.menu}> Menú Principal </Text>
                <View style={styles.container}>
                    <Button title={'Recoleccion de Evidencias'} buttonStyle={styles.boton} onPress={() =>
                        this.props.navigation.navigate('RecEvi')}> </Button>
                    <Button title={'Mi Evidencia'} buttonStyle={styles.boton}> </Button>
                    <Button title={'Mensajeria'} buttonStyle={styles.boton}> </Button>
                    <Button title={'Mesa de Ayuda'} buttonStyle={styles.boton}> </Button>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imagen: {
        width: '100%',
        height: '100%',
    },
    boton: {
        width: 284,
        height: 71,
        backgroundColor: '#08AE9E'
    },
    menu: {
        backgroundColor: '#4F3CFF',
        color: '#00FF00',
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 360,
        height: 76
    }
});

export default MenuPrincipal;