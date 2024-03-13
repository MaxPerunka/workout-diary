import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 17
    },
    button: {
        margin: 10,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#73d473",
        width: "auto",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        width: 150,
        margin: 10,
    },
    minititle: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: -9,
        fontSize: 11
    },
    View: { 
        flexDirection: 'row', 
        justifyContent: 'space-around' 
    },
    workouts: {
        margin: 5,
        fontSize: 11,
        backgroundColor: "#99d499",
        borderWidth: 1,
        padding: 10
    }
});