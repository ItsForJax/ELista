import { StyleSheet, Text, View } from 'react-native';
import Screens from './screens/Screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Screens.Lilista/>
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
