import React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const InputArea = styled.View`
    width: 100%;
    height: 45px;
    background-color: #01407A;
    flex-direction: row;
    border-radius: 5px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 25px;
`;

const Input = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #FFF;
    margin-left: 10px;
    background-color: #01407A;
    border-radius: 5px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {

    const getFlexDirection = () => {
        if (icon && iconPosition) {
          if (iconPosition === 'left') {
            return 'row';
          } else if (iconPosition === 'right') {
            return 'row-reverse';
          }
        }
      };

    return(
        <InputArea>
            <IconSvg width="24" heigth="24" fill='#fff'/>
            <Input 
                placeholder = {placeholder}
                placeholderTextColor = "#FFF"
                value = {value}
                onChangeText = {onChangeText}
            />
        </InputArea>
    );
}