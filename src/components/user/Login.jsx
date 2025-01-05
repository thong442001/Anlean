import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../rtk/API'

const Login = () => {
  const dispatch = useDispatch()
  const onLogin = () => {
    dispatch(login({
      "email": "binh@gmail.com",
      "password": "123"
    }))
  }
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})