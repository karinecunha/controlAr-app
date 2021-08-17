import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
         InputArea,
         CustomButton, 
         CustomButtonText
} from './styles';

import SignInput from '../../components/SignInput';

import Logo from '../../assets/ControlarLogo.svg'
import LockIcon from '../../assets/email.svg';

export default () => {

    const navigation = useNavigation();

    const [code, setCode] = useState('');

    const handleCheckCodeClick = () =>{
        navigation.navigate('SignIn');
    }

    return(
        <Container>
            <Logo width="100%" height="160"/>

            <InputArea>
            <SignInput 
                    IconSvg = {LockIcon}
                    placeholder = "Digite o código"
                    value = {code}
                    onChangeText = {t=>setCode(t)}
                    password = {true}
                />

                <CustomButton onPress = {handleCheckCodeClick}>
                    <CustomButtonText>ENVIAR</CustomButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    );
}