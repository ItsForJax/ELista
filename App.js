import { StyleSheet, Text, View } from 'react-native';
import Screens from './screens/Screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Screens.Listahan/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
