import { createAsyncThunk } from '@reduxjs/toolkit'
// firebase
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export interface DataSend {
    name: string;
    phone: string;
    email: string;
    result: boolean[],
}

export interface DataPage {
    logo: string;
    vectorHome: string;
    vectorBack: string;
    p1_1: string;
    p1_2: string;
    p1_3: string;
    p1_4: string;
    p2_1: string;
    p2_2: string;
    p2_3: string;
    p2_4: string;
    p4_1: string;
    p4_2: string;
    p4_3: string;
    p4_4: string;
    p5_1: string;
    p5_2: string;
    p6_1: string;
    p6_2: string;
    p6_3: string;
    p6_4: string;
}

export const getDataPage = createAsyncThunk(
    "Anlene/all",
    async (data, { rejectWithValue }) => {
        try {
            // Đường dẫn đến file trong Firebase Storage
            // Lấy URL tải xuống từ Firebase Storage
            //header
            const logo: string
                = await storage()
                    .ref(`Anlene/logo.png`)
                    .getDownloadURL();
            const vectorHome: string
                = await storage()
                    .ref(`Anlene/vector-home.png`)
                    .getDownloadURL();
            const vectorBack: string
                = await storage()
                    .ref(`Anlene/vector-back.png`)
                    .getDownloadURL();
            //p1
            const p1_1: string
                = await storage()
                    .ref(`Anlene/p1-1.png`)
                    .getDownloadURL();
            const p1_2: string
                = await storage()
                    .ref(`Anlene/p1-2.png`)
                    .getDownloadURL();
            const p1_3: string
                = await storage()
                    .ref(`Anlene/p1-3.png`)
                    .getDownloadURL();
            const p1_4: string
                = await storage()
                    .ref(`Anlene/p1-4.png`)
                    .getDownloadURL();
            //p2
            const p2_1: string
                = await storage()
                    .ref(`Anlene/p2-1.png`)
                    .getDownloadURL();
            const p2_2: string
                = await storage()
                    .ref(`Anlene/p2-2.png`)
                    .getDownloadURL();
            const p2_3: string
                = await storage()
                    .ref(`Anlene/p2-3.png`)
                    .getDownloadURL();
            const p2_4: string
                = await storage()
                    .ref(`Anlene/p2-4.png`)
                    .getDownloadURL();
            //p4
            const p4_1: string
                = await storage()
                    .ref(`Anlene/p4-1.png`)
                    .getDownloadURL();
            const p4_2: string
                = await storage()
                    .ref(`Anlene/p4-2.png`)
                    .getDownloadURL();
            const p4_3: string
                = await storage()
                    .ref(`Anlene/p4-3.png`)
                    .getDownloadURL();
            const p4_4: string
                = await storage()
                    .ref(`Anlene/p4-4.png`)
                    .getDownloadURL();
            //p5
            const p5_1: string
                = await storage()
                    .ref(`Anlene/p5-1.png`)
                    .getDownloadURL();
            const p5_2: string
                = await storage()
                    .ref(`Anlene/p5-2.png`)
                    .getDownloadURL();
            //p6
            const p6_1: string
                = await storage()
                    .ref(`Anlene/p6-1.png`)
                    .getDownloadURL();
            const p6_2: string
                = await storage()
                    .ref(`Anlene/p6-2.png`)
                    .getDownloadURL();
            const p6_3: string
                = await storage()
                    .ref(`Anlene/p4-3.png`)
                    .getDownloadURL();
            const p6_4: string
                = await storage()
                    .ref(`Anlene/p6-4.png`)
                    .getDownloadURL();
            return {
                logo: logo,
                vectorHome: vectorHome,
                vectorBack: vectorBack,

                p1_1: p1_1,
                p1_2: p1_2,
                p1_3: p1_3,
                p1_4: p1_4,

                p2_1: p2_1,
                p2_2: p2_2,
                p2_3: p2_3,
                p2_4: p2_4,

                p4_1: p4_1,
                p4_2: p4_2,
                p4_3: p4_3,
                p4_4: p4_4,

                p5_1: p5_1,
                p5_2: p5_2,

                p6_1: p6_1,
                p6_2: p6_2,
                p6_3: p6_3,
                p6_4: p6_4,
            };
        } catch (error: any) {
            //console.error('Failed to fetch image URL:', error);
            console.log('Failed to fetch image URL:', error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const PostInforUser = createAsyncThunk<void, DataSend>(
    "Anlene/PostInforUser",
    async (data, { rejectWithValue }) => {
        console.log('123123!');
        // firebase
        const fb = firestore().collection('Alene-users');
        // thêm vào firebase 
        fb.add({
            name: data.name,
            phone: data?.phone,
            email: data?.email,
            arrResult: data?.result,
        }).then(() => {
            console.log('added!');
            // reset 
            //dispatch(resetIndexPage2());
            //chuyển page
            //dispatch(changeIndex(1));
        }).catch((error) => {
            console.log('error!');
            return rejectWithValue(error.message);
        });
    });

