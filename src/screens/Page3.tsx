import React, { useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
import { PostInforUser } from '../rtk/API'
import type { DataSend } from '../rtk/API'
import type { AppDispatch } from '../rtk/Store';
import LinearGradient from 'react-native-linear-gradient';
import LgTxtYellow from '../components/LgTxtYellow';
import LgTxtGreen from '../components/LgTxtGreen';
//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// firebase
import firestore from '@react-native-firebase/firestore';

export interface DataPage3 {
    arrColor: string[];
    title: string;
    content1: string,
    content2: string,
    content3: string,
    content4: string,
    content5: string,
}
const Page3: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const arrPage2: [] = useSelector((state: any) => state.app?.arrPage2);
    const [data, setData] = useState<DataPage3>();
    const [result, seResult] = useState<string>(``);

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isCheck, setIsCheck] = useState<boolean | null>(null);

    const [checkName, setCheckName] = useState<string>("");
    const [checkPhone, setCheckPhone] = useState<string>("");
    const [checkEmail, setCheckEmail] = useState<string>("");

    const [isChecked, setIsChecked] = useState(false);

    // firebase
    const fb = firestore().collection(`Anlene-Page3-${result}`);

    useEffect(() => {
        var countF: number = 0;
        arrPage2.map((item) => {
            item == false && countF++
        })
        console.log(countF)
        if (countF >= 3) {
            seResult(`Grey`);
        } else if (countF >= 1) {
            seResult(`Yellow`);
        } else {
            seResult(`Green`);
        }
    }, [])

    useEffect(() => {
        fb.onSnapshot(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setData({
                    arrColor: doc.data()?.arrColor,
                    title: doc.data()?.title,
                    content1: doc.data()?.content1,
                    content2: doc.data()?.content2,
                    content3: doc.data()?.content3,
                    content4: doc.data()?.content4,
                    content5: doc.data()?.content5,
                });
                //console.log(doc.data()?.arrColor)
            });
        });
        //console.log(data)
    }, [result])


    const validateName = (n: string) => {
        // Kiểm tra họ tên: Không rỗng, chỉ chứa chữ cái, tối thiểu 2 từ
        const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
        if (n.trim() === "") {
            setCheckName("Vui lòng nhập họ và tên");
        } else if (!(nameRegex.test(n) && n.trim().split(' ').length >= 2)) {
            setCheckName("Nhập họ và tên sai định dạng");
        } else {
            //true
            setCheckName("");
            return true;
        }
        return false;
    };

    const validatePhone = (n: string) => {
        // Kiểm tra số điện thoại: chỉ chứa 10 hoặc 11 số, bắt đầu bằng 0
        const phoneRegex = /^0[0-9]{9,10}$/;
        if (n.trim() === "") {
            setCheckPhone("Vui lòng nhập số điện thoại");
        } else if (!phoneRegex.test(n)) {
            setCheckPhone("Nhập số điện thoại sai định dạng");
        } else {
            //true
            setCheckPhone("");
            return true;
        }
        return false;
    };

    const validateEmail = (n: string) => {
        // Kiểm tra email hợp lệ
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (n.trim() === "") {
            setCheckEmail("Vui lòng nhập email");
        } else if (!emailRegex.test(n)) {
            setCheckEmail("Nhập email sai định dạng");
        } else {
            //true
            setCheckEmail("");
            return true;
        }
        return false;
    };

    const add = () => {
        const data: DataSend = {
            name: name,
            phone: phone,
            email: email,
            result: arrPage2,
        };
        dispatch(PostInforUser(data));
    };

    const onClickCheck = () => {
        validateName(name)
        validatePhone(phone)
        validateEmail(email)
        if (
            validateName(name)
            && validatePhone(phone)
            && validateEmail(email)
        ) {
            add()
            dispatch(changeIndex(1));
        }
    }

    useEffect(() => {
        setIsCheck(
            name.trim() !== ""
            && phone.trim() !== ""
            && email.trim() !== ""
        );
    }, [name, phone, email])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            {/* view LinearGradient */}
            <View>
                {
                    data != null &&
                    <LinearGradient
                        colors={data?.arrColor}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}//Từ trái sang phải
                        style={styles.vLg}
                    ></LinearGradient>
                }
            </View>
            {/* view content  */}
            <ScrollView style={styles.vScrollView}>
                <View style={styles.vContent}>
                    <Header />
                    {/* logo */}
                    <Image
                        source={require("../../assets/images/logo.png")}
                        resizeMode='contain'
                        style={styles.logo} />
                    {/* content 1 */}
                    {
                        result === 'Green' ? (
                            <LgTxtYellow title={data?.content1}
                                size={13}
                                height={30} />
                        ) : (result === 'Yellow' ? (
                            <LgTxtGreen title={data?.content1}
                                size={13}
                                height={30} />
                        ) : (
                            <Text style={styles.titleRedMin}>
                                {data?.content1}
                            </Text>
                        )
                        )
                    }
                    {/* title LineGradient */}
                    {
                        result === 'Green' ? (
                            <LgTxtYellow title={data?.title}
                                size={26}
                                height={36} />
                        ) : (result === 'Yellow' ? (
                            <LgTxtGreen title={data?.title}
                                size={26}
                                height={36} />
                        ) : (
                            <Text style={styles.titleRedMax}>
                                {data?.title}
                            </Text>
                        ))
                    }
                    {/* content 2 */}
                    <Text style={styles.content2}>
                        {data?.content2}
                    </Text>
                    {/* content 3 */}
                    <Text style={styles.content3}>
                        {data?.content3}
                    </Text>

                    <View style={styles.form}>
                        {/* ho va ten */}
                        <View>
                            <Text style={styles.label}>
                                Họ tên:<Text style={styles.star}>*</Text>
                            </Text>
                            <TextInput
                                style={[styles.input,
                                checkName != ""
                                && (result == 'Yellow'
                                    ? styles.clBwInputGreen
                                    : styles.clBwInputYellow)]}
                                placeholder='Nhập họ và tên'
                                keyboardType='ascii-capable'
                                placeholderTextColor="#BABABA"
                                value={name}
                                onChangeText={setName}
                            />
                            {/* check name */}
                            <Text
                                style={result == 'Yellow'
                                    ? styles.checkGreen
                                    : styles.checkYellow}
                            >
                                {checkName}
                            </Text>
                        </View>
                        {/* Số điện thoại */}
                        <View>
                            <Text style={styles.label}>
                                Số điện thoại:<Text style={styles.star}>*</Text>
                            </Text>
                            <TextInput
                                style={[styles.input,
                                checkPhone != ""
                                && (result == 'Yellow'
                                    ? styles.clBwInputGreen
                                    : styles.clBwInputYellow)]}
                                placeholder='Nhập số điện thoại'
                                keyboardType='ascii-capable'
                                placeholderTextColor="#BABABA"
                                value={phone}
                                onChangeText={setPhone}
                            />
                            {/* check phone */}
                            <Text
                                style={result == 'Yellow'
                                    ? styles.checkGreen
                                    : styles.checkYellow}
                            >
                                {checkPhone}
                            </Text>
                        </View>
                        {/* email */}
                        <View>
                            <Text style={styles.label}>
                                Email:<Text style={styles.star}>*</Text>
                            </Text>
                            <TextInput
                                style={[styles.input,
                                checkEmail != ""
                                && (result == 'Yellow'
                                    ? styles.clBwInputGreen
                                    : styles.clBwInputYellow)]}
                                placeholder='Nhập email'
                                keyboardType='ascii-capable'
                                placeholderTextColor="#BABABA"
                                value={email}
                                onChangeText={setEmail}
                            />
                            {/* check email */}
                            <Text
                                style={result == 'Yellow'
                                    ? styles.checkGreen
                                    : styles.checkYellow}
                            >
                                {checkEmail}
                            </Text>
                        </View>
                    </View>
                    {/* check box */}
                    <View style={styles.vCheckbox}>
                        <TouchableOpacity
                            style={styles.formCheckBox}
                            onPress={() => setIsChecked(!isChecked)}
                        >
                            {isChecked && (
                                <MaterialCommunityIcons name="check" size={18} color="green" />
                            )}
                        </TouchableOpacity>
                        {/* conten 4 */}
                        <Text style={styles.txtCheckBox}>
                            {data?.content4}
                        </Text>
                    </View>
                    {/* conten 5 */}
                    <Text style={styles.content4}
                        numberOfLines={2}>
                        {data?.content5}
                    </Text>
                    {/* btn HOÀN THÀNH */}
                    <TouchableOpacity
                        style={isCheck ? styles.btnRed : styles.btnGrey}
                        onPress={onClickCheck}
                    >
                        <Text style={styles.txt}>HOÀN THÀNH</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

// Style cho các thành phần
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#969696',
    },
    form: {
        paddingVertical: 10,
        flexDirection: 'column',
        //gap: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
        color: '#FFF',
    },
    star: {
        color: '#ECD24A',
    },
    input: {
        // width: 327,
        // height: 40,
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.05,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 14,
        backgroundColor: '#FFF',
        fontWeight: '500',
    },
    btnXacNhan: {
        width: 160,
        height: 50,
        backgroundColor: 'red',
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
        width: 120,
        height: 32,
    },
    //txt
    content1: {
        fontSize: 13,
        fontFamily: 'SVN-Gotham',
        color: '#ECD24A',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    content2: {
        width: Dimensions.get('window').width * 0.75,
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
        lineHeight: 18,
        marginVertical: 4,
    },
    content3: {
        width: Dimensions.get('window').width * 0.85,
        color: '#FFF',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
    },
    content4: {
        width: Dimensions.get('window').width * 0.85,
        fontSize: 11,
        color: '#FFFFFF',
        fontWeight: '400',
        fontFamily: 'SVN-Gotham',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 10,
        lineHeight: 16,
    },
    //checkbox style
    vCheckbox: {
        width: Dimensions.get('window').width * 0.85,
        flexDirection: 'row',
        alignItems: 'center',
    },
    formCheckBox: {
        width: 18,
        height: 18,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        marginRight: 10,
    },
    txtCheckBox: {
        color: '#FFFFFF',
        fontSize: 11,
        lineHeight: 20,
        flexShrink: 1, // Giúp chữ co lại khi cần
    },
    titleRedMax: {
        fontSize: 26,
        color: '#DF1E13',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
        textAlign: 'center',
    },
    titleRedMin: {
        fontSize: 13,
        color: '#DF1E13',
        fontWeight: '700',
        fontFamily: 'SVN-Gotham',
        textAlign: 'center',
        marginTop: 20,
    },
    checkYellow: {
        fontSize: 12,
        color: '#ECD24A',
        fontWeight: '500',
        fontFamily: 'SVN-Gotham',
    },
    checkGreen: {
        fontSize: 12,
        color: '#376E48',
        fontWeight: '500',
        fontFamily: 'SVN-Gotham',
    },
    clBwInputGreen: {
        borderColor: '#376E48',
        borderWidth: 1.5,
    },
    clBwInputYellow: {
        borderColor: '#ECD24A',
        borderWidth: 1.5,
    },
});

export default Page3;
