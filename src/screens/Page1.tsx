import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native'
import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/core';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParams } from '../../navigations/AppNavigation';
import { useDispatch } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import BtnBorder from '../components/BtnBorder';
import LgTxtYellow from '../components/LgTxtYellow';
// firebase
import firestore from '@react-native-firebase/firestore';
export interface DataPage1 {
  title1: string;
  title2: string;
  title3: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  content1: string,
  content2: string,
  footer1: string,
  footer2: string,
}
const Page1: React.FC = () => {

  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch();
  const [data, setData] = useState<DataPage1>();

  // firebase
  const fb = firestore().collection('Anlene-Page1');

  useEffect(() => {
    fb.onSnapshot(querySnapshot => {
      querySnapshot.forEach((doc) => {
        setData({
          title1: doc.data()?.title1,
          title2: doc.data()?.title2,
          title3: doc.data()?.title3,
          img1: doc.data()?.img1,
          img2: doc.data()?.img2,
          img3: doc.data()?.img3,
          img4: doc.data()?.img4,
          content1: doc.data()?.content1,
          content2: doc.data()?.content2,
          footer1: doc.data()?.footer1,
          footer2: doc.data()?.footer2,
        });
      });
    });
  }, [])


  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: data?.img1 }}
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
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Header />
        <LgTxtYellow title={data?.title1}
          size={24}
          height={30} />
        <LgTxtYellow title={data?.title2}
          size={24}
          height={30} />
        <LgTxtYellow title={data?.title3}
          size={24}
          height={30} />
        <Text style={styles.subtitle}>{data?.content1}</Text>
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
            <BtnBorder
              title='KIỂM TRA NGAY'
              onpress={() => handleChangeIndex(1)}
            />
          </View>
          {/* 3 img */}
          <View style={styles.v3Img}>
            <Image
              source={{ uri: data?.img2 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
            <Image
              source={{ uri: data?.img3 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
            <Image
              source={{ uri: data?.img4 }}
              style={styles.btnImg} // Style cho hình ảnh
              resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
            />
          </View>
          {/* txt */}
          <Text style={styles.txtFooter1}>{data?.footer1}</Text>
          <Text style={styles.txtFooter2}
            numberOfLines={2}
          >{data?.footer1}</Text>
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
    left: 0,
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