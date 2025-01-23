import React from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,

} from 'react-native';
interface DialogProps {
    visible: boolean;
    title: string;
    content: string;
    onCancel: () => void;
    onConfirm: () => void;
    btnCancel: string;
    btnConfirm: string;
}

const Dialog: React.FC<DialogProps> = ({
    visible,
    title,
    content,
    onCancel,
    onConfirm,
    btnCancel,
    btnConfirm
}) => {

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={onCancel}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.dialog}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                    <View style={styles.vBtn}>
                        <TouchableOpacity
                            style={styles.btnCancel}
                            onPress={onCancel}
                        >
                            <Text style={styles.txtBtnCancel}>{btnCancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnConfirm}
                            onPress={onConfirm}
                        >
                            <Text style={styles.txtBtnConfirrm}>{btnConfirm}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',// trong suốt
    },
    dialog: {
        borderRadius: 14,
        width: 336,
        height: 194,
        alignItems: 'center',
        backgroundColor: '#FFFF',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#478449',
        fontFamily: 'SVN-Gotham',
    },
    content: {
        fontSize: 14,
        color: '#1D1C1C',
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'SVN-Gotham',
        lineHeight: 10,
        paddingVertical: 8,
    },
    vBtn: {
        //backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
    },
    //btn cancel
    btnCancel: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#B70002',
    },
    txtBtnCancel: {
        fontSize: 16,
        color: '#B70002',
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
    },
    //btn confirm
    btnConfirm: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B70002',
        borderRadius: 30,
    },
    txtBtnConfirrm: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'SVN-Gotham',
    },

});

export default Dialog;