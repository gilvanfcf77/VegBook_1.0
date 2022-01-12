import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                >
                </Image>
            </View>
            <SignupForm navigation={navigation} />
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

export default SignupScreen
