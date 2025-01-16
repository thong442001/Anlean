import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import LinearGradient from 'react-native-linear-gradient';
interface BtnBorderProps {
    title: string | null;
    onpress?: () => void;
}
const BtnBorder: React.FC<BtnBorderProps> = ({ title, onpress }) => {

    return (
        <LinearGradient
            colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']} // Màu gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}//Từ trái sang phải
            style={styles.gradientBorder}
        >
            <TouchableOpacity style={styles.btn} onPress={onpress}>
                <Text style={styles.txt}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    gradientBorder: {
        padding: 2, // Độ dày của viền
        borderRadius: 30, // Độ bo góc cho viền
        alignSelf: 'flex-start' // canh components con ra trái
    },
    btn: {
        backgroundColor: '#B70002',// đỏ
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    txt: {
        fontSize: 20,
        fontWeight: '700',
        // textAlign: 'center',
        color: '#FFFF',
        fontFamily: 'SVN-Gotham',
        paddingHorizontal: 5
    },
});

export default BtnBorder;