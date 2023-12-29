import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Modal } from 'react-native';
import colors from './colors';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Lista = (props) => {

  const handlePaste = (event) => {
    // Prevent paste behavior
    event.preventDefault();
  };

  const [qty, setQty] = useState(props.quantity);
  const [price, setPrice] = useState(props.price);
  const [item, setItem] = useState(props.item);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("lista.js: ",props.id);
  }, []);

  return (
    <Pressable style={styles.card} onPress={() => setIsVisible(true)}>

      <View style={styles.itemSection}>
        <Text style={styles.item}>{props.item}<Text style={styles.quantity}> ({props.quantity})</Text></Text>
        <Text style={styles.price}>Price: {props.price}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.total}>Total</Text>
        <Text style={{...styles.total, fontWeight: 'bold', fontSize: 18}}>₱{props.quantity * props.price}</Text>
      </View>

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
      
    </Pressable>
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
