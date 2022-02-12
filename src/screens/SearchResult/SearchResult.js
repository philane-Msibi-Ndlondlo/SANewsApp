import { ImageBackground, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { useSelector, useDispatch } from 'react-redux';

import { setArticle } from '../../state/articleSlice';

import moment from 'moment';

import Colors from '../../configs/colors';
import { Entypo, Ionicons } from '@expo/vector-icons'; 
const screenWidth = Dimensions.get('screen').width;

import { List, Header, BackButton, AppName, NewsItem, ArticleInfo, ArticleDate, ArticleTitle } from './styles/SearchResultStyles';

const SearchResult = ({ navigation, route}) => {

    const articlesState = useSelector(state => state.articles);
    const dispatch = useDispatch();
    const { search } = route.params;

    return (
        <View style={{ backgroundColor: Colors.black }} >
        <List
            data = {articlesState.searchResultArticles}
            keyExtractor = {(item) => item.id}
            ListEmptyComponent={() => {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 200, height: 250 }}>
                        <Text style={{color: '#fff', fontSize: 18}} >No Data To Show</Text>
                    </View>
                );
            } 
            }
            ListHeaderComponent={() => (
                <>
                    <Header>
                        <BackButton onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back-outline" size={25} color={Colors.primary} />
                        </BackButton>
                        <AppName>SA News</AppName>
                    </Header>
                    <Text style={{ fontSize: 18, color: Colors.white, marginBottom: 20 }} >Found Searches for { search }</Text>
                </>
            )
            }
            renderItem = {({ item }) => {
                return (
                    <NewsItem key={item.id} onPress={() => { dispatch(setArticle(item)); navigation.navigate('Article');}}>
                        <ImageBackground resizeMode="cover" imageStyle={{ borderRadius: 15 }} style={{width: (screenWidth * .9), height: 200, flowDirection: 'column', justifyContent: 'flex-end'}} source={{uri: item.urlToImage}}>
                            <ArticleInfo>
                                <ArticleDate>{moment(item.publishedAt).format('D MMM YYYY')}</ArticleDate>
                                <ArticleTitle>{item.title}</ArticleTitle>
                            </ArticleInfo>
                        </ImageBackground>
                    </NewsItem>
                );
            }}
        />
        </View>
    );
}

export default SearchResult;
