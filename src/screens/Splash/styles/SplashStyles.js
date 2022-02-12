import styled from 'styled-components/native';

import { View, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

import Colors from '../../../configs/colors';

export const TopSection = styled.ImageBackground`

    flex: 1;
    width: ${screenWidth}px;
`;


export const BottomSection = styled.View`

    width: ${screenWidth}px;
    flex: .6;
    justify-content: center;
    padding: 0 20px;
    align-items: center;
    width: ${screenWidth}px;
    background-color: ${Colors.black};
`;

export const AppName = styled.Text`

    font-size: 36px;
    color: ${Colors.primary};
    marginBottom: 10px;
`;

export const AppDesc = styled.Text`

    font-size: 18px;
    color: ${Colors.grey};
    margin-bottom: 30px;
`;
export const GetStartedBtn = styled.TouchableOpacity`

    width: ${screenWidth * .8}px;
    background-color: ${Colors.primary};
    padding: 15px 22px;
    margin: 0 20px;
    border-radius: 30px;
`;

export const GetStartedBtnText = styled.Text`

    color: ${Colors.black};
    text-align: center;
    font-size: 18px;
`;
