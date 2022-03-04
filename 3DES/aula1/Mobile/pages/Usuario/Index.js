import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import css from './Style'
import md5 from 'md5';
import * as ImagePicker from 'expo-image-picker';

import { AntDesign } from '@expo/vector-icons';

export default function Usuario(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [imagem, setImagem] = useState(require('../../assets/MicrosoftTeams-image.png'));
    const [editando, setEditando] = useState("");

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.cancelled && result.base64.length < 59500) {
            setImagem({
                uri: 'data:image/jpeg;base64,' + result.base64,
            })
        } else if(!result.cancelled) {
            ToastAndroid.show('Selecione uma imagem menor', ToastAndroid.SHORT);
        }
    }

    const comecarEditar = () => {
        setEditando(true);
    }

    const cancelarEdicao = () => {
        setEditando(false);
    }


    useEffect(async () => {
        pegarDados();
    })

    const pegarDados = async () => {
        let info = [];

        const dados = JSON.parse(await AsyncStorage.getItem('userdata'));
        console.log(dados)
        info.push(dados)

        info.forEach(data => {
            setEmail(data.email)
        })
    }

    const editarDados = async () => {
        let usuario={
            email: "",
            senha: "",
            foto: ""
        }
        const idUser = JSON.parse(await AsyncStorage.getItem('userdata')).id;

        fetch("http://192.168.183.1:3000/usuario/"+idUser, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        .then(resp => {return resp.text()})
        .then(data => {
            console.log(data)
            console.log("oi")
        })
    }
    return(
        <View style={css.body}>
            <Image source={imagem} style={{width: 128, height: 128, borderRadius: 15, marginTop: '15%'}} />
            {
                (editando) ?
                    <View style={css.info}>
                        <TouchableOpacity onPress={() => { selecionarImagem() }}>
                            <Image source={require('../../assets/camera.png')} style={{width: 32, height: 32, marginTop: "5%"}} />
                        </TouchableOpacity>
                        <TextInput placeholder="Email..." style={css.input}/>
                        <TextInput placeholder="Senha..." style={css.input}/>
                        <TouchableOpacity>
                            <Text style={{fontWeight: 'bold'}} onPress={() => {editarDados()}}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontWeight: 'bold'}} onPress={() => {cancelarEdicao()}}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={css.info}>
                        <Text style={css.dados}>{email}</Text>
                        <TouchableOpacity style={css.editar} onPress={() => {comecarEditar()}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Editar</Text>
                            <AntDesign name="edit" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={css.meusAlertas}></View>
                    </View>
                        
            }
        </View>
    );
}