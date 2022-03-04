import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, ToastAndroid, TouchableOpacity, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import md5 from 'md5';

import css from "./Style"

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [imagem, setImagem] = useState(require('../../assets/MicrosoftTeams-image.png'));

    const [cadastrando, setCadastrando] = useState("");

    useEffect(async() => {
        if(await AsyncStorage.getItem('userdata') !== null) {
            navigation.navigate("Principal");
        }
    }, [])

    const autenticar = () => {
        let usuario = {
            email: email,
            senha: md5(senha),
        }

        fetch('http://192.168.183.1:3000/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(usuario),
        })
        .then(resp => { return resp.json() })
        .then(async data => {
            if(data.length > 0) {
                await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate('Principal');
            }else {
                ToastAndroid.show('Email ou Senha Invalidos', ToastAndroid.SHORT);
            }
        })
    }

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

    const habilitarCadastro = () => {
        setCadastrando(true);
    }

    const cadastrar = () => {
        let usuario = {
            email: email,
            senha: md5(senha),
            foto: (imagem.uri !== undefined) ? imagem.uri : "",
        }

        fetch('http://192.168.183.1:3000/usuario', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        .then(resp => {return resp.json()})
        .then(async data => {
            if(data.id === undefined) {
                ToastAndroid.show('falha ao cadastrar', ToastAndroid.SHORT);
                setCadastrando(false);
            } else {
                await AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("Principal");
            }
        });
    }

    return(
        <View style={css.body}>
            <View style={css.card}>
                <Image source={imagem} style={{width: 128, height: 128, borderRadius: 15}} />
                <TextInput value={email} onChangeText={setEmail} placeholder="Email..." style={css.input}/>
                <TextInput value={senha} onChangeText={setSenha} placeholder="Senha..." style={css.input}/>
                {
                    (cadastrando) ?
                        <TouchableOpacity onPress={() => { selecionarImagem() }}>
                            <Image source={require('../../assets/camera.png')} style={{width: 32, height: 32, marginTop: "5%"}} />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={() => {habilitarCadastro()}}>
                            <Text>Cadastrar-se</Text>
                        </TouchableOpacity>
                    }
                <TouchableOpacity onPress={() => { if(!cadastrando) autenticar(); else cadastrar();}} style={css.login}>
                    <Text>{(cadastrando ? "Cadastrar" : "Login")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}