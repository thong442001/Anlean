import { TouchableOpacity, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../../rtk/Reducer';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/AppNavigation';
// firebase
import firestore from '@react-native-firebase/firestore';

const Page5: React.FC = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch();
  const index = useSelector((state: any) => state.app.index);

  const conform = () => {
    dispatch(changeIndex(1));
    console.log(index)
  }

  return (
    <ScrollView>
      <Text>Page5</Text>
      <TouchableOpacity style={styles.btn} onPress={() => {
        navigation.navigate('Page6')
      }}>
        <Text style={styles.txt_btn}>Nhận ngay</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Page5

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 200,
    borderRadius: 10,
    marginTop: 10
  },
  btn: {
    width: 167,
    height: 27,
    backgroundColor: 'red'
  },
  txt_btn: {
    fontSize: 20
  },
})