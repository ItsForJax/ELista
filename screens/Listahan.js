import { TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../components/colors';

export default function Listahan({navigation}) {

  const data = [
    { id: '1', name: 'Erickson', utang: 119.99 },
    { id: '2', name: 'Kaloy', utang: 124.99 },
    { id: '3', name: 'Ronel', utang: 2334.99 },
    { id: '4', name: 'Alice', utang: 50.00 },
    { id: '5', name: 'Bob', utang: 75.50 },
    { id: '6', name: 'Charlie', utang: 100.00 },
    { id: '7', name: 'David', utang: 200.99 },
    { id: '8', name: 'Eva', utang: 15.49 },
    { id: '9', name: 'Frank', utang: 88.75 },
    { id: '10', name: 'Grace', utang: 42.25 },
    { id: '11', name: 'Henry', utang: 19.99 },
    { id: '12', name: 'Ivy', utang: 33.50 },
    { id: '13', name: 'Jack', utang: 55.00 },
    { id: '14', name: 'Kathy', utang: 124.00 },
    { id: '15', name: 'Leo', utang: 99.99 },
    { id: '16', name: 'Mia', utang: 200.50 },
    { id: '17', name: 'Nathan', utang: 75.25 },
    { id: '18', name: 'Olivia', utang: 150.00 },
    { id: '19', name: 'Peter', utang: 30.00 },
    { id: '20', name: 'Quinn', utang: 89.99 },
  ];
  
  const handleAddToListahan = () => {
    navigation.navigate('Magpapalista')
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.rowItems} onPress={()=> navigation.navigate('Utang', item)}>
      <Image source={require('../assets/PlaceHolder.png')} style={{ height: 40, width: 40 }} resizeMode='contain' />
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 10 }}>{item.utang}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listahan</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{width: '100%'}}
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
  rowItems: {
    width: '95%',
    padding: 10, 
    backgroundColor: colors.card,
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center'
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
