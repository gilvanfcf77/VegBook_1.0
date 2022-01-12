import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                >
                </Image>
            </View>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50

    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 0
    },

    logo: {
        width: 300,
        resizeMode: 'contain'
    }
})

export default LoginScreen
