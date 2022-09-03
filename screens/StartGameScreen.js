import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/Colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";

function StartGameScreen(onPickNumber) {
    const [eneterdNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);   
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(eneterdNumber);

        if (isNaN(chosenNumber) || chosenNumber<= 0 || chosenNumber>99) {
            Alert.alert(
                'Invalid Number!','Number has to be between 1 and 99',[{ text: 'okay', style: "destructive", onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.rootContainer}>
            <Title>Guess my Number</Title>
            <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput 
             style={styles.numberInput}
             maxLength={2}
             keyboardType ="number-pad"
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText = {numberInputHandler}
             value ={eneterdNumber}
             />
             <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Resest</PrimaryButton> 
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
             </View>
             </Card>
        </View>
       
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
rootcontainer: {
flex:1,
marginTop: 100,
alignItems: 'center'
},
 numberInput: {
    height:50,
    width: 50,
    fontSize :32,
    borderBottomColor : colors.accent500,
    color: colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
},
buttonsContainer:{
 flexDirection: "row",   
},
buttonContainer:{
    flex:1,   
},
});