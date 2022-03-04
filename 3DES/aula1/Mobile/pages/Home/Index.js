import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { View, ToastAndroid, Image, Modal, TouchableOpacity, Text } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import * as Location from 'expo-location';

import css from './Style'

export default function Home(){
    const tipos = [
        require('../../assets/4.png'), 
        require('../../assets/5.png'), 
        require('../../assets/6.png'),
        require('../../assets/7.png'),
        require('../../assets/8.png'),
        require('../../assets/9.png')
    ]

    const [alertas, setAlertas] = useState([]);
    const [coordAlerta, setCoordAlerta] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [valuePicker, setValuePicker] = useState()
    const[marcadores, setMarcadores] = useState([]);
    const [coord, setCoord] =useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })

    useEffect(async ()=> {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            ToastAndroid.show("Localização não permitida", ToastAndroid.SHORT)
          } else {
            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation});
          console.log(location);
          setCoord({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
          })

          let posi = {
              coordenadas: location.coords.latitude + "," + location.coords.longitude,
              alertum:{
                tipo: "marker",
                descricao: "Minha Localização"
              },
              image: require(`../../assets/location.png`)
          }

          let arr = [];

          arr.push(posi);

          setMarcadores(arr);

          carregarAlertas();

          listarAlertas();
        }
    }, []);

    const listarAlertas = () => {
        fetch('http://10.87.207.2:3000/alerta')
        .then(resp => { return resp.json()})
        .then(data => {
            setAlertas(data);
        })
    }

    const carregarAlertas = () => {
        fetch('http://192.168.183.1:3000/localizacao')
        .then(res => {return res.json()})
        .then(data => {
            let tempArr = marcadores;
            data.forEach(item => {
                item.image = tipos[item.alertum.id];
                tempArr.push(item);
            })
            setMarcadores(tempArr);
        })
    }

    const cadastrarAlerta = async () => {
        let idUser = JSON.parse(await AsyncStorage.getItem('userdata')).id;
        let data = {
            coordenadas: coordAlerta,
            id_user: idUser,
            id_alerta: valuePicker,
            ativo: true,
        }

        fetch('http://10.87.207.2:3000/localizacao', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(resp => { return resp.json()})
        .then(data => {
            setShowModal(false);
        })
    }

    const sebastiao = (e) => {
        let coord = e.nativeEvent.coordinate.latitude + "," + e.nativeEvent.coordinate.longitude;

        setCoordAlerta(coord);

        setShowModal(true);
    }

    return(
        <View style={css.body}>
            <MapView style={css.map} region={
                    {   
                        ...coord,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    }}
                    onPress={sebastiao}
            >
                    {
                        marcadores.map((marcador,index) => {
                            let loc = marcador.coordenadas.split(",");
                            return(
                                <Marker key={index} coordinate={{latitude: Number(loc[0]), longitude: Number(loc[1])}} title={marcador.alertum.tipo} description={""}>
                                    <Image source={marcador.image} style={{width:35, height:35}}/>
                                </Marker>
                            )
                        })
                    }
            </MapView>
            <Modal visible={showModal}>
                <Picker selectedValue={valuePicker} onValueChange={(itemValue, itemIndex) =>
                        setValuePicker(itemValue)
                    }>
                    { 
                        alertas.map((alerta, index) => {
                            return(
                                <Picker.Item label={alerta.tipo} value={alerta.id} key={index} />
                            )
                        })
                    }
                </Picker>
                <TouchableOpacity onPress={() => cadastrarAlerta()}>
                    <Text>Cadastrar alerta</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}