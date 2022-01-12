import React from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottonTabs, { bottonTabIcons } from '../components/home/BottonTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>

                {POSTS.map((post, index) => (
                    <Post
                        post={post}
                        key={index}
                    />
                ))}
            </ScrollView>
            <BottonTabs icons={bottonTabIcons} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        flex: 1,
        // marginTop: 25
    }
})

export default HomeScreen
