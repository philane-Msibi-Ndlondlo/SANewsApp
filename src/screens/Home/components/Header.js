import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { HeaderContainer, AppName, MenuButtons, MenuButton, SearchIcon, NotificationIcon } from '../styles/HeaderStyles';

import { Feather, Ionicons  } from '@expo/vector-icons';

import Colors from '../../../configs/colors';

const Header = () => {

  const navigation = useNavigation();

    return (
        <HeaderContainer>
            <AppName>SA News</AppName>
            <MenuButtons>
                <MenuButton onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={28} color={Colors.primary} />
                </MenuButton>
            </MenuButtons>
        </HeaderContainer>
    );
}

export default Header;
