import { TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import {doc,db,getFirestore,collection,addDoc,getDocs, deleteDoc} from "../firebase/firebaseConfig";
import colors from '../components/colors';
import Card from '../components/card';
import React, { useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native'; 

/**
 * Listahan screen component.
 * 
 * Displays a list of debts. Allows adding a new debt.
 * Fetches debts from Firestore and renders them in a FlatList.
 * 
 * Usage:
 * <Listahan navigation={navigation} />
 */
export default function Listahan({ navigation }) {

  const [utangList, setUtangList] = useState([]);

  const handleAddToListahan = () => {
    navigation.navigate('Magpapalista')
  }

  //Getting all the Data
  const getUtangList = async () => {
    const querySnapshot = await getDocs(collection(db, "Listahan"));
    setUtangList(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }))
    )
  }

  useFocusEffect(
    React.useCallback(() => {
      getUtangList();
      try {
        console.log("listahan.js: ", utangList[1].id)
      } catch (e) {
        console.log("Error in console log:", e);
      }
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listahan</Text>
      <FlatList
        data={utangList}
        renderItem={({ item }) => <Card prop={item} navigation={navigation} id={utangList.id} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}
      />
      <TouchableOpacity style={styles.addIcon} onPress={handleAddToListahan}>
        <Image source={require('../assets/carbon_add-filled.png')} resizeMode='contain' style={{ width: 60, height: 60 }} />
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
