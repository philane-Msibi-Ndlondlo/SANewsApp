import { ScrollView, TextInput, View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../../configs/colors';
import { screenWidth } from '../../../configs/constants';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

export const Container = styled.View`

    flex: 1;
    background-color: ${Colors.black};
`;

export const TopSection = styled.View`

    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

`;

export const BottomSection = styled.View`

    flex: 1;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const ArticleInfo = styled.View`

    background-color: rgba(0,0,0,.6);
    flex-direction: column;
    padding: 8px;

`;

export const ArticleDate = styled.Text`

    color: ${Colors.grey};
    font-size: 16px;
    margin-bottom: 3px;

`;

export const ArticleTitle = styled.Text`

    color: ${Colors.white};
    font-size: 20px;
`;

export const BackButton = styled.TouchableOpacity`

        width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.Text`

    color: ${Colors.white};
    font-size: 18px;
`;
export const ReadMoreBtn = styled.TouchableOpacity`

    width: ${screenWidth * .8}px;
    background-color: ${Colors.primary};
    padding: 15px 22px;
    margin: 0 20px;
    border-radius: 30px;
`;

export const ReadMoreBtnText = styled.Text`

    color: ${Colors.black};
    text-align: center;
    font-size: 18px;
`;

export const ShareBtnContainer = styled.View`

    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.primary};
    position: absolute;
    z-index: 10;
    right: 20px;
    margin-top: -20px;

`;

export const SearchInput = styled.TextInput`

    width: ${screenWidth * .8}px;
    padding: 15px 22px;
    border-radius: 30px;
    margin-bottom: 30px;
    color: ${Colors.primary};
    font-size: 18px;
    letter-spacing: 1px;
    border: 2px solid ${Colors.white};
`;

export const CopyrightText = styled.Text`

    color: ${Colors.white};
    font-size: 15px;
    margin-top: 40px;
`;

export const Header = styled.View`
    position: absolute;
    top: 50px;
    left: 20px;

    flex-direction: row;
`;

export const AppName = styled.Text`
    font-size: 30px;
    margin-top: -8px;
    margin-left: 20px;
    color: ${Colors.white};
`;


