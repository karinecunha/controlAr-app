import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container,
         InputArea,
         CustomButton, 
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold,
         SignMessageButtonTextForgotPassword,
         Input
} from './styles';

import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import Logo from '../../assets/ControlarLogo.svg'
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const handleMessageButtonSignUpClick = () =>{
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    const handleMessageButtonForgotPasswordClick = () =>{
        navigation.navigate('ForgotPassword');
    }

    const handleSignInClick = async () =>{
        if(email != '' && password != ''){

            let json = await Api.signIn(email, password);
            if(json.token){
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setInfoUser',
                    payload: {
                       id: json.data.codusuario,
                       type: json.data.tipo,
                       name: json.data.nome
                    }
                });

                navigation.reset({
                    routes: [{
                        name: 'Home'
                    }]
                });
            }else {
                alert('Email e/ou senha inválidos!')
            }
        }else {
            alert('Preencha os campos');
        }
    }

    return(
        <>
            <StatusBar backgroundColor = "#003667"/>
            <Container>
                <Logo width="100%" height="160"/>

                <InputArea>
                    <SignInput 
                        IconSvg = {EmailIcon}
                        placeholder = "Digite seu e-mail"
                        value = {email}
                        onChangeText = {t=>setEmail(t)}
                        keyboardType = "email-address"
                    />
                    <SignInput 
                        IconSvg = {LockIcon}
                        placeholder = "Digite sua senha"
                        value = {password}
                        onChangeText = {t=>setPassword(t)}
                        secureTextEntry={true}
                    />

                    <CustomButton onPress = {handleSignInClick}>
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustomButton>
                    <SignMessageButton onPress = {handleMessageButtonForgotPasswordClick}>
                        <SignMessageButtonTextForgotPassword>Esqueci minha senha</SignMessageButtonTextForgotPassword>
                    </SignMessageButton>
                </InputArea>

                <SignMessageButton onPress = {handleMessageButtonSignUpClick}>
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </Container>
        </>
    );
}