import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/core';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParams } from '../../navigations/AppNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import LinearGradient from 'react-native-linear-gradient';
// firebase
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
import BtnBorder from '../components/BtnBorder';
import LgTxt from '../components/LgTxt';

const Page1: React.FC = () => {

  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch();
  const dataURL = useSelector((state: any) => state.app?.dataURL);

  // firebase
  const fb = firestore().collection('test');
  const [list, setList] = useState([]);

  useEffect(() => {
  }, [])

  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Image
        source={{ uri: dataURL?.p1_1 }}
        style={styles.imageNen} // Style cho hình ảnh
        resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
      />
      <LinearGradient
        colors={['#0E470E',
          '#1F660D',
          '#20680DE5',
          '#236E0DD9',
          '#27750DB2',
          '#2E820D00']}
        style={styles.vTop}>
        <Header />
        <LgTxt title={`TẾT BẬN RỘN \nCƠ-XƯƠNG-KHỚP CÓ KHOẺ \nĐỂ CHU TOÀN?`}
          size={24}
          height={90} />
        <Text style={styles.subtitle}>
          Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi,
          làm sao chu toàn?
        </Text>
        <Text style={styles.subtitle}>
          Ngay lúc này, hãy <Text style={styles.highlight}>Kiểm tra Sức khoẻ Cơ-Xương-Khớp </Text>
          cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,
          trọn vẹn niềm vui.
        </Text>
        {/* <Text style={styles.subtitle}>
          Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
          {'\n'}Ngay lúc này, hãy{' '}
          <Text style={styles.highlight}>
            Kiểm tra Sức khoẻ Cơ-Xương-Khớp
          </Text>{' '}
          cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, trọn vẹn niềm vui.
        </Text> */}
      </LinearGradient >

      <LinearGradient
        colors={['#2E820D00',
          '#27750DB2',
          '#236E0DD9',
          '#20680DE5',
          '#1F660D',
          '#0E470E']}
        style={styles.vBottom}>
        <View style={styles.vOfvBottom}>
          {/* btn kt nngay */}
          <View>
            <BtnBorder title='KIỂM TRA NGAY' onpress={() => handleChangeIndex(1)} />
          </View>
          {/* 3 img */}
          <View style={styles.v3Img}>
            <Image
              source={{ uri: dataURL?.p1_2 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
            <Image
              source={{ uri: dataURL?.p1_3 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
            <Image
              source={{ uri: dataURL?.p1_4 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
          </View>
          {/* txt */}
          <Text style={styles.txtFooter1}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>
          <Text style={styles.txtFooter2} numberOfLines={2}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường</Text>
        </View>
      </LinearGradient >
    </SafeAreaView>
  );
};

export default Page1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#0E470E',
  },
  vTop: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
  },
  vBottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.2,
    //backgroundColor: 'red',
  },
  imageNen: {
    width: '100%',
    height: Dimensions.get('window').height * 0.87,
    borderRadius: 10,
  },
  vOfvBottom: {
    position: 'absolute',
    top: -25,
    alignItems: 'center',
  },
  txt_btn: {
    fontSize: 20,
    fontFamily: 'SVN-Gotham',
  },
  subtitle: {
    width: "80%",
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    padding: 2.5,
    letterSpacing: 0.4,
  },
  highlight: {
    fontWeight: '700',
    color: 'yellow',
    letterSpacing: 0.5,
  },
  btnImg: {
    width: 90,
    height: 60,
    borderRadius: 20,
  },
  v3Img: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  txtFooter1: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: -10,
    letterSpacing: 0.4,
  },
  txtFooter2: {
    width: 290,
    fontSize: 10,
    color: '#E6EAEF',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
    letterSpacing: 0.4,
  }
})