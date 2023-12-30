import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Modal, TouchableOpacity, Alert } from 'react-native';
import colors from './colors';
import { MaterialIcons } from '@expo/vector-icons'; 
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {doc,db,getFirestore,collection,addDoc,getDocs, setDoc, updateDoc, arrayRemove} from "../firebase/firebaseConfig";

const Lista = (props) => {

  const [qty, setQty] = useState(props.props.quantity);
  const [price, setPrice] = useState(props.props.price);
  const [item, setItem] = useState(props.props.item);
  const [isVisible, setIsVisible] = useState(false);
  const [deleteVisible, setdeleteVisible] = useState(false);

  const deleteUtang = async () => {
    try {
      const documentRef = doc(db, "Listahan", props.id,);
  
      await updateDoc(documentRef, {
        lista: arrayRemove(props.props),
      });

      setIsVisible(false)
  
      console.log(props.id, " Deleted");
    } catch (error) {
      console.error("Error deleting array element: ", props.id ,error);
    }
  };

  useEffect(() => {
    console.log("lista.js: ",props.props);
  }, []);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setIsVisible(true)} onLongPress={()=> setdeleteVisible(!deleteVisible)}>

      <View style={styles.itemSection}>
        <Text style={styles.item}>{props.props.item}<Text style={styles.quantity}> ({props.props.quantity})</Text></Text>
        <Text style={styles.price}>Price: {props.props.price}</Text>
        <Text style={styles.date}>{props.props.date}</Text>
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.total}>Total</Text>
        <Text style={{...styles.total, fontWeight: 'bold', fontSize: 18}}>₱{props.props.quantity * props.props.price}</Text>
      </View>

      {deleteVisible ? 
      <Pressable onPress={()=>{deleteUtang()}} style={{justifyContent: 'center'}}>
        <MaterialIcons name="delete" size={35} color="red" />
      </Pressable> 
      : null
      }
        

      <Modal visible={isVisible} onRequestClose={()=>setIsVisible(false)} animationType='slide' style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        <View style={styles.modalContainer}>
          <Text style={{textAlign:'center', includeFontPadding: false, fontWeight: '800', fontSize: 25, padding: 15}}>Palista</Text>
          <ScrollView>
            <View style={{flexDirection: 'row', width: '100%', backgroundColor: colors.card, 
                          padding: 10, borderRadius: 10, width: '95%', alignSelf: 'center'}}>
              <View style={{flex:5}}>
                <TextInput placeholder='Item' cursorColor={colors.text} style={styles.input} value={item}/> 
                <View style={{flexDirection: 'row', gap: 10, paddingTop: 10}}>
                  <TextInput  placeholder= 'Quantity' cursorColor={colors.text} contextMenuHidden={true} value={qty}
                              style={{...styles.input, flex: 1}} keyboardType='numeric' onChangeText={(input)=>setQty(input)}/> 
                  <TextInput  placeholder= 'Price' cursorColor={colors.text} contextMenuHidden={true} value={price}
                              style={{...styles.input, flex: 1}} keyboardType='numeric' onChangeText={(input)=>setPrice(input)}/> 
                </View>
              </View>

              <View style={{backgroundColor: colors.white, flex: 1, justifyContent: 'center', padding: 5, marginLeft: 10, borderRadius: 15}}>
                <Text style={{textAlign:'center'}}>Total</Text>
                <Text style={{textAlign:'center', fontWeight: '800', fontSize: 20}}>{Number(qty)*Number(price)}</Text>
              </View>
            </View>
            
          </ScrollView> 

          <View style={{flexDirection: 'row', gap: 10, width: '95%', alignSelf: 'center', marginVertical: 20}}>
            <Pressable style={styles.btn}>
              <Text style={{color: colors.white, fontWeight: '500', fontSize: 15, includeFontPadding: false}}>Delete</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={{color: colors.white, fontWeight: '500', fontSize: 15, includeFontPadding: false}}>Save</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={()=>setIsVisible(false)}>
              <Text style={{color: colors.white, fontWeight: '500', fontSize: 15, includeFontPadding: false}}>Cancel</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: colors.card,
    padding: 7,
    paddingLeft: 10,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: colors.header,
    padding: 15,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center'
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
  item: {
    // backgroundColor: 'tomato',
    fontSize: 15,
    fontWeight: 'bold'
  },
  quantity: {
    // backgroundColor: 'yellow',
    fontWeight: 'normal'
  },
  price: {
    // backgroundColor: 'lightblue',
    fontWeight: '300'
  },
  total: {
    textAlign: 'center',
    // backgroundColor: 'white'
  },
  itemSection: {
    flex: 5,
    // backgroundColor: 'lightblue',
  },
  totalSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'lightgreen',
  },
  date: {
    // backgroundColor: 'lightgreen',
    fontWeight: '300',
    fontSize: 12
  },

});

export default Lista;
