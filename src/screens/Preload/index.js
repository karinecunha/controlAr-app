import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import { StatusBar, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api';

import Logo from '../../assets/ControlarLogo.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                let json = await Api.checkToken(token);
                console.log(json);
                if(json.token){
                    await AsyncStorage.setItem('token', json.token);

                    userDispatch({
                        type: 'setInfoUser',
                        payload: {
                        id: json.data.codusuario,
                        type: json.data.tipo,
                        name: json.data.nome,
                        email: json.data.email
                        }
                    });

                    navigation.reset({
                        routes: [{
                            name: 'SignIn'
                        }]
                    });
                }else{
                    navigation.navigate('SignIn');
                }
                
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    },[]);

    return(
        <Container>
            <StatusBar backgroundColor="#003667" />
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFF"/>
        </Container>
    );
}