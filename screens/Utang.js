import { Image, Modal, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, FlatList} from 'react-native';
import Lista from '../components/lista';
import {doc,db,getFirestore,collection,addDoc,getDocs, setDoc, updateDoc, arrayUnion} from "../firebase/firebaseConfig";
import React, { useEffect, useState } from 'react';
import colors from '../components/colors';
import { useFocusEffect } from '@react-navigation/native'; 

export default function Utang({route}) {
  

  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [item, setItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [lista, setLista] = useState(route.params.lista);

  // useEffect(() => {
  //   console.log("Utang.js: ",route.params);
  // }, []);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  useFocusEffect(
    React.useCallback(() => {
      route.params.getUtangList
    }, [])
  );


  const addUtang = async () => {
    try {
      const documentRef = doc(db, "Listahan", route.params.id,);

      let newObject = { item: item, price: price, quantity: qty, date: formattedDateTime };
  
      // Use arrayUnion to add the new map to the existing array
      await updateDoc(documentRef, {
        lista: arrayUnion(newObject),
      });

      setQty("")
      setPrice("")
      setItem("")
      setIsVisible(false)
  
      console.log("Map added to document successfully!");
    } catch (error) {
      console.error("Error adding map to document: ", error);
    }
  };
  
  
  

  return (
    <View style={styles.container}>
        <Text style={{width: '95%', marginTop: 10, fontSize: 17, fontWeight: '800'}}>Name: <Text style={{fontWeight: '400'}}>{route.params.name}</Text></Text>
        <Text style={{width: '95%', fontSize: 17, fontWeight: '800'}}>Utang: <Text style={{fontWeight: '400'}}>{route.params.utang}</Text></Text>

        <Text style={{fontWeight: '800', fontSize: 20, marginVertical: 10, includeFontPadding: false}}>Lista</Text>
        <FlatList
        data={lista}
        renderItem={({item})=><Lista item={item.item} quantity={item.quantity} price={item.price} date={item.date} id={route.params.id}/>}
        keyExtractor={(item)=>item.item}
        contentContainerStyle={{width: '100%', alignItems: 'center'}}
        />

      <TouchableOpacity style={styles.addIcon} onPress={()=>setIsVisible(true)}>
        <Image source={require('../assets/carbon_add-filled.png')} resizeMode='contain' style={{width: 60, height: 60}}/>
      </TouchableOpacity>

        <Modal visible={isVisible} onRequestClose={()=>setIsVisible(false)} animationType='slide' style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        <View style={styles.modalContainer}>
          <Text style={{textAlign:'center', includeFontPadding: false, fontWeight: '800', fontSize: 25, padding: 15}}>Palista</Text>
          <View>
            <View style={{flexDirection: 'row', width: '100%', backgroundColor: colors.card, 
                          padding: 10, borderRadius: 10, width: '95%', alignSelf: 'center'}}>
              <View style={{flex:5}}>
                <TextInput placeholder='Item' cursorColor={colors.text} style={styles.input} contextMenuHidden={true} onChangeText={(input)=>setItem(input)}/> 
                <View style={{flexDirection: 'row', gap: 10, paddingTop: 10}}>
                  <TextInput  placeholder= 'Quantity' cursorColor={colors.text} contextMenuHidden={true}
                              style={{...styles.input, flex: 1}} keyboardType='numeric' onChangeText={(input)=>setQty(input)}/> 
                  <TextInput  placeholder= 'Price' cursorColor={colors.text} contextMenuHidden={true}
                              style={{...styles.input, flex: 1}} keyboardType='numeric' onChangeText={(input)=>setPrice(input)}/> 
                </View>
              </View>

              <View style={{backgroundColor: colors.white, flex: 1, justifyContent: 'center', padding: 5, marginLeft: 10, borderRadius: 15}}>
                <Text style={{textAlign:'center'}}>Total</Text>
                <Text style={{textAlign:'center', fontWeight: '800', fontSize: 20}}>{Number(qty)*Number(price)}</Text>
              </View>
            </View>
            
          </View> 

          <View style={{flexDirection: 'row', gap: 10, width: '95%', alignSelf: 'center', marginVertical: 20}}>
            <Pressable style={styles.btn} onPress={()=>{addUtang()}}>
              <Text style={{color: colors.white, fontWeight: '500', fontSize: 15, includeFontPadding: false}}>Add</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={()=>setIsVisible(false)}>
              <Text style={{color: colors.white, fontWeight: '500', fontSize: 15, includeFontPadding: false}}>Cancel</Text>
            </Pressable>
          </View>
        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 15,
    includeFontPadding: false,
    fontSize: 13
  },
  modalContainer: {
    width: '100%', 
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  addIcon: {
    position: 'absolute',
    right: 50,
    bottom: 50,
    width: 60,
    height: 60,
  },
  btn: {
    backgroundColor: colors.header,
    padding: 15,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center'
  },
});
