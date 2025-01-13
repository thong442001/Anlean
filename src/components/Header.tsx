import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import { backHome } from '../rtk/Reducer';
const Header: React.FC = () => {

    const dispatch = useDispatch();
    const index = useSelector((state: any) => state.app?.index);

    const handleChangeIndex = (e: number) => {
        dispatch(changeIndex(e));
    };

    const handleBackHome = () => {
        dispatch(backHome());
    };

    return (
        <View style={[styles.continue]}>
            {/* btnBack*/}
            {index != 1 ? (
                <TouchableOpacity onPress={() => handleChangeIndex(-1)}>
                    <Image
                        source={require("../../assets/images/vector-back.png")}
                        style={styles.icon} />
                </TouchableOpacity>
            ) : (
                <View style={styles.icon} />
            )}
            {/* txt giữa */}
            <View>
                <Text style={styles.txt}>{`< `} Trang {index}/6 {` >`}</Text>
            </View>

            {/* Logo hoặc btnHome */}
            {index != 1 ? (
                <TouchableOpacity onPress={() => handleBackHome()}>
                    <Image
                        source={require("../../assets/images/vector-home.png")}
                        style={styles.icon} />
                </TouchableOpacity>
            ) : (
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={styles.logo} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    continue: {
        width: 400,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        //backgroundColor: '#000000',
    },
    logo: {
        width: 70,
        height: 32,
        resizeMode: 'contain',
    },
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    txt: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'SVN-Gotham',
    },
});

export default Header;