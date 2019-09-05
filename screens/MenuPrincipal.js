import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
// import { Colors } from '../constants/Colors';

class MenuPrincipal extends React.Component {
    render() {
        return (
            <View>
                {/* <Header>
                    <Left>
                        <Icon name="android-menu" onPress={() => this.props.navigation.navigate(DrawerOpen)} />
                    </Left>
                </Header> */}
                <ImageBackground source={require('../assets/logo2.png')} style={{ width: '100%', height: '100%' }}>
                {this.props.children}
                <Text style={styles.menu}> Menú Principal </Text>
                <View style={styles.container}>
                    <Button title={'Recoleccion de Evidencias'} style={styles.boton} onPress={() =>
                        this.props.navigation.navigate('RecEvi')}> </Button>
                    <Button title={'Mi Evidencia'} style={styles.boton}> </Button>
                    <Button title={'Mensajeria'} style={styles.boton}> </Button>
                    <Button title={'Mesa de Ayuda'} style={styles.boton}> </Button>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boton: {
        flex: 1,
        width: 284,
        height: 81,
        color: '#08AE9E',
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