import { StyleSheet, Text, View } from 'react-native';

export default function Utang({route, navigation}) {
  return (
    <View style={styles.container}>
        <Text>{route.params.name}</Text>
        <Text>{route.params.utang}</Text>
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
});