import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop, TSpan } from 'react-native-svg';
interface BtnBorderProps {
    title: string | undefined;
    size: number;
    height: number,
}
const LgTxtGreen: React.FC<BtnBorderProps> = ({ title, size, height }) => {
    // Chia các dòng bằng cách sử dụng "\n"
    const lines = title?.split('\n');

    return (
        <View>
            <Svg height={height} width="400">
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0" stopColor="#376E48" stopOpacity="1" />
                        <Stop offset="1" stopColor="#187B33" stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Text
                    fill="url(#grad)" // Áp dụng Linear Gradient
                    fontSize={size}
                    fontWeight="bold"
                    x="50"
                    y="25"
                    textAnchor="middle"
                >
                    {lines?.map((line, index) => (
                        <TSpan
                            key={index}
                            x="200" // Đặt lại vị trí x cho từng dòng
                            dy={index === 0 ? 0 : size * 1.2} // Khoảng cách giữa các dòng
                        >
                            {line}
                        </TSpan>
                    ))}
                </Text>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientBorder: {
        padding: 2, // Độ dày của viền
        borderRadius: 30, // Độ bo góc cho viền
    },
    btn: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#B70002',
        justifyContent: 'center',
        borderRadius: 30,
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        color: '#FFFF',
        fontFamily: 'SVN-Gotham',
    },
});

export default LgTxtGreen;