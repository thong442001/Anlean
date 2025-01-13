import { TouchableOpacity, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeIndex } from '../rtk/Reducer';
import Header from '../components/Header';
// firebase
import firestore from '@react-native-firebase/firestore';

const Page4: React.FC = () => {

  const dispatch = useDispatch();

  // firebase
  const fb = firestore().collection('test');
  const [list, setList] = useState([]);

  useEffect(() => {
    fb.onSnapshot(querySnapshot => {
      const temp: any = [];
      querySnapshot.forEach((doc) => {
        temp.push({
          id: doc.id,
          img: doc.data()?.img,
          name: doc.data()?.name,
          old: doc.data()?.old,
        });
      });
      setList(temp);
    });
  }, [])

  const onClickAdd = () => {
    fb.add({
      img: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/472709876_3939328176324739_7466587587287670951_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BuhX555xEvQQ7kNvgEokDgw&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=A1XIOpT__ly_S9pin2ZZNyB&oh=00_AYCQ2aONL-Idgbawcv6OAXEAk0i6aEe8LQC9Ssgk-OsU3w&oe=67835F4F",
      name: 'Ada Lovelace',
      old: 30,
    })
      .then(() => {
        console.log('added!');
      });
  };

  const handleChangeIndex = (e: number) => {
    dispatch(changeIndex(e));
  };

  return (
    <ScrollView>
      <Header />
      <Text>Page4</Text>
      <TouchableOpacity style={styles.btn} onPress={() => {
        // navigation.navigate('Page5')
        handleChangeIndex(1);
      }}>
        <Text style={styles.txt_btn}>Nhận ngay</Text>
      </TouchableOpacity>
      {/* {list.map((item: any) => (
        <View key={item.id}>
          <Image style={styles.image} source={{ uri: item.img }} />
          <Text>{item.name}</Text>
          <Text>{item.old}</Text>
        </View>
      ))} */}
    </ScrollView>
  );
};

export default Page4

const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 200,
    borderRadius: 10,
    marginTop: 10
  },
  btn: {
    width: 167,
    height: 27,
    backgroundColor: 'red'
  },
  txt_btn: {
    fontSize: 20
  },
})