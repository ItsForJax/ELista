import { TextInput, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../components/colors';
import globalButton from '../components/button';

export default function Magpapalista({navigation}) {
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
          <TextInput placeholder='Enter Name' style={{textAlign: 'center'}}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20, position: 'absolute', alignSelf: 'center', bottom: 50}}>
        <TouchableOpacity style={globalButton.button} onPress={() => {
          navigation.navigate('Listahan')
          //add snackbar here
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
