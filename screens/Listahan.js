import { StyleSheet, Text, View } from 'react-native';

export default function Listahan() {
  return (
    <View style={styles.container}>
      <Text>Listahan Page</Text>
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
