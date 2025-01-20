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
import { useDispatch } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
// firebase
import firestore from '@react-native-firebase/firestore';
export interface DataPage6 {
    title1: string;
    title2: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    content1: string,
}
const Page6: React.FC = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState<DataPage6>();
    // firebase
    const fb = firestore().collection('Anlene-Page6');

    useEffect(() => {
        fb.onSnapshot(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setData({
                    title1: doc.data()?.title1,
                    title2: doc.data()?.title2,
                    img1: doc.data()?.img1,
                    img2: doc.data()?.img2,
                    img3: doc.data()?.img3,
                    img4: doc.data()?.img4,
                    content1: doc.data()?.content1,
                });
            });
        });
    }, [])

    const handleChangeIndex = (e: number) => {
        dispatch(changeIndex(e));
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
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
                {/* title 1 */}
                <Text style={styles.title1}>
                    {data?.title1}
                </Text>
                {/* title 2 */}
                <Text style={styles.title2}>
                    {data?.title2}
                </Text>
                {/* img1 */}
                <Image
                    source={{ uri: data?.img1 }}
                    style={[styles.imgMax]}
                    resizeMode='contain'
                />
                {/* content 1 */}
                <Text style={styles.content1}>
                    {data?.content1}
                </Text>
                {/* img2 */}
                <Image
                    source={{ uri: data?.img2 }}
                    style={[styles.imgMin]}
                    resizeMode='contain'
                />
                {/* img3 */}
                <Image
                    source={{ uri: data?.img3 }}
                    style={[styles.imgMin]}
                    resizeMode='contain'
                />
                {/* img4 */}
                <Image
                    source={{ uri: data?.img4 }}
                    style={[styles.imgMin]}
                    resizeMode='contain'
                />
            </ScrollView>
        </SafeAreaView >
    );
};

export default Page6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    // LinearGradient
    vLg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    vScrollView: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top: 0,
        left: 0,
    },
    logo: {
        width: 98,
        height: 26,
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 5,
    },
    title1: {
        fontSize: 24,
        color: '#ECD24A',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
        textAlign: 'center',
        marginVertical: 5,
    },
    title2: {
        fontSize: 18,
        color: '#ECD24A',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
        textAlign: 'center',
        marginVertical: 5,
    },
    imgMax: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.3,
        alignSelf: 'center',
        marginVertical: 5,
    },
    //txt
    content1: {
        width: Dimensions.get('window').width * 0.85,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
        marginVertical: 5,
        alignSelf: 'center',
    },
    imgMin: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.2,
        alignSelf: 'center',
        marginVertical: 10,
    },
})