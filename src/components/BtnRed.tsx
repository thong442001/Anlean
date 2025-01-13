import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
interface BtnRedProps {
    title: string | null;
    onpress?: () => void;
    disabled: boolean;
}
const BtnRed: React.FC<BtnRedProps> = ({ title, onpress, disabled }) => {

    return (
        <TouchableOpacity
            style={disabled ? styles.btnGrey : styles.btnRed}
            onPress={onpress}
            disabled={disabled}
        >
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
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

export default BtnRed;