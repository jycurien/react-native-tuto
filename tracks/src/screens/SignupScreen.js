import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () =>
      clearErrorMessage()
    )

    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        text='Already have an account? Sign in instead'
        routeName='Signin'
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
  },
})
