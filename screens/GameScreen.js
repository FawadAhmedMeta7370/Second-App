import { Alert, StyleSheet, FlatList, Text, View } from "react-native"
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from "../components/Card";
import Title from "../components/Title"
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/NumberContainer";
import GuessLogItem from "../components/GuessLogItem";

function generateRandomNBetween(min, max, exclude) {

    rndNum = Math.floor(Math.random() * (max - min) + min)
    if (rndNum == exclude) {
        return generateRandomNBetween(min, max, exclude)
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomNBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [rounds, setRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuessNumber(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!", "You know that you are giving wrong direction.", [{ text: "Direct Again", style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomNBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundListLength = rounds.length

    return (
        <View style={styles.screen}>
            <Title>Opponents Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.text}>Higher or Lower</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessNumber.bind(this, 'lower')}>
                            <Ionicons name="remove-circle-outline" size={25} color="#2d8100" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessNumber.bind(this, 'higher')}>
                            <Ionicons name="add-circle-outline" size={25} color="#2d8100" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.flatlistcontainer}>
                <FlatList
                    data={rounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50,
        marginVertical: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10
    },
    text: {
        fontSize: 20
    },
    flatlistcontainer: {
        flex: 1,
        marginTop: '10%'
    }
})

export default GameScreen