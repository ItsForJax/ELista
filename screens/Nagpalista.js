import { StyleSheet, Text, View } from 'react-native';

export default function Nagpalista() {
  return (
    <View style={styles.container}>
      <Text>Nagpalista Page</Text>
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
