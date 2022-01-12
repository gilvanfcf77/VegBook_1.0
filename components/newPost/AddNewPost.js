import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation} />
        </View>
    )
}

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
