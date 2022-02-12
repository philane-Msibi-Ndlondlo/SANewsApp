import { ImageBackground, View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../../configs/colors';
const screenWidth = Dimensions.get('screen').width;

export const List = styled.FlatList`
    margin: 20px;
    width: ${screenWidth - 40}px;
`;

export const NewsItem = styled.TouchableOpacity`

    margin: 10px 0px;
    flex-direction: column;
    width: ${screenWidth- 40}px;
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


export const Wrapper = styled.View`
    flex: 1;
    height: 100%;
`;

export const BackButton = styled.TouchableOpacity`

        width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    height: 40px;
    margin-top: 20px;
    margin-bottom: 30px;
    flex-direction: row;
`;

export const AppName = styled.Text`
    font-size: 30px;
    margin-top: -8px;
    margin-left: 20px;
    color: ${Colors.white};
`;


