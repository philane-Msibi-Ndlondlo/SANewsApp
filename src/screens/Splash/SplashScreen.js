import { useState, useRef } from 'react';

import Container from '../../components/shared/AppContainer';

import { TopSection, BottomSection, AppName, AppDesc, GetStartedBtn, GetStartedBtnText } from './styles/SplashStyles';

import { ActivityIndicator, Animated, Dimensions } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { fetchHeadlineArticles } from '../../state/articleSlice';

const screenWidth = Dimensions.get('screen').width;

const AnimatedGetStartedBtn = Animated.createAnimatedComponent(GetStartedBtn);
 
const SplashScreen = ({ navigation }) => {

    const [loading, isLoading] = useState(false);

    const buttonAnim = useRef(new Animated.Value((screenWidth * .8))).current;
    
    const dispatch = useDispatch();

    const articlesState = useSelector(state => state.articles);

    const fetchNews = async () => { 
       
        if (loading) return;

        Animated.timing(
            buttonAnim,
            { toValue: 50, useNativeDriver: false }
        ).start();

        try{

            isLoading(true);
            
            await dispatch(fetchHeadlineArticles());
            
            isLoading(false);
            
            if (articlesState.error)
                navigation.navigate('Error');
            else
                navigation.replace('Home');

        } catch(e) {
            navigation.navigate('Error');
            console.log(e);
        }
    }
    return (
        <Container>
            <TopSection source={require('../../../assets/images/bg.jpg')} />
            <BottomSection>
                <AppName>SA News</AppName>
                <AppDesc style={{marginBottom: 0}}>Stay Updated with</AppDesc>
                <AppDesc>the latest news</AppDesc>
                <AnimatedGetStartedBtn onPress={() => fetchNews()} style={{ width: buttonAnim }}>
                    {loading ? (<ActivityIndicator size="small" color="#000" />) : <GetStartedBtnText>Get Started</GetStartedBtnText>}
                </AnimatedGetStartedBtn>
            </BottomSection>
        </Container>
    );
}

export default SplashScreen;
