import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import BtnBorder from '../components/BtnBorder';
import LgTxtYellow from '../components/LgTxtYellow';
import BtnRed from '../components/BtnRed';
// firebase
import firestore from '@react-native-firebase/firestore';

export interface DataPage5 {
  title1: string;
  title2: string;
  img1: string;
  img2: string;
  content1: string,
  content2: string,
  footer1: string,
  footer2: string,
}
const Page5: React.FC = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState<DataPage5>();

  // firebase
  const fb = firestore().collection('Anlene-Page5');


  useEffect(() => {
    fb.onSnapshot(querySnapshot => {
      querySnapshot.forEach((doc) => {
        setData({
          title1: doc.data()?.title1,
          title2: doc.data()?.title2,
          img1: doc.data()?.img1,
          img2: doc.data()?.img2,
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
    < SafeAreaView style={styles.container} >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={{ uri: data?.img1 }}
        style={styles.imageNen} // Style cho hình ảnh
        resizeMode="contain" // Điều chỉnh cách hiển thị ảnh
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
        {/* logo */}
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode='contain'
          style={styles.logo} />
        <LgTxtYellow title={data?.title1}
          size={20}
          height={30} />
        <LgTxtYellow title={data?.title2}
          size={16}
          height={30} />
        <Text style={styles.content1}>
          {data?.content1}
        </Text>
        <Text style={styles.content2}>
          {data?.content2}
        </Text>
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
          <Image
            source={{ uri: data?.img2 }}
            style={styles.image2}
            resizeMode="contain"
          />
          {/* btn mua ngay*/}
          <TouchableOpacity
            style={styles.btnMuaNgay}
            onPress={() => { handleOpenLink(); }}>
            <Text style={styles.txtBtnMuaNgay}>
              MUA NGAY
            </Text>
          </TouchableOpacity>
          {/* btn Tìm hiểu ngay */}
          <TouchableOpacity
            style={styles.btnTimHieuThem}
            onPress={() => { handleChangeIndex(1); }}
          >
            <Text style={styles.txtBtnTimHieuThem}>
              Tìm hiểu ngay
            </Text>
          </TouchableOpacity>
          {/* txt footer */}
          <Text style={styles.txtFooter1}
            numberOfLines={2}
          >
            {data?.footer1}
          </Text>
          <Text style={styles.txtFooter2}>{data?.footer2}</Text>
        </View>
      </LinearGradient >
    </SafeAreaView >
  );
};

export default Page5

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
    height: Dimensions.get('window').height * 0.3,
  },
  vBottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    //backgroundColor: 'red',
  },
  imageNen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.9,
    borderRadius: 10,
  },
  logo: {
    width: 98,
    height: 26,
    alignSelf: 'center',
    marginTop: -10,
    marginBottom: 5,
  },
  content1: {
    width: Dimensions.get('window').width * 0.85,
    color: '#FFFF',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SVN-Gotham',
    letterSpacing: 0.4,
    marginTop: 10,// margin vs title2
  },
  content2: {
    width: Dimensions.get('window').width * 0.85,
    color: '#FFFF',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SVN-Gotham',
    letterSpacing: 0.4,
  },
  vOfvBottom: {
    position: 'absolute',
    height: Dimensions.get('window').height * 0.31,
    top: -25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image2: {
    width: 250,
    height: 100,
  },
  btnMuaNgay: {
    backgroundColor: '#B70002',
    borderRadius: 40,
    paddingHorizontal: 35,
    paddingVertical: 10
  },
  txtBtnMuaNgay: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
  },
  btnTimHieuThem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 5,
    //marginVertical: 10
  },
  txtBtnTimHieuThem: {
    color: '#73A442',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
  },
  txtFooter1: {
    width: Dimensions.get('window').width * 0.85,
    fontSize: 9,
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.4,
  },
  txtFooter2: {
    width: Dimensions.get('window').width * 0.85,
    fontSize: 9,
    color: '#E6EAEF',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.4,
  },
})
