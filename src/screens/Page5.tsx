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
  const color: string = useSelector((state: any) => state.app?.color);
  const [data, setData] = useState<DataPage5>();
  const [url, setUrl] = useState<string>("");

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
    //link sp
    if (color == "Grey") {
      setUrl("https://www.lazada.vn/products/sua-bot-anlene-gold-3x-huong-vanilla-lon-900g-i733486477-s1880950218.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aanlene%253Bnid%253A733486477%253Bsrc%253ALazadaMainSrp%253Brn%253A06bd12f115ee15178b6ca16e6618eccd%253Bregion%253Avn%253Bsku%253A733486477_VNAMZ%253Bprice%253A425000%253Bclient%253Adesktop%253Bsupplier_id%253A200161815347%253Bbiz_source%253Ah5_hp%253Bslot%253A25%253Butlog_bucket_id%253A470687%253Basc_category_id%253A14783%253Bitem_id%253A733486477%253Bsku_id%253A1880950218%253Bshop_id%253A1482611%253BtemplateInfo%253A107883_A3_D_E%2523-1_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=vi&location=H%E1%BB%93%20Ch%C3%AD%20Minh&price=4.25E%205&priceCompare=skuId%3A1880950218%3Bsource%3Alazada-search-voucher%3Bsn%3A06bd12f115ee15178b6ca16e6618eccd%3BoriginPrice%3A425000%3BdisplayPrice%3A425000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737614199673&ratingscore=5.0&request_id=06bd12f115ee15178b6ca16e6618eccd&review=28&sale=73&search=1&source=search&spm=a2o4n.searchlist.list.25&stock=1")
    } else if (color == "Yellow") {
      setUrl("https://www.lazada.vn/products/date-thang-52025sua-anlene-gold-5x-hop-dung-thu-tien-loi-2goi-x-40g-i2923975868-s14123624670.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aanlene%253Bnid%253A2923975868%253Bsrc%253ALazadaMainSrp%253Brn%253A06bd12f115ee15178b6ca16e6618eccd%253Bregion%253Avn%253Bsku%253A2923975868_VNAMZ%253Bprice%253A33000%253Bclient%253Adesktop%253Bsupplier_id%253A200643152588%253Bbiz_source%253Ah5_hp%253Bslot%253A26%253Butlog_bucket_id%253A470687%253Basc_category_id%253A14783%253Bitem_id%253A2923975868%253Bsku_id%253A14123624670%253Bshop_id%253A4725636%253BtemplateInfo%253A107883_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=vi&location=H%E1%BB%93%20Ch%C3%AD%20Minh&price=3.3E%204&priceCompare=skuId%3A14123624670%3Bsource%3Alazada-search-voucher%3Bsn%3A06bd12f115ee15178b6ca16e6618eccd%3BoriginPrice%3A33000%3BdisplayPrice%3A33000%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737614199673&ratingscore=&request_id=06bd12f115ee15178b6ca16e6618eccd&review=&sale=0&search=1&source=search&spm=a2o4n.searchlist.list.26&stock=1")
    } else {
      setUrl("https://www.lazada.vn/products/giam-5-toi-da-60k-cho-don-hang-tu-649k-sua-bot-anlene-gold-5x-huong-vanilla-hop-giay-12kg-i2318240975-s11268696286.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aanlene%253Bnid%253A2318240975%253Bsrc%253ALazadaMainSrp%253Brn%253A06bd12f115ee15178b6ca16e6618eccd%253Bregion%253Avn%253Bsku%253A2318240975_VNAMZ%253Bprice%253A661000%253Bclient%253Adesktop%253Bsupplier_id%253A200230437197%253Bbiz_source%253Ah5_hp%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A14783%253Bitem_id%253A2318240975%253Bsku_id%253A11268696286%253Bshop_id%253A3330565%253BtemplateInfo%253A107883_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=vi&location=H%E1%BB%93%20Ch%C3%AD%20Minh&price=6.61E%205&priceCompare=skuId%3A11268696286%3Bsource%3Alazada-search-voucher%3Bsn%3A06bd12f115ee15178b6ca16e6618eccd%3BoriginPrice%3A661000%3BdisplayPrice%3A661000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737614199672&ratingscore=4.896694214876033&request_id=06bd12f115ee15178b6ca16e6618eccd&review=1452&sale=5449&search=1&source=search&spm=a2o4n.searchlist.list.0&stock=1")
    }
  }, [])

  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };

  const handleOpenLink = async () => {
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
