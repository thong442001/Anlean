import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import LgTxt from '../components/LgTxt';
import BtnBorder from '../components/BtnBorder';
// firebase
import firestore from '@react-native-firebase/firestore';
export interface DataPage4 {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  content1: string,
  content2: string,
  content3: string,
  content4: string,
  content5: string,
}
const Page4: React.FC = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState<DataPage4>();
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // firebase
  const fb = firestore().collection('Anlene-Page4-Green');


  useEffect(() => {
    fb.onSnapshot(querySnapshot => {
      querySnapshot.forEach((doc) => {
        setData({
          title: doc.data()?.title,
          img1: doc.data()?.img1,
          img2: doc.data()?.img2,
          img3: doc.data()?.img3,
          img4: doc.data()?.img4,
          content1: doc.data()?.content1,
          content2: doc.data()?.content2,
          content3: doc.data()?.content3,
          content4: doc.data()?.content4,
          content5: doc.data()?.content5,
        });
      });
    });
  }, [])

  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* view LinearGradient */}
      <View>
        <LinearGradient
          colors={[
            '#0E470E',
            '#1F660D',
            '#20680DE5',
            '#236E0DD9',
            '#27750DB2',
            '#236E0DD9',
            '#20680DE5',
            '#1F660D',
            '#0E470E',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}//Từ trái sang phải
          style={styles.vLg}
        ></LinearGradient>
      </View>
      <ScrollView style={styles.vScrollView}>
        {/* <View style={styles.vContent}> */}
        <Header />
        {/* logo */}
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode='contain'
          style={styles.logo} />
        {/* title LineGradient */}
        <LgTxt title={"XIN CHÚC MỪNG!"}
          size={24}
          height={36} />
        {/* content 1 */}
        <Text style={styles.content1}>
          Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.
        </Text>
        {/* 3 img */}
        <View style={styles.v3img}>
          {/* img1 */}
          <View>
            <Image
              source={{ uri: data?.img1 }}
              style={[styles.imgMin]}
            />
            <TouchableOpacity style={styles.btnMin}>
              <Text style={styles.txtBtnMin1}>
                KHỐI CƠ
              </Text>
              <Text style={styles.txtBtnMin2}>
                MẤT ĐI
              </Text>
            </TouchableOpacity>
          </View>
          {/* img2 */}
          <View>
            <Image
              source={{ uri: data?.img2 }}
              style={[styles.imgMin]}
            />
            <TouchableOpacity style={styles.btnMin}>
              <Text style={styles.txtBtnMin1}>
                MẬT ĐỘ XƯƠNG
              </Text>
              <Text style={styles.txtBtnMin2}>
                SUY GIẢM
              </Text>
            </TouchableOpacity>
          </View>
          {/* img3 */}
          <View>
            <Image
              source={{ uri: data?.img3 }}
              style={[styles.imgMin]}
            />
            <TouchableOpacity style={styles.btnMin}>
              <Text style={styles.txtBtnMin1}>
                KHỚP
              </Text>
              <Text style={styles.txtBtnMin2}>
                THOÁI HOÁ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* content 2 */}
        <Text style={styles.content2}>
          Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.
        </Text>
        {/* img Max */}
        <View style={{ alignSelf: 'center', }}>
          <Image
            source={{ uri: data?.img4 }}
            style={[styles.imgMax]}
            resizeMode='contain'
          />
        </View>
        {/* content 3 */}
        <Text style={styles.content3}>
          LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ
        </Text>
        {/* conten 4 */}
        <Text
          style={styles.content4}
        >
          *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
          Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
        </Text>
        {/* conten 5 */}
        {!seeMore ? (
          <TouchableOpacity onPress={() => setSeeMore(!seeMore)}>
            <Text style={styles.content3}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        ) : (
          <Text
            style={styles.content5}
          >
            *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
            Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
          </Text>
        )}
        {/* btn MUA NGAY */}
        <View style={{ alignSelf: 'center', }}>
          <BtnBorder title='MUA NGAY' onpress={() => handleChangeIndex(1)} />
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView >
  );
};

export default Page4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  //btn hoan thanh
  btnRed: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#B70002',// đỏ dam
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  btnGrey: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#B8B8B8',// đỏ dam
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  txt: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFF',
    fontFamily: 'SVN-Gotham',
    paddingHorizontal: 5
  },
  // LinearGradient
  vLg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  // v absolute
  vContent: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    alignItems: 'center',
  },
  vScrollView: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
  },
  logo: {
    width: 87,
    height: 22,
    alignSelf: 'center',
  },
  //txt
  content1: {
    width: Dimensions.get('window').width * 0.92,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    margin: 5,
    alignSelf: 'center',
  },
  content2: {
    width: Dimensions.get('window').width * 0.85,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    margin: 5,
    alignSelf: 'center',
  },
  content3: {
    color: '#FFC200',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    margin: 5,
    alignSelf: 'center',
  },
  content4: {
    width: Dimensions.get('window').width * 0.8,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    margin: 5,
    alignSelf: 'center',
  },
  txtXemThem: {
    fontSize: 12,
    color: '#ECD24A',
    fontWeight: '500',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    margin: 5,
    alignSelf: 'center',
    //Gạch chân solid
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid'
  },
  content5: {
    width: Dimensions.get('window').width * 0.9,
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 5,
    alignSelf: 'center',
  },
  ///3img
  v3img: {
    width: Dimensions.get('window').width * 0.89,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  imgMin: {
    width: 86,
    height: 86,
  },
  btnMin: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#187B33',
    borderRadius: 8,
    borderColor: '#FFFFFF',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnMin1: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '900',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
  },
  txtBtnMin2: {
    fontSize: 12,
    color: '#ECD24A',
    fontWeight: '900',
    fontFamily: 'SVN-Gotham',
    textAlign: 'center',
  },
  imgMax: {
    width: Dimensions.get('window').width * 0.78,
    height: Dimensions.get('window').height * 0.3,
  },
})