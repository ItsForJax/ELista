import { TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import {doc,db,getFirestore,collection,addDoc,getDocs, deleteDoc} from "../firebase/firebaseConfig";
import colors from '../components/colors';
import Card from '../components/card';
import React, { useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native'; 

export default function Listahan({navigation}) {

  const [utangList, setUtangList] = useState([]);
  
  const handleAddToListahan = () => {
    navigation.navigate('Magpapalista')
  }

  //Getting all the Data
  const getUtangList = async() => {
    const querySnapshot = await getDocs(collection(db, "Listahan"));
    setUtangList(
      querySnapshot.docs.map((doc)=>({
        ...doc.data(), id: doc.id
      }))
    )
  }

  useFocusEffect(
    React.useCallback(() => {
      getUtangList();
      console.log(utangList.id)
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listahan</Text>
        <FlatList
        data={utangList}
        renderItem={({item}) => <Card prop={item} navigation={navigation} id={utangList.id}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{width: '100%', alignItems: 'center'}}
      />
      <TouchableOpacity style={styles.addIcon} onPress={handleAddToListahan}>
        <Image source={require('../assets/carbon_add-filled.png')} resizeMode='contain' style={{width: 60, height: 60}}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10
  },
  addIcon: {
    position: 'absolute',
    right: 50,
    bottom: 50,
    width: 60,
    height: 60,
  }
});
