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


