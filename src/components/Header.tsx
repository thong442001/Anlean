import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import { backHome } from '../rtk/Reducer';
interface HeaderProps {
    onBack?: () => void;
}
const Header: React.FC<HeaderProps> = ({ onBack }) => {

    const dispatch = useDispatch();
    const index = useSelector((state: any) => state.app?.index);

    const handleChangeIndex = (e: number) => {
        //console.log(index);
        if (index === 3 && onBack != null) {
            onBack();
        } else {
            dispatch(changeIndex(e));
        }
    };

    const handleBackHome = () => {
        dispatch(backHome());
    };

    return (
        <View style={[styles.continue]}>
            {/* btnBack*/}
            <View style={styles.vLeft}>
                {index != 1 ? (
                    <TouchableOpacity onPress={() => handleChangeIndex(-1)}>
                        <Image
                            source={require("../../assets/images/vector-back.png")}
                            style={styles.icon} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.icon} />
                )}
            </View>
            {/* txt giữa */}
            <View style={styles.vMid}>
                <Text style={styles.txt}>{`< `} Trang {index}/6 {` >`}</Text>
            </View>

            {/* Logo hoặc btnHome */}
            <View style={styles.vRight}>
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
        </View >
    );
};

const styles = StyleSheet.create({
    continue: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 15,
        //backgroundColor: '#000000',
    },
    logo: {
        width: 60,
        height: 16,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    vLeft: {
        flex: 0.25,
        //backgroundColor: 'red'
    },
    vMid: {
        flex: 0.5,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vRight: {
        flex: 0.25,
        //backgroundColor: 'green'
    },
    txt: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'SVN-Gotham',
    },
});

export default Header;