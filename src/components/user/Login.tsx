import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../rtk/API'
// firebase
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  // firebase
  const fb = firestore().collection('test');
  const [list, setList] = useState([]);

  useEffect(() => {
    fb.onSnapshot(querySnapshot => {
      const temp: any = [];
      querySnapshot.forEach((doc) => {
        temp.push({
          id: doc.id,
          name: doc.data().name,
          old: doc.data().old,
        });
      });
      setList(temp);
    });
  }, [])

  // const dispatch = useDispatch()
  // const onLogin = () => {
  //   dispatch(login({
  //     "email": "binh@gmail.com",
  //     "password": "123"
  //   }))
  // }
  return (
    <View>
      <Text>Login</Text>
      {list.map((item: any) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.old}</Text>
        </View>
      ))}
      {/* <Button title="Login" onPress={onLogin} /> */}
    </View>
  );
};

export default Login

const styles = StyleSheet.create({})