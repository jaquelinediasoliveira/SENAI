import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,15, .80)"
    },
    card: {
        width: "65%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    input: {
        width: "50%",
        height: "10%",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: "5%"
    },
    login:{
        backgroundColor: "lightgray",
        borderRadius: 5,
        width: 70,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%"
    }
})