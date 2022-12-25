import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window')
const wi = sc.width / 3
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
    }, containerN: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#263159'
    },
    appBr: {
        backgroundColor: '#CBEDD5',
    },
    appBrN: { backgroundColor: '#495579', textDecorationColor: 'red', color: 'red' },
    button: {
        backgroundColor: '#439A97',
        width: wi,
        borderRadius: wi,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 6
    },
    buttonN: {
        backgroundColor: '#439A97',
        width: wi,
        borderRadius: wi,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        margin: 6
    },
    buttontxt: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: "center",
    },
    textinput: {
        width: '90%',
        margin: 20,
        borderRadius: 10,
        padding: 20, marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    textinputN: {
        width: '90%',
        margin: 20,
        borderRadius: 10,
        padding: 20, marginBottom: 10,
        borderColor: '#FFFBEB',
        backgroundColor: '#FFFBEB',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    apT: {
        color: 'black',
        fontWeight: 'bold'
    },
    apTN: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationColor: 'white'
    },
    simpletext: {
        width: sc.width,
        fontSize: 12,
        fontWeight: 'bold',
    },
    createPost: {
        borderRadius: 10,
        width: sc.width / 1.1,
        height: sc.height / 3,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 6,
    }
})
export default styles;