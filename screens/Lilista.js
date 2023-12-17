import { StyleSheet, Text, View } from 'react-native';

export default function Lilista() {
  return (
    <View style={styles.container}>
      <Text>Lilista Page</Text>
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
