import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/AppNavigation';
// firebase
import firestore from '@react-native-firebase/firestore';
const Page3: React.FC = () => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    // firebase
    const fb = firestore().collection('Alene-users');

    const onClickAdd = () => {
        fb.add({
            name: name,
            phone: phone,
            email: email,
        }).then(() => {
            console.log('added!');
        });
    };

    return (
        <SafeAreaView style={styles.container}>
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
                </View>
            </View>
            {/* btn HOÀN THÀNH */}
            <TouchableOpacity style={styles.btnXacNhan} onPress={() => {
                onClickAdd();
                navigation.navigate('Page4')
            }}>
                <Text>HOÀN THÀNH</Text>
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
});

export default Page3;
