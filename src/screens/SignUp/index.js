import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container,
         InputArea,
         CustomButton, 
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold,
         SignMessageButtonTextForgotPassword
} from './styles';

import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import Logo from '../../assets/ControlarLogo.svg'
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMessageButtonSignUpClick = () =>{
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleSignUpClick = async () =>{
        if(name != '' && email != '' && password != ''){
            let json = await Api.signUp(name, email, password);
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
                alert("Erro:" + json.error);
            }
        } else{
            alert('Preencha os campos');
        }
    }

    return(
        <Container>
            <Logo width="100%" height="160"/>

            <InputArea>
                <SignInput 
                    IconSvg = {PersonIcon}
                    placeholder = "Digite seu nome"
                    value = {name}
                    onChangeText = {t=>setName(t)}
                />
                <SignInput 
                    IconSvg = {EmailIcon}
                    placeholder = "Digite seu e-mail"
                    value = {email}
                    onChangeText = {t=>setEmail(t)}
                />
                <SignInput 
                    IconSvg = {LockIcon}
                    placeholder = "Digite sua senha"
                    value = {password}
                    onChangeText = {t=>setPassword(t)}
                    secureTextEntry={true}
                />

                <CustomButton onPress = {handleSignUpClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress = {handleMessageButtonSignUpClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}