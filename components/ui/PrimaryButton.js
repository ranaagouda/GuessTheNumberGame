import{ View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

function PrimaryButton({children, onPress}) {
   return (
        <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({ pressed }) => 
        pressed
         ? [styles.buttonInnerContainer, styles.pressed]
         : styles.buttonInnerContainer
        }
            onPress={onPress} android_ripple={{color: colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View> 
        )
      };
    
        
    


 export default PrimaryButton ;

 const styles= StyleSheet.create({
    buttonOuterContainer:{
        overflow: 'hidden',
        margin:4, 
        borderRadius: 28,
    },
    buttonInnerContainer: {
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        elevation: 2,
        paddingHorizontal: 16,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed:{
        opacity: 0.75,
    }

 });