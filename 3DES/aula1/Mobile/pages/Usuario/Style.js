import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    dados:{
        marginTop: "10%",
    },
    editar: {
        marginTop: "5%",
        display: "flex",
        marginLeft: "70%",
        flexDirection: "row"
    },
    input:{
        width: "75%",
        height: "10%",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: "5%"
    },
    info:{
        display: "flex",
        width: "70%",
        height: "80%",
        alignItems: "center",
    },
    meusAlertas:{
        width: "100%",
        height: "50%",
        backgroundColor:"red",
        marginTop: "5%"
    }
})