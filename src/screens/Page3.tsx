import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetIndexPage2 } from '../rtk/Reducer';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
import { PostInforUser } from '../rtk/API'
import type { DataSend } from '../rtk/API'
import type { AppDispatch } from '../rtk/Store';
// firebase
import firestore from '@react-native-firebase/firestore';
const Page3: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const arrPage2: [] = useSelector((state: any) => state.app?.arrPage2);

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isCheck, setIsCheck] = useState<boolean | null>(null);

    const [checkName, setCheckName] = useState<string>("");
    const [checkPhone, setCheckPhone] = useState<string>("");
    const [checkEmail, setCheckEmail] = useState<string>("");

    // firebase
    // const fb = firestore().collection('Alene-users');

    const validateName = (name: string) => {
        // Kiểm tra họ tên: Không rỗng, chỉ chứa chữ cái, tối thiểu 2 từ
        const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
        if (name.trim() == '') {
            setCheckName("Vui lòng nhập họ và tên");
        } else if (!(nameRegex.test(name) && name.trim().split(' ').length >= 2)) {
            setCheckName("Nhập họ và tên sai định dạng");
        } else {
            //true
            setCheckName('');
            return true;
        }
        return false;
    };

    const validatePhone = (phone: string) => {
        // Kiểm tra số điện thoại: chỉ chứa 10 hoặc 11 số, bắt đầu bằng 0
        const phoneRegex = /^(0[0-9]{9,10})$/;
        if (phone.trim() == '') {
            setCheckPhone("Vui lòng nhập số điện thoại");
        } else if (!phoneRegex.test(phone)) {
            setCheckPhone("Nhập số điện thoại sai định dạng");
        } else {
            //true
            setCheckPhone('');
            return true;
        }
        return false;
    };

    const validateEmail = (email: string) => {
        // Kiểm tra email hợp lệ
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() == '') {
            setCheckEmail("Vui lòng nhập email");
        } else if (!emailRegex.test(email)) {
            setCheckEmail("Nhập email sai định dạng");
        } else {
            //true
            setCheckEmail('');
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
        (
            validateName(name)
            && validatePhone(phone)
            && validateEmail(email)
        ) && add();
    }

    const check = () => {
        if (
            validateName(name)
            && validatePhone(phone)
            && validateEmail(email)
        ) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        setIsCheck(
            name.trim() !== ''
            && phone.trim() !== ''
            && email.trim() !== ''
        );
    }, [name, phone, email])

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.form}>
                {/* ho va ten */}
                <View>
                    <Text style={styles.label}>Họ tên:<Text style={styles.star}>*</Text></Text>
                    <TextInput
                        style={[styles.input]}
                        placeholder='Nhập họ và tên'
                        keyboardType='phone-pad'
                        placeholderTextColor="#BABABA"
                        value={name}
                        onChangeText={setName}
                    />
                    {/* check name */}
                    <Text>{checkName}</Text>
                </View>
                {/* Số điện thoại */}
                <View>
                    <Text style={styles.label}>Số điện thoại:<Text style={styles.star}>*</Text></Text>
                    <TextInput
                        style={[styles.input]}
                        placeholder='Nhập số điện thoại'
                        keyboardType='phone-pad'
                        placeholderTextColor="#BABABA"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    {/* check phone */}
                    <Text>{checkPhone}</Text>
                </View>
                {/* email */}
                <View>
                    <Text style={styles.label}>Email:<Text style={styles.star}>*</Text></Text>
                    <TextInput
                        style={[styles.input]}
                        placeholder='Nhập email'
                        placeholderTextColor="#BABABA"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {/* check email */}
                    <Text>{checkEmail}</Text>
                </View>
            </View>
            {/* btn HOÀN THÀNH */}
            <TouchableOpacity
                style={isCheck ? styles.btnRed : styles.btnGrey}
                onPress={onClickCheck}
            >
                <Text style={styles.txt}>HOÀN THÀNH</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Style cho các thành phần
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#969696',
    },
    form: {
        paddingVertical: 10,
        flexDirection: 'column',
        gap: 24,
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
        width: 327,
        height: 40,
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
        backgroundColor: '#B70002',// đỏ dam
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    btnGrey: {
        backgroundColor: '#B8B8B8',// đỏ dam
        borderRadius: 25,
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

});

export default Page3;
