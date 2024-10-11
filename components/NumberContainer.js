import { StyleSheet, Text, View } from "react-native";
import color from "./color";

function NumberContainer({ children }) {
    return (
        <View style = {styles.continer}>
            <Text style = {styles.numberText}> {children} </Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    continer: {
        borderWidth: 5,
        borderColor: color.bordercolor,
        padding: 25,
        margin: 25,
        marginTop: '15%',
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#59ff00',
    },
    numberText: {
        fontSize: 25,
        color: color.bordercolor,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})