import { StyleSheet, View } from "react-native";

function Card({ children }) {
    return <View style={styles.Card}>{children}</View>
}

const styles = StyleSheet.create({
    Card: {
        marginTop: '10%',
        marginHorizontal: '10%',
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#59ff00',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        borderWidth: 5,
        borderColor: '#2d8100'
    }
})

export default Card