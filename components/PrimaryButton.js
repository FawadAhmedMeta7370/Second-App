import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                onPress = {onPress}
                style={styles.buttonInnerContainer}
                android_ripple={{ color: '#14c100' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 15,
        margin: 5,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'black'
    },
    buttonInnerContainer: {
        backgroundColor: '#59ff00',
        // paddingVertical: 15,
        // paddingHorizontal: 25,
        elevation: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#2d8100',
        padding: 10,
        fontWeight: 'bold'
    }
})

export default PrimaryButton