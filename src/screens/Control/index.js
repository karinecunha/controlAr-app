import React, { useEffect } from 'react';
import { Container,
         Header,
         TextHead,
         StateAir,
         CurrentState,
         Separator,
         CurrentStateText,
         CurrentStateBox,
         StatesAir,
         StateView,
         StateViewInvisible,
         StateText,
         StateTextInvisible,
         TemperatureAirText,
         RadioButtonContainer,
         ButtonBox,
         ButtonBoxText,
         InsertTemperatureContainer,
         InsertTemperatureState,
         InsertTemperatureStateText,
         InsertTemperatureButtonMaisMenos,
         InsertTemperatureButtonMaisText,
         InsertTemperatureButtonMenosText,
         ButtonSendComandContainer,
         ButtonSendComand,
         ButtonSendComandText
} from './styles';
import { Text, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RadioButton from '../../components/RadioButton';

import Back from '../../assets/back.svg'

export default () => {
    const navigation = useNavigation();
    return(
        <>
            <StatusBar backgroundColor = "#003667"/>
            <Container>
                <Header>
                    <Back width="35" heigth="35"/>
                    <TextHead>1-202</TextHead>
                </Header>

                <StateAir>
                    <CurrentState>
                        <Separator>_____________ </Separator>
                        <CurrentStateText>  Estado Atual   </CurrentStateText>
                        <Separator>_____________</Separator>
                    </CurrentState>

                    <CurrentStateBox>
                        <StatesAir>
                            <StateView></StateView>
                            <StateText>ON</StateText>
                        </StatesAir>
                        
                        <TemperatureAirText>22°C</TemperatureAirText>
                        
                        <StatesAir>
                            <StateViewInvisible></StateViewInvisible>
                            <StateTextInvisible>ON</StateTextInvisible>
                        </StatesAir>
                    </CurrentStateBox>

                    <CurrentState>
                        <Separator>_____________ </Separator>
                        <CurrentStateText>  Controle   </CurrentStateText>
                        <Separator>_____________</Separator>
                    </CurrentState>

                    <RadioButtonContainer>
                        <ButtonBox>
                            <ButtonBoxText>LIGAR</ButtonBoxText>
                        </ButtonBox>
                        <RadioButton
                                animation={'bounceIn'}
                                isSelected={true}
                                innerColor={'#003667'}
                                outerColor={'#F5E5CA'}
                                onPress={() => {}}
                        />
                    </RadioButtonContainer>

                    <RadioButtonContainer>
                        <ButtonBox>
                            <ButtonBoxText>DESLIGAR</ButtonBoxText>
                        </ButtonBox>
                        <RadioButton
                                animation={'bounceIn'}
                                isSelected={false}
                                innerColor={'#003667'}
                                outerColor={'#F5E5CA'}
                                onPress={() => {}}
                        />
                    </RadioButtonContainer>

                <RadioButtonContainer>
                    <InsertTemperatureContainer>

                            <InsertTemperatureButtonMaisMenos>
                                <InsertTemperatureButtonMenosText>-</InsertTemperatureButtonMenosText>
                            </InsertTemperatureButtonMaisMenos>

                            <InsertTemperatureState>
                                <InsertTemperatureStateText>22°C</InsertTemperatureStateText>
                            </InsertTemperatureState>

                            <InsertTemperatureButtonMaisMenos>
                                <InsertTemperatureButtonMaisText>+</InsertTemperatureButtonMaisText>
                            </InsertTemperatureButtonMaisMenos>

                    </InsertTemperatureContainer>

                    <RadioButton
                                animation={'bounceIn'}
                                isSelected={false}
                                innerColor={'#003667'}
                                outerColor={'#F5E5CA'}
                                onPress={() => {}}
                        />

                </RadioButtonContainer>

                </StateAir>

                <ButtonSendComandContainer>
                    <ButtonSendComand>
                        <ButtonSendComandText>Enviar Comando</ButtonSendComandText>
                    </ButtonSendComand>
                </ButtonSendComandContainer>
            </Container>
        </>
    );
}