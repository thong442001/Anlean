import { TouchableOpacity, Image, StyleSheet, Text, View, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
// firebase
import firestore from '@react-native-firebase/firestore';

const Page5: React.FC = () => {

  const dispatch = useDispatch();

  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };

  const handleOpenLink = async () => {
    const url = `https://www.google.com`; // Đường dẫn bạn muốn mở
    await Linking.openURL(url)
    // try {
    //   // Kiểm tra xem liên kết có khả dụng không
    //   const supported = await Linking.canOpenURL(url);
    //   if (supported) {
    //     await Linking.openURL(url); // Mở liên kết
    //   } else {
    //     console.log('Không thể mở liên kết:', url);
    //   }
    // } catch (error) {
    //   console.error('Lỗi khi mở liên kết:', error);
    // }
  };

  return (
    <ScrollView>
      <Header />
      <Text>{`<`} Trang 5/6 {`>`}</Text>
      <TouchableOpacity style={styles.btnMuaNgay} onPress={() => {
        handleOpenLink();
      }}>
        <Text style={styles.txt_btn}>Nhận ngay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnTimHieuThem} onPress={() => {
        handleChangeIndex(1);
      }}>
        <Text style={styles.txt_btn}>Tìm hiểu ngay</Text>
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
  btnMuaNgay: {
    width: 167,
    height: 27,
    backgroundColor: 'red'
  },
  btnTimHieuThem: {
    width: 167,
    height: 27,
    backgroundColor: 'grey',
  },
  txt_btn: {
    fontSize: 20
  },
})