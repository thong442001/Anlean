import { TouchableOpacity, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../../rtk/Reducer';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/AppNavigation';
// firebase
import firestore from '@react-native-firebase/firestore';

const Page2: React.FC = () => {

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
      <Text>page {index}</Text>

      {/* chon */}
      <TouchableOpacity style={styles.btnChon} onPress={conform}>
        <Text>Được</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnChon} onPress={conform}>
        <Text>Không được</Text>
      </TouchableOpacity>
      {/* xac nhan */}
      <TouchableOpacity style={styles.btnXacNhan} onPress={() => {
        navigation.navigate('Page3')
      }}>
        <Text>XÁC NHẬN</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Page2

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 200,
    borderRadius: 10,
    marginTop: 10
  },
  btnChon: {
    width: 90,
    height: 90,
    backgroundColor: '#71A162',
  },
  btnXacNhan: {
    width: 160,
    height: 50,
    backgroundColor: 'red',
  },
})