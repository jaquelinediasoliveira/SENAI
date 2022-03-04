import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';

import global from "../../Global/Style"

export default function VerAssistido({navigation}){
    return(
        <View style={global.body}>
            <Image style={global.image} source={require("../assets/logo.png")}/>
            <View style={css.images}>
                <View>
                    <Image source={require("../assets/user.png")} style={global.imageUser}/>
                    <Text style={css.title}>Antes</Text>
                </View>
                <View>
                    <Image source={require("../assets/user.png")} style={global.imageUser}/>
                    <Text style={css.title}>Depois</Text>
                </View>
            </View>
            <View style={css.scrollView}>
                <ScrollView>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Nome:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Nome social:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>RG:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>CPF:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Nascimento:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Naturalidade:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Sexo:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Estado civíl:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Cartão cidadão:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Cartão do SUS:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <Text style={css.title}>Dados do Familiar</Text>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Nome:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Parentesco:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Telefone:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>E-mail:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <View style={global.info}>
                        <Text style={global.textInfo}>Endereço:</Text>
                        <Text style={global.textInfo}>Info</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={css.button}>Adicionar observações</Text>
                    </TouchableOpacity>
                    <Text style={css.title}>Observações</Text>
                    {/* <Text style={css.title}>Observações</Text>
                    <TextInput multiline
                                numberOfLines={5}
                                maxLength={20000}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                style={css.textArea}></TextInput> */}
                </ScrollView>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    images: {
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    title: {
        fontWeight: 'bold',
        fontSize:18,
        alignSelf: 'center',
        marginTop: 15
    },
    textArea: {
        padding: 10,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15
    },
    scrollView: {
        width: "100%",
        height: 425
    },
    button:{
        color:"blue",
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    }
})