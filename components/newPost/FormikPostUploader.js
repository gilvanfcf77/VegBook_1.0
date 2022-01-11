import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
                <>
                    <View
                        style={{
                            margin: 20,
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}
                    >
                        <Image source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }} style={styles.image} />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={styles.caption}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.capiton}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={styles.imageUrl}
                        placeholder='Enter image URL'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
                </>
            }

        </Formik>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },

    caption: {
        fontSize: 20
    },

    imageUrl: {
        fontSize: 18
    }
})


export default FormikPostUploader
