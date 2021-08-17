import React, { useState, useEffect } from 'react';
import {Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { Container,
         Weather,
         PageBody,
         BuildingsArea,
         ButtonsArea,
         ListData,
         BuildingsText,
         ContainerListBuildings,
         SeparatorBuildings,
         RoomButton,
         RoomsContainer,
         TextRoomButton,
         StateAirContainer,
         StateAirOn,
         StateAirOff,
         StateAirInvisible,
         DisableAllButton,
         EnableAllButton,
         TextButtonHome
} from './styles';

import LoadingView from '../../components/LoadingView';
import ScheduleModal from '../../components/ScheduleModal';
import WeatherIcon from '../../assets/wather.svg';

import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [temperature, setTemperature] = useState('-');
    const [city, setCity] = useState('-');
    const [description, setDescription] = useState('-');

    useEffect(() =>{
        getRooms();
        getTemperature();
      }, [])
  
      const getRooms = async() => { 
        setIsLoading(true);
        const token = await AsyncStorage.getItem('token');
        let json = await Api.getRoomsInfo(token);
        setData(json);
        console.log(json);
        setIsLoading(false);
      }
      const getPosition = async () => {
        return new Promise((resolve, reject) => 
            Geolocation.getCurrentPosition(resolve, reject),
        );
      };
      const getTemperature = async () => {
          const position = await getPosition();
          const response = await Api.getTemperature(position.coords.latitude, position.coords.longitude);
          setTemperature(response.results.temp);
          setCity(response.results.city);
          setDescription(response.results.description);
      }

    return(
        <>
            <LoadingView visible={isLoading}/>
            <StatusBar backgroundColor = "#F5CF90"/>
            <Container>
                <Weather>
                    <View style ={{paddingTop: '5%', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#515151'}}>{city}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                            <View style={{alignItems: 'center', padding: 5}}>
                                <WeatherIcon />
                                <Text style={{paddingRight:10,fontSize: 12, fontWeight: '100', color: '#515151', paddingTop: 3}}>{description}</Text>
                            </View>
                            <Text style ={{fontSize: 40, color: '#003667'}}>{temperature}°C</Text>
                        </View>
                    </View>
                </Weather>

                <PageBody>
                    <BuildingsArea>
                        {data != null ? 
                        <ListData
                            data={data.predios}
                            keyExtractor={(i)=>{return i.id}}
                            renderItem = {({ item }) => {
                                return(
                                    <ContainerListBuildings>
                                        <BuildingsText> Prédio {item.num}</BuildingsText>
                                        <SeparatorBuildings>______</SeparatorBuildings>

                                        <RoomsContainer>
                                            {item.salas.map((rooms, index) => {
                                                return(
                                                    <RoomButton key={index} onPress={()=>{navigation.navigate('Control')}}>
                                                        <StateAirContainer>
                                                            {rooms.id_ar.map((idAir, indexAir) => {
                                                                return (idAir.comando === 'OFF' || idAir.comando === null) ?
                                                                <StateAirOff key={indexAir}></StateAirOff>
                                                                : <StateAirOn key={indexAir}></StateAirOn>
                                                            })}
                                                        </StateAirContainer>
                                                        <TextRoomButton>{rooms.num}</TextRoomButton>
                                                        
                                                        <StateAirContainer>
                                                        {rooms.id_ar.map((idAir, indexAir) => {
                                                                return (<StateAirInvisible key={indexAir}></StateAirInvisible>);
                                                            })}
                                                        </StateAirContainer>
                                                        
                                                    </RoomButton>
                                                );
                                            })}
                                        </RoomsContainer>

                                    </ContainerListBuildings>
                                );
                            }}
                        /> : <Text>Data Vazio</Text>
                        }
                    </BuildingsArea>

                    <ButtonsArea>
                        <DisableAllButton>
                            <TextButtonHome>Desligar Todos</TextButtonHome>
                        </DisableAllButton>
                        <EnableAllButton>
                            <TextButtonHome>Ligar Todos</TextButtonHome>
                        </EnableAllButton>
                    </ButtonsArea>
                </PageBody>
                
            </Container>
        </>
    );
}