import { StyleSheet} from 'react-native';
import colors from './colors';

const globalButton = StyleSheet.create({
    button: {
        backgroundColor: colors.header,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
      },
});

export default globalButton;