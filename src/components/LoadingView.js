import React from 'react';
import { ActivityIndicator,StatusBar, Modal} from 'react-native';
import styled from 'styled-components/native';

const ContainerLoading = styled.View`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index:1;
`;

const LoadingText = styled.Text`
    color: #D5E2E9;
    font-size: 18px;
    padding-top: 20px;
`;

export default(props) => {

    return(
        <Modal
          transparent={true}
          visible={props.visible}
          hardwareAccelerated={true}
          animationType={'fade'}
        >
          <ContainerLoading>
            <StatusBar backgroundColor='#25394A'/>
            <ActivityIndicator size="large" color="#EAAA42" />
            <LoadingText>Aguarde...</LoadingText>
          </ContainerLoading>
        </Modal>
      )
}