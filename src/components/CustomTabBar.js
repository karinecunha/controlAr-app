import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import ClockIcon from '../assets/clock.svg';
import CheckIcon from '../assets/check.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #EAAA42;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #F5CF90;
    border-radius: 35px;
    border: 3px solid #EAAA42;
    margin-top: -20px;
`;

export default ({state, navigation}) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return(
        <TabArea>
            <TabItem onPress={() => goTo("Home")}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#003667"/>
            </TabItem>
            <TabItem onPress={() => goTo("Search")}> 
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#003667"/>
            </TabItem>
            <TabItemCenter onPress={() => goTo("Schedule")}>
                <ClockIcon  width="32" height="32" fill="#003667"/>
            </TabItemCenter>
            <TabItem onPress={() => goTo("Check")}>
                <CheckIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#003667"/>
            </TabItem>
            <TabItem onPress={() => goTo("Profile")}>
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#003667"/>
            </TabItem>
        </TabArea>
    );
}