import { memo } from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { setArticle } from '../../../state/articleSlice';

import Colors from '../../../configs/colors';

const List = styled.FlatList`
    margin: 12px 0px;
`;

const NewsItem = styled.TouchableOpacity`

    margin: 10px 0px;
    height:250px;
    margin-right: 20px;
    border-radius: 30px;
    flex-direction: column;
`;

const ArticleInfo = styled.View`

    background-color: rgba(0,0,0,.6);
    flex-direction: column;
    padding: 8px;

`;

const ArticleDate = styled.Text`

    color: ${Colors.grey};
    font-size: 16px;
    margin-bottom: 3px;

`;

const ArticleTitle = styled.Text`

    color: ${Colors.white};
    font-size: 20px;
`;

const NewsVerticalList = () => {

    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const news = useSelector(state => state.articles.articles);

    return (
        <List
            data = {news.slice(0, 5)}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            keyExtractor = {(item) => item.id} 
            ListEmptyComponent={() => {
                return (
                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 250, width: 200 }}>
                         <Text style={{color: '#fff'}} >No Data To Show</Text>
                     </View>
                 );
             }
            }

            renderItem = {({ item }) => {
                return (
                    <NewsItem key={item.id} onPress={() => { dispatch(setArticle(item)); navigation.navigate('Article', { articleId: item.id });} }>
                        <ImageBackground resizeMode="cover" imageStyle={{ borderRadius: 15 }} style={{width: 220, height:250, flowDirection: 'column', justifyContent: 'flex-end'}} source={{uri: item.urlToImage}}>
                            <ArticleInfo>
                                <ArticleDate>{moment(item.publishedAt).format('D MMM YYYY')}</ArticleDate>
                                <ArticleTitle numberOfLines={2}>{item.title}</ArticleTitle>
                            </ArticleInfo>
                        </ImageBackground>
                    </NewsItem>
                );
        
            }}
        />
    
    );
}

export default memo(NewsVerticalList);
