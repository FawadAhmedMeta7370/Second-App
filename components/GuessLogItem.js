import { StyleSheet, Text, View } from "react-native"

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.ListItems}>
            <Text style={styles.text}>{roundNumber}.</Text>
            <Text style={styles.text}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ListItems: {
        borderWidth: 5,
        borderColor: '#2d8100',
        borderRadius: 15,
        padding: 12.5,
        marginTop: '5%',
        backgroundColor: '#59ff00',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        elevation: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2d8100'
    }
})

export default GuessLogItem