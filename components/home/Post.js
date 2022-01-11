import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} color={'#C4C6CE'} orientation='vertical'/>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View
                style={{
                    marginHorizontal: 15,
                    marginTop: 10
                }}
            >
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>


        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 5,
                alignItems: 'center'
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: post.profile_picture }} style={styles.userImage} />
                <Text style={{ marginLeft: 5, fontWeight: '700' }}>
                    {post.user}
                </Text>
            </View>

            <View>
                <TouchableOpacity >
                    <Icon name='ellipsis-horizontal-outline' style={styles.icon} size={24} color='#73788B'></Icon>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const PostImage = ({ post }) => {
    return (
        <View
            style={{
                width: '100%',
                height: 450
            }}
        >
            <Image
                source={{ uri: post.imageUrl }}
                style={{ height: '100%', resizeMode: 'cover' }}
            />
        </View>
    )
}

const PostFooter = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.leftFooterIconsContainer}>
                <PostIcon
                    name='heart-outline'
                />
                <PostIcon
                    name='chatbubble-outline'
                />
                {/* <PostIcon
                    name='share-social-outline'
                /> */}
                <PostIcon
                    name='send-outline'
                />

            </View>

            <View>
                <PostIcon
                    name='bookmark-outline'
                />

            </View>

        </View>
    )
}

const PostIcon = ({ name }) => {
    return (
        <TouchableOpacity >
            <Icon name={name} size={24} color='#73788B'></Icon>
        </TouchableOpacity>
    )
}

const Likes = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Text
                style={{ fontWeight: 'bold' }}
            >
                {post.likes.toLocaleString()} pessoas gostaram.
            </Text>
        </View>
    )
}

const Caption = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            <Text>
                <Text
                    style={
                        {
                            fontWeight: 'bold',
                            marginRight: 5
                        }
                    }

                >
                    {post.user}
                </Text>
                <Text> {post.caption}</Text>
            </Text>
        </View>
    )
}

const CommentsSection = ({ post }) => {
    return (
        <View style={{ marginTop: 5 }}>
            {
                !!post.comments.length &&
                (

                    <Text style={{ color: 'gray' }}>
                        View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                        {post.comments.length > 1 ? 'comments' : 'comment'}
                    </Text>
                )
            }
        </View>
    )
}

const Comments = ({ post }) => {
    // console.log(post);
    return (
        <View>
            {post.comments.map((comment, index) => (
                <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>
                            {comment.user}
                        </Text>
                        {' '}{comment.comment}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#3f882c'
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    },

})

export default Post
