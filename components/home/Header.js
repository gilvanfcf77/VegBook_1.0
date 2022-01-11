import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity >
                    <Icon name='add-circle-outline' style={styles.icon} size={24} color='#73788B'></Icon>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name='heart-outline' style={styles.icon} size={24} color='#73788B'></Icon>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>
                            11
                        </Text>
                    </View>
                    <Icon name='chatbubble-ellipses-outline' style={styles.icon} size={24} color='#73788B'></Icon>
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

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'

    }

})

export default Header
