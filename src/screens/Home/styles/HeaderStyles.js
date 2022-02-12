import styled from 'styled-components/native';

import { View, Text, TouchableOpacity } from 'react-native';


import Colors from '../../../configs/colors';

export const HeaderContainer = styled.View`

    padding: 8px 4px;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 0px 20px;

`;

export const AppName = styled.Text`

    font-size: 36px;
    color: ${Colors.white};
`;

export const MenuButtons = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;

export const MenuButton = styled.TouchableOpacity`

    margin: 0px 6px;
    justify-content: center;
    align-items: center;
`;
