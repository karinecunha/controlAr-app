import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
         InputArea,
         CustomButton, 
         CustomButtonText
} from './styles';

import SignInput from '../../components/SignInput';

import Logo from '../../assets/ControlarLogo.svg'
import EmailIcon from '../../assets/email.svg';

export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const handleForgoutPasswordClick = () =>{
        navigation.navigate('CheckCode');
    }

    return(
        <Container>
            <Logo width="100%" height="160"/>

            <InputArea>
                <SignInput 
                    IconSvg = {EmailIcon}
                    placeholder = "Digite seu e-mail"
                    value = {email}
                    onChangeText = {t=>setEmail(t)}
                />

                <CustomButton onPress = {handleForgoutPasswordClick}>
                    <CustomButtonText>ENVIAR</CustomButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    );
}