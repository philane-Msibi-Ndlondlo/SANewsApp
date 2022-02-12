import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { fetchHeadlineArticles } from '../../state/articleSlice';
import NewsList from './components/NewsList';
import Header from './components/Header';
import Container from '../../components/shared/AppContainer';

import { NEWS_API_CATEGORY } from '../../configs/constants';

const Home = ({ navigation }) => {

    const [loading, setLoading ] = useState(false);
    const [category, setCategory ] = useState(NEWS_API_CATEGORY.GENERAL);
    
    const dispatch = useDispatch();

    const articlesState = useSelector(state => state.articles);

    useEffect(() => {
        console.log('Init');
        if (articlesState.articles.length === 0) {
            console.log('ggg');
            getHeadlineNews(category);
        }

    }, []);

    useEffect(() => {
        console.log('Init cat' + category);
            getHeadlineNews(category);
    }, [category]);

    const getHeadlineNews = async (selectedCategory) => {

        try{

            setLoading(true);
            
            await dispatch(fetchHeadlineArticles(selectedCategory));
            
            setLoading(false);
            
            if (articlesState.error)
                navigation.navigate('Error');

        } catch(e) {
            navigation.navigate('Error');
            console.log(e);
        }
    }

    return(
        <Container>
            <StatusBar style="light" />
            <Header />
            <NewsList category={category} setCategory={setCategory} loading={loading} setLoading = {setLoading} />
        </Container>
    );
}

export default Home;
