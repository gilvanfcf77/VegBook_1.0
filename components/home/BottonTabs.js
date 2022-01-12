import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

export const bottonTabIcons = [
    {
        name: 'Home',
        active: 'home',
        inactive: 'home-outline'
    },
    {
        name: 'Search',
        active: 'search',
        inactive: 'search-outline'
    },
    {
        name: 'Profile',
        active: 'person',
        inactive: 'person-outline'
    }
]

const BottonTabs = ({ icons }) => {



    const [activeTab, setActiveTab] = useState('Home')
    // console.warn(activeTab);

    const PostIcon = ({ icon }) => {
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Icon
                    name={activeTab === icon.name ? icon.active : icon.inactive}
                    size={30}
                    color='#73788B'>
                </Icon>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.wrapper}>
            <Divider width={1} color={'#C4C6CE'} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <PostIcon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 120,
        backgroundColor: '#fff'

    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    }

})

export default BottonTabs
