import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ExpandIcon from '../assets/expand.svg';

const Modal = styled.Modal``;
const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;
const ModalBody = styled.View`
    background-color: #F5CF90;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px 20px 40px 20px;
`;
const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;
const ModalItem = styled.View`
    background-color: #F5E5CA;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
    height: 50px;
`;
const FinishButton = styled.TouchableOpacity`
    background-color: #01407A;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
const FinishButtonText = styled.Text`
    font-size: 17px;
    font-weight: bold; 
    color: #FFF;
`;

export default ({ show, setShow }) => {
    const navigation = useNavigation();

    const handleCloseButton = () => {    
        setShow(false);
    }
    const handleFinishClick = () =>{
        setShow(false);
    }

    <Modal
        transparent = {true}
        visible = {true}
        animationType = "alide"
    >
        <ModalArea>
            <ModalBody>
                <CloseButton onPress={handleCloseButton}>
                    <ExpandIcon width="40" height="40" fill="#003667"/>
                </CloseButton>
            </ModalBody>

            <ModalItem>

            </ModalItem>

            <FinishButton onPress={handleFinishClick}>
                <FinishButtonText>Finalizar Agendamento</FinishButtonText>
            </FinishButton>

        </ModalArea>
    </Modal>
}
