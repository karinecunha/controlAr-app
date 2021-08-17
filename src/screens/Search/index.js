import React, { useEffect } from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return(
        <Container>
            <Text>TELA PESQUISAR EM DESENVOLVIMENTO</Text>
        </Container>
    );
}