import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            {/* arrow-back-outline */}
            <TouchableOpacity>
                <Icon name='chevron-back-outline' size={30} color='#73788B'></Icon>
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 25

    }
})

export default AddNewPost
