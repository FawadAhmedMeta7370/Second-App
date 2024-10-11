import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import fonts from "../components/fonts"
import PrimaryButton from "../components/PrimaryButton"

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootcontainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../images/win.png')}></Image>
            </View>
            <Text style={styles.text}>Phone took <Text style={styles.bold}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.bold}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootcontainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 5,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 50,
        marginHorizontal: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 25,
        color: 'black',
        // fontFamily: fonts.font1,
        textAlign: 'center',
        marginBottom: 25
    },
    bold: {
        fontWeight: 'bold',
        borderBottomColor: 'black',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: 'black'
    }
})

export default GameOverScreen