import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #003667;
    flex:1;
`;
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 1%;
    padding-right: 3%;
`;
export const TextHead = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #F5E5CA;
`;
export const StateAir = styled.View`
    padding: 3px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const CurrentState = styled.View`
    flex-direction: row;
`;
export const Separator = styled.Text`
    color: #515151;
    font-size:20px;
    margin-bottom: 3px;
`;
export const CurrentStateText = styled.Text`
    color: #F5E5CA;
    font-size: 20px;
    font-weight: bold;
    margin-top:7px;
`;
export const CurrentStateBox = styled.View`
    background-color: #F5E5CA;
    width: 95%;
    height: 200px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const StatesAir = styled.View`
    flex-direction: row;
    align-self: flex-start;
    height: 100%;
`;
export const StateView = styled.View`
    background-color: #308B33;
    height: 100%;
    width: 7px;
`;
export const StateViewInvisible = styled.View`
    background-color: transparent;
    height: 100%;
    width: 7px;
`;
export const StateText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #003667;
    padding-left: 3px;
`;
export const StateTextInvisible = styled.Text`
    color: #F5E5CA;
    padding-left: 3px;
`;
export const TemperatureAirText = styled.Text`
    font-size: 40px;
    color: #003667;
`;
export const RadioButtonContainer = styled.View`
    flex-direction: row;
    width: 95%;
    justify-content: space-between;
    margin-top: 5%;
`;
export const ButtonBox = styled.TouchableOpacity`
    background-color: #F5E5CA;
    width: 80%;
    height: 80px;
    align-items: center;
    justify-content: center;
`;
export const ButtonBoxText = styled.Text`
    color: #003667;
    font-size: 17px;
`;
export const InsertTemperatureContainer = styled.View`
    width: 80%;
    height: 80px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const InsertTemperatureState = styled.View`
    background-color: #F5E5CA;
    flex:3;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
`;
export const InsertTemperatureStateText= styled.Text`
    font-size: 25px;
    color: #003667;
`;
export const InsertTemperatureButtonMaisMenos = styled.TouchableOpacity`
    flex:3;
    align-items: center;
    height: 100%;
    justify-content: center;
    background-color: #F5E5CA;
`;
export const InsertTemperatureButtonMaisText= styled.Text`
    font-size: 50px;
    color: #003667;
`;
export const InsertTemperatureButtonMenosText= styled.Text`
    font-size: 50px;
    color: #003667;
`;
export const ButtonSendComandContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex:2;
`;
export const ButtonSendComand = styled.TouchableOpacity`
    width: 80%;
    background-color: #EAAA42;
    align-items: center;
    justify-content: center;
    height: 45px;
    border-radius: 5px;
`;
export const ButtonSendComandText = styled.Text`
    font-size: 17px;
    color: #01407A;
    font-weight: bold;
`;


