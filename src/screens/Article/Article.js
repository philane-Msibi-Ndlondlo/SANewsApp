import { Share, Alert, ScrollView, View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import moment from 'moment';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
const screenWidth = Dimensions.get('screen').width;

import { useNavigation } from '@react-navigation/native';
import { useDispatch , useSelector } from 'react-redux';

import  { setArticle } from '../../state/articleSlice';



import Colors from '../../configs/colors';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
const Container = styled.View`

    flex: 1;
    background-color: ${Colors.black};
`;

const TopSection = styled.ImageBackground`

    flex: 1;
    height: 100%;
    width: 100%;
`;

const BottomSection = styled.View`

    flex: .4;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
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

const BackBtnContainer = styled.View`
    
    position: absolute;
    top: 50px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.black};
    position: absolute;
    z-index: 10;
    right: 20px;
    margin-top: -20px;

`;

const BackButton = styled.TouchableOpacity`
    
    width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

const Description = styled.Text`

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

const ShareBtnContainer = styled.View`

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
const Article = ({ navigation, route }) => {

    const { article } = useSelector(state => state.articles); 
    
    const onShare = async () => {
            console.log('Share'); 
        try {
            const result = await Share.share({
                title: article.title,
                message: `${article.title} - ${article.url}`,
                url: article.url
            });
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <Container>
            <StatusBar style="light" />
            <TopSection resizeMode="cover" style={{flowDirection: 'column', justifyContent: 'flex-end'}} source={{uri: article.urlToImage}}>
                <BackBtnContainer>
                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={25} color={Colors.primary} />
                </BackButton>
                </BackBtnContainer>
                <ArticleInfo>
                    <ShareBtnContainer>
                        <TouchableOpacity onPress={onShare}>
                            <Entypo name="share" size={24} color="black" />
                        </TouchableOpacity>
                    </ShareBtnContainer>

                    <ArticleDate>{moment(article.publishedAt).format('D MMM YYYY')}</ArticleDate>
                    <ArticleTitle>{article.title}</ArticleTitle>
                </ArticleInfo>
            </TopSection>
            <BottomSection>
                <ScrollView style={{ flex: 1 }}>
                    <Description>
                        {article.description}
                    </Description>
                </ScrollView>
                <ReadMoreBtn onPress={() => navigation.navigate('View', { url: article.url })}>
                    <ReadMoreBtnText>Read More</ReadMoreBtnText>
                </ReadMoreBtn>
            </BottomSection>
        </Container>
    );

}

export default Article;
