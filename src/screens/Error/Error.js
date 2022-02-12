import { MaterialIcons } from '@expo/vector-icons'; 

import { StatusBar } from 'expo-status-bar';

import Colors from '../../configs/colors';

import { Container, TopSection, Header, AppName, ErrorMessage, ReadMoreBtn, ReadMoreBtnText, CopyrightText } from './styles/ErrorStyles';

const Error = ({ navigation }) => {

    return (
        <Container>
            <StatusBar style="light" />
            <TopSection style={{flowDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Header>
                    <AppName>SA News</AppName>
                </Header>
                <MaterialIcons name="cancel" size={140} color={Colors.primary} />
                <ErrorMessage>Oops! Something Went Wrong!!!</ErrorMessage>
                <ReadMoreBtn onPress={() => navigation.navigate('Home')}>
                    <ReadMoreBtnText>Home</ReadMoreBtnText>
                </ReadMoreBtn>
                <CopyrightText>SA News. Made by Philane Msibi</CopyrightText>
            </TopSection>
        </Container>
    );

}

export default Error;
