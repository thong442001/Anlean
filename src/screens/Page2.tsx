import { TouchableOpacity, Image, StyleSheet, Text, View, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addArrPage2 } from '../rtk/Reducer';
import { changeIndex } from '../rtk/Reducer';
import { changeIndexPage2 } from '../rtk/Reducer';
import Header from '../components/Header';
import LgTxt from '../components/LgTxt';
import BtnRed from '../components/BtnRed';
import LinearGradient from 'react-native-linear-gradient';
// firebase
import firestore from '@react-native-firebase/firestore';

export interface DataPage2 {
  id: number;
  title: string;
  img: string;
  content: string,
}

const Page2: React.FC = () => {

  const dispatch = useDispatch();
  const indexPage2 = useSelector((state: any) => state.app?.indexPage2);
  const arrPage2 = useSelector((state: any) => state.app?.arrPage2);
  const fb = firestore().collection('Anlene-Page2');
  const [result, setResult] = useState<boolean | null>(arrPage2[indexPage2]);
  const [data, setData] = useState<DataPage2>();
  const title1: string = "KIỂM TRA CƠ - XƯƠNG - KHỚP";
  const footer: string = "*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.";
  const arrMenu: string[] = ["Cơ", "Xương", "Khớp", "Đề kháng"];

  useEffect(() => {
    setTimeout(() => {
      if (indexPage2 < 4) {
        fb.onSnapshot(querySnapshot => {
          querySnapshot.forEach((doc) => {
            doc.data()?.id == indexPage2 && setData({
              id: doc.data()?.id,
              title: doc.data()?.title,
              img: doc.data()?.img,
              content: doc.data()?.content,
            });
          });
        });
        //reset laai chon
        setResult(null);
      }
    }, 200);
  }, [indexPage2])

  const choice = (b: boolean) => {
    setTimeout(() => {
      setResult(b)
      console.log(b)
      dispatch(addArrPage2(b));
      if (indexPage2 < 3) {
        dispatch(changeIndexPage2(1));
      }
    }, 800);
  }

  const conform = () => {
    dispatch(changeIndex(1));
  }

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
      {/* view content  */}
      <View style={styles.vContent}>
        <Header />
        {/* title1 */}
        <Text style={styles.title1}>{title1}</Text>
        {/* menu */}
        <View style={styles.vMenu}>
          <View style={styles.dashedLine} />
          {/* vCircleNumberAndContent */}
          <View style={styles.vMap}>
            {arrMenu.map((item, index) => (

              <View
                style={styles.vCircleNumberAndContent}
                key={index}
              >
                {/* circleNumber */}
                {arrPage2[index] != null ? (
                  arrPage2[index] ? <Image
                    source={require('../../assets/images/p2-vector-true.png')}
                    style={styles.circleNumber}
                  /> : <Image
                    source={require('../../assets/images/p2-vector-false.png')}
                    style={styles.circleNumber}
                  />
                ) : (
                  index != indexPage2 ? (
                    < View style={styles.circleNumber}>
                      <Text style={styles.txtCircleNumber}>{index + 1}</Text>
                    </View>
                  ) : <Image
                    source={require('../../assets/images/p2-vector-dang-chon.png')}
                    style={styles.circleNumber}
                  />
                )}
                {/* txt content */}
                <Text style={styles.txtCircleNumber}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* title2 */}
        <View style={{ marginTop: -10 }}>
          <LgTxt title={data?.title} size={18} height={40} />
        </View>
        {/* <Text>page 2 - {indexPage2 + 1}</Text> */}
        {/* img */}
        <View style={styles.vImg}>
          <Image
            source={{ uri: data?.img }}
            style={[styles.imgTong, result ? styles.ImgDaChonTrue : (result == false && styles.ImgDaChonFalse)]} // Style cho hình ảnh
          />
          {
            result ? <Image
              source={require('../../assets/images/p2-vector-true.png')}
              style={styles.circleImg}
            /> : (result == false && <Image
              source={require('../../assets/images/p2-vector-false.png')}
              style={styles.circleImg}
            />)
          }
        </View>
        {/* content */}
        <Text style={styles.content}>{data?.content}</Text>
        {/* chon */}
        <View style={styles.vtBtnChon}>
          <TouchableOpacity
            style={[styles.btnChon, result && styles.btnDaChon]}
            onPress={() => choice(true)}>
            <Image
              source={require('../../assets/images/p2-icon-duoc.png')}
              style={styles.iconOnBtn}
            />
            <Text style={styles.txtOnBtn}>Được</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnChon, result == false && styles.btnDaChon]}
            onPress={() => choice(false)}>
            <Image
              source={require('../../assets/images/p2-icon-khong-duoc.png')}
              style={styles.iconOnBtn}
            />
            <Text style={styles.txtOnBtn}> Không được</Text>
          </TouchableOpacity>
        </View>
        {/* xac nhan */}
        <View style={styles.vBtnConform}>
          <BtnRed
            title="XÁC NHẬN"
            disabled={(indexPage2 >= 3 && result != null) ? false : true}
            onpress={conform}
          />
        </View>
        {/* footer */}
        <Text style={styles.footer}>{footer}</Text>
      </View>
    </SafeAreaView >
  );
};

export default Page2

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  vtBtnChon: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.55,
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    marginHorizontal: 15,
  },
  btnChon: {
    width: 90,
    height: 90,
    backgroundColor: '#71A162',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  btnDaChon: {
    borderWidth: 1.5,
    borderColor: '#FFC200'
  },
  imgTong: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.4,
    borderRadius: 16,
  },
  ImgDaChonTrue: {
    borderWidth: 3,
    borderColor: '#73A442'
  },
  ImgDaChonFalse: {
    borderWidth: 3,
    borderColor: '#C6463A'
  },
  vLg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  vImg: {
    //backgroundColor: 'red',
  },
  vContent: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    alignItems: 'center',
  },
  title1: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
  },
  content: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
    width: Dimensions.get('window').width * 0.9,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconOnBtn: {
    width: 40,
    height: 40,
  },
  txtOnBtn: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
  },
  footer: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SVN-Gotham',
    width: Dimensions.get('window').width * 0.9,
    paddingHorizontal: 20,
  },
  vBtnConform: {
    paddingVertical: 15,
  },
  vMenu: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71A162',
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  dashedLine: {
    width: Dimensions.get('window').width * 0.7, // Độ dài đường đứt
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
  },
  circleNumber: {
    width: 25,
    height: 25,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71A162',
  },
  txtCircleNumber: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
  },
  vMap: {
    width: Dimensions.get('window').width * 0.8,
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  vCircleNumberAndContent: {
    width: 60,
    alignItems: 'center',
  },
  circleImg: {
    position: 'absolute',
    top: -15,
    right: -15,
    width: 42,
    height: 42,
  },
})