import { TextInput, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {doc,db,getFirestore,collection,addDoc,getDocs, deleteDoc} from "../firebase/firebaseConfig";
import colors from '../components/colors';
import { useState } from 'react';
import globalButton from '../components/button';
import { useEffect } from 'react';

export default function Magpapalista({navigation}) {

  const [utang, setUtang] = useState(0);
  const [umutang, setUmutang] = useState('');

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean-up function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array [] means this effect will run once after the initial render

  // Format the date and time without seconds and in MM/DD/YY format
  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const addMangungutang = async() => {
    try {
      const docRef = await addDoc(collection(db, "Listahan"), {
        name: umutang,
        utang: utang,
        lista: []
      });
      console.log("Document written with ID: ", docRef.id, currentDateTime );
      setUmutang("");
      setUtang(0);
      navigation.navigate('Listahan')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Magpapalista</Text>
      <View style={styles.addImage}>
        <Image  source={require('../assets/PlaceHolder.png')} 
                resizeMode='contain'
                style={{width: '95%', height: '95%', alignSelf: 'center', opacity: .5}}/>
        <Image  source={require('../assets/carbon_add-filled.png')} 
                resizeMode='contain' 
                style={{width: 30, 
                        height: 30, 
                        position: 'absolute',
                        right: 10,
                        bottom: 10,
              }}/>
      </View>

      <View style={{}}>
        <Text style={{width: '90%', alignSelf: 'center', fontWeight: 'bold'}}>Name</Text>
        <View style={styles.inputName}>
          <TextInput  placeholder='Enter Name' 
                      style={{textAlign: 'center'}} 
                      onChangeText={(text) => setUmutang(text)}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20, position: 'absolute', alignSelf: 'center', bottom: 50}}>
        <TouchableOpacity style={globalButton.button} onPress={() => {
          addMangungutang()
          }}>
         <Text style={globalButton.buttonText}>ADD PERSON</Text>
        </TouchableOpacity> 
      </View>
      
      
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
  addImage: {
    width: 150,
    height: 150,
    padding: 10, 
    backgroundColor: colors.card,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    gap: 10,
    alignSelf: 'center'
  },
  inputName: {
    backgroundColor: colors.card,
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 15,
  }
});
