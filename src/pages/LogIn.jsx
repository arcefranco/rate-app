import React from 'react'
import { Formik, useField } from 'formik'
import { View, Text } from 'react-native'
import { Button, StyleSheet} from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import {loginValidationSchema} from '../validationSchemas/login.js'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
    error: {
        color: 'red',
        fontSize:15,
        marginBottom:10,


    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
        <StyledTextInput 
        placeholder='email'
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        { ...props }
        />
        {meta.error && <StyledText style={styles.error}>{meta.error}
            </StyledText>}
        </>

    )
}

const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)){
        errors.email = 'Email is invalid'
    }

    console.log(errors)
    return errors
}

const LogIn = () => { 
  return (
   <Formik validationSchema={loginValidationSchema} initialValues={initialValues} 
   onSubmit={values => console.log(values)}>
        {({handleSubmit}) => {
            return (
                <View style={styles.container}>
                    <FormikInputValue
                    name={'email'}
                    placeholder='email'
                    />
                    <FormikInputValue
                    name={'password'}
                    placeholder='password'
                    secureTextEntry
                    />

                    <Button onPress={handleSubmit} title="LOG IN"></Button>
                </View>
            )
        }}

   </Formik>
  )
}

export default LogIn