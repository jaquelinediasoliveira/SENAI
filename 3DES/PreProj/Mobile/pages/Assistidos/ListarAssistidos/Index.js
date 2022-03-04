import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import global from "../../Global/Style"

export default function ListarAssistidos({navigation}){
    return(
        <View style={global.body}>
            <Image style={global.image} source={require("../assets/logo.png")}/>
            <View style={global.scrollView}>
                <ScrollView>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={global.cardInfo} onPress={() => {navigation.navigate("VerAssistido")}}>
                        <Image source={require("../assets/user.png")} style={global.imageUser}/>
                        <View>
                            <Text style={global.textInfo}>Nome</Text>
                            <Text style={global.textInfo}>Documento</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}