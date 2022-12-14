import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

function Title(children) {
 return <Text style={styles.title}>{children}</Text>

}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily:'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        padding: 12,
        borderColor: 'white'
    },
});
