import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login/Index';
import Home from './pages/Home/Index';
import Funcionario from './pages/Funcionario/Index';
import MeuPerfil from './pages/MeuPerfil/Index'
import ListarFuncionario from './pages/ListarFuncionarios/Index';
import CadastrarFuncionario from './pages/CadastrarFuncionario/Index';
import VerFuncionario from './pages/VerFuncionario/Index';
import Assistido from './pages/Assistido/Index';
import ListarAssistidos from './pages/ListarAssistidos/Index'
import VerAssistido from './pages/VerAssistido/Index';
import CadastrarAssistido from './pages/CadastrarAssistido/Index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Assistido" component={Assistido} />
        <Stack.Screen name="Funcionario" component={Funcionario} />
        <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
        <Stack.Screen name="ListarFuncionario" component={ListarFuncionario} />
        <Stack.Screen name="ListarAssistidos" component={ListarAssistidos} />
        <Stack.Screen name="CadastrarFuncionario" component={CadastrarFuncionario} />
        <Stack.Screen name="CadastrarAssistido" component={CadastrarAssistido} />
        <Stack.Screen name="VerFuncionario" component={VerFuncionario} />
        <Stack.Screen name="VerAssistido" component={VerAssistido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}