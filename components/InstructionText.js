import { StyleSheet, Text } from "react-native"
import color from "./color"

function InstructionText({ children }) {
    return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: color.bordercolor
    }
})

export default InstructionText