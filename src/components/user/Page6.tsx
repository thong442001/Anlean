import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/AppNavigation';
const Page6: React.FC = () => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();

    // State để lưu URL hình ảnh và trạng thái loading
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Hàm lấy URL ảnh từ Firebase Storage
        const fetchImageUrl = async () => {
            try {
                // Đường dẫn đến file trong Firebase Storage
                const reference = storage().ref('Anlene/p5-1.png');

                // Lấy URL tải xuống từ Firebase Storage
                const url: string = await reference.getDownloadURL();

                setImageUrl(url); // Lưu URL vào state
                setLoading(false); // Kết thúc trạng thái loading
            } catch (error) {
                console.error('Failed to fetch image URL:', error);
                setLoading(false); // Xử lý lỗi và tắt loading
            }
        };

        fetchImageUrl();
    }, []);

    // Nếu đang tải dữ liệu, hiển thị ActivityIndicator
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Trả về giao diện chính
    return (
        <View style={styles.container}>
            {imageUrl ? (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image} // Style cho hình ảnh
                    resizeMode="cover" // Điều chỉnh cách hiển thị ảnh
                />
            ) : (
                <View>
                    <Text style={styles.errorText}>Error loading image.</Text>
                </View>
            )}
            <Text>Page6</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.navigate('Page1')
            }}>
                <Text style={styles.txt_btn}>Nhận ngay</Text>
            </TouchableOpacity>
        </View>
    );
};

// Style cho các thành phần
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    btn: {
        width: 167,
        height: 27,
        backgroundColor: 'red'
    },
    txt_btn: {
        fontSize: 20
    },
});

export default Page6;
