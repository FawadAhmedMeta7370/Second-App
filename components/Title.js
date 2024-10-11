import { StyleSheet, Text, View } from "react-native";
import color from "./color";

function Title({ children }) {
    return (
        <View style={styles.center}>
            <Text style={styles.Title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    Title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.bordercolor,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#2d8100',
        paddingHorizontal: '2%',
        paddingVertical: '5%',
        marginTop: '10%',
        backgroundColor: '#59ff00',
        maxWidth: '80%',
    }
})

export default Title