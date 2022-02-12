import { useState } from 'react';  
import { StatusBar } from 'expo-status-bar';

import { Alert, ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../configs/colors';

import { Ionicons, Entypo } from '@expo/vector-icons'; 

import { Container, TopSection, Header, BackButton, AppName, SearchInput, ReadMoreBtn, ReadMoreBtnText, CopyrightText } from './styles/SearchStyles';  

import { searchArticles } from '../../state/articleSlice';

const Search = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const articlesState = useSelector(state => state.articles);
    const dispatch = useDispatch();

    const onSearch = async () => {
       
        if (loading) return;
            
        setLoading(true);
        if (search) {

            try { 
                console.log('Starting search');
                await dispatch(searchArticles(search));
                console.log('End of search');
            } catch (error) {
                navigation.navigate('Error');
            }
        }

        setLoading(false);

        if (articlesState.error)
            navigation.navigate('Error');
        else
           navigation.navigate('SearchResult', { search });
    }

    return (
        <Container>
            <StatusBar style="light" />
            <TopSection>
                <Header>
                    <BackButton onPress={() => navigation.goBack()} >
                        <Ionicons name="chevron-back-outline" size={25} color={Colors.primary} />
                    </BackButton>
                    <AppName>SA News</AppName>
                </Header>
                <SearchInput onChangeText={(text) => setSearch(text)} value={search} placeholderTextColor={Colors.primary} placeholder="Search Here..." />
                <ReadMoreBtn onPress = {() => onSearch()}>
                    {loading ? <ActivityIndicator size="small" color={Colors.black} /> : <ReadMoreBtnText>Search</ReadMoreBtnText> }
                </ReadMoreBtn>
                <CopyrightText>SA News. Made by Philane Msibi</CopyrightText>
            </TopSection>
        </Container>
    );
}

export default Search;
