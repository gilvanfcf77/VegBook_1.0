import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Icon name='add-circle-outline' style={styles.icon} size={24} color='#73788B'></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },

    iconsContainer: {
        flexDirection: 'row'
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        // alignSelf: 'center'
    },

    icon: {
        marginLeft: 10
    },

})

export default Header
