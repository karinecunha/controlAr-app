import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #003667;
`;

export const Weather = styled.View`
    background-color: #F5CF90;
    /* xheight: 240px; */
    flex:1;
    align-items: center;
`;

export const PageBody = styled.View`
    background-color: #003667;
    border-top-left-radius: 50px;
    margin-top:-50px;
    align-items: center;
    flex:3;
`;

export const BuildingsArea = styled.View`
    background-color: transparent;
    flex:5;
    align-items: center;
    width: 100%;
    padding-top: 5%;
`;

export const ButtonsArea = styled.View`
    background-color: #003667;
    flex:1;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ListData = styled.FlatList`
    width:100%;
`;

export const BuildingsText = styled.Text`
    font-size: 18px;
    color: #B9B9B9;
`;

export const ContainerListBuildings = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SeparatorBuildings = styled.Text`
    color: #EAAA42;
    margin-top: -10px;
    padding-bottom: 3%;
`;

export const RoomButton = styled.TouchableOpacity`
    background-color: #F5E5CA;
    width: 20%;
    border-width: 1px;
    border-color: #515151;
    margin-left: 10%;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 3%;
    height: 40px;
    flex-direction: row;
`;

export const TextRoomButton = styled.Text`
    font-size: 16px;
    color: #003667;
    font-weight: bold;
    text-align: right;
`;

export const RoomsContainer = styled.View`
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
`;

export const StateAirContainer = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
`;

export const StateAirOn = styled.View`
    height:100%;
    background-color: #308B33;
    width: 3px;
    margin-right:5%;
`;

export const StateAirOff = styled.View`
    height:100%;
    background-color: #CE1313;
    width: 3px;
    margin-right:5%;
`;

export const StateAirInvisible = styled.View`
    height:100%;
    background-color: transparent;
    margin-right:5%;
`;
    
export const EnableAllButton = styled.TouchableOpacity`
    background-color: #F5CF90;
    height: 35px;
    justify-content:center;
    align-items:center;
    width: 40%;
    border-radius: 5px;
`;

export const DisableAllButton = styled.TouchableOpacity`
    background-color: #F5CF90;
    height: 35px;
    justify-content:center;
    align-items:center;
    width: 40%;
    border-radius: 5px;
;`;

export const TextButtonHome = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #003667;
`;
