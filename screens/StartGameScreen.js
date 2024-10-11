import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

import Card from '../components/Card'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'
import InstructionText from '../components/InstructionText'
import color from '../components/color'

function StartGameScreen({ onPickedNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
            Alert.alert("Invalid Number!", "Number should be between 1 and 99.",
                [{ text: "OK", style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onPickedNumber(chosenNumber)
    }

    return (
        <View style={styles.screen}>
            <Title> Guess The Number Game </Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        fontSize: 25,
        width: '15%',
        height: '30%',
        color: color.bordercolor,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: color.bordercolor,
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    button: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10
    }
})

export default StartGameScreen