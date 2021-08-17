import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   background-color: #003667;
    flex:1;
    justify-content: center;
    align-items: center; 
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 45px;
    background-color: #EAAA42;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 10px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #F5E5CA;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #F5E5CA;
    font-weight: bold;
    margin-left: 5px;
`;

export const SignMessageButtonTextForgotPassword= styled.Text`
    font-size: 16px;
    color: #F5E5CA;
    margin-top:-25px;
    align-self: center;
    font-family: Helvetica;
`;

export const Input = styled.TextInput`
    background-color: #01407A;
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
`;