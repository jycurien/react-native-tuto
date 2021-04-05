import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () =>
      clearErrorMessage()
    )

    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage={state.errorMessage}
        submitButtonText='Sign In'
        onSubmit={signin}
      />
      <NavLink
        text='Dont have an account? Sign up instead'
        routeName='Signup'
      />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
  },
})
