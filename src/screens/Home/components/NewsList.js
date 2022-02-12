import { memo } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch , useSelector } from 'react-redux';
import moment from 'moment';
import { setArticle } from '../../../state/articleSlice';

import { screenWidth, PLACEHOLDER_IMG } from '../../../configs/constants';
import Colors from '../../../configs/colors';

import CategoryList from './CategoryList';
import NewsVerticalList from './NewsVerticalList';
import Header from './Header';

import { Heading } from '../styles/HomeStyles';

import { List, ArticleInfo, ArticleDate, ArticleTitle, NewsItem } from '../styles/NewsListStyles';



const NewsList = ({ category, setCategory, loading, setLoading }) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const news = useSelector(state => state.articles.articles);


    const _renderItem = ( { item } )=> {

        console.log('Item');
        return (
             <NewsItem key={item.id} onPress={() => 
                { dispatch(setArticle(item)); navigation.navigate('Article');}}
                   >
                  <ImageBackground resizeMode="cover" imageStyle={{ borderRadius: 15 }} style={{width: (screenWidth * .9), height: 230, flowDirection: 'column', justifyContent: 'flex-end'}} source={{uri: item.urlToImage}}>
                      <ArticleInfo>
                         <ArticleDate>{moment(item.publishedAt).format('D MMM YYYY')}</ArticleDate>
                            <ArticleTitle numberOfLines={2}>{item.title}</ArticleTitle>
                      </ArticleInfo>
                  </ImageBackground>
            </NewsItem>
      );
    };


 if (loading) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.black, margin: 20}}>
      <CategoryList category={category} setCategory={setCategory} loading={loading} setLoading={setLoading} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color={Colors.white}></ActivityIndicator>
            <Text style={{color: Colors.white, fontSize: 22, marginTop: 20}}>Please wait...</Text>
        </View>
      </SafeAreaView>
    );
  }

    return (
        <List
            data = {news.slice(5)}
            keyExtractor = {(item) => item.id} 
            ListHeaderComponent={() => (
                <>
                    <CategoryList category={category} setCategory={setCategory} loading={loading} setLoading={setLoading} />
                    <Heading>Breaking News</Heading>
                    <NewsVerticalList />
                    <Heading>More News</Heading>
                </>
            )
            }
            ListEmptyComponent={() => {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 200, height: 250 }}>
                        <Text style={{color: '#fff', fontSize: 18}} >No Data To Show</Text>
                    </View>
                );
            } 
            }
            renderItem = {_renderItem}
        />
    );
}

export default memo(NewsList);
