import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Magpapalista() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Magpapalista Page</Text>
    </SafeAreaView>
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
