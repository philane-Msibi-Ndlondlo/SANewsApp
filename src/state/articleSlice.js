import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import News from '../../news.json';

import NewsService from '../services/NewsService';

import UUID from 'uuidjs';

let news = [];

import { PLACEHOLDER_IMG } from '../configs/constants';

const initialState = {
    articleTotal: 0,
    articles: [],
    article: null,
    error: false,
    errorMessage: '',
    selectedCategory: 'ALL',
    isLoading: false,
    searchResultArticles: []
};

export const fetchHeadlineArticles = createAsyncThunk(
    'articles/fetchHeadlineArticles', 
    async (selectedCategory) => {
    return  await NewsService.fetchHeadlineNews(selectedCategory);
});

export const searchArticles = createAsyncThunk(
    'articles/searchArticles', 
    async (search, { dispatch, getState }) => {
        console.log('Search:' + search);
    return await NewsService.searchNews(search);
});


const articleSlice = createSlice({
    name: 'article',
    initialState,

    reducers: {
        
        setArticles: (state, { payload }) => {
            state.articles = payload;
        },
        setSearchResultArticles: (state, { payload }) => {
            state.searchResultArticles = payload;
        },
        setError: (state, action) => {
            state.error = action.error;
            state.errorMessage = action.message;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
         setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setArticle: (state, action) => {
            state.article = action.payload;
        }
    },
    extraReducers: {
        [searchArticles.pending]: (state) => {
            state.isLoading = true;
            state.SearchResultArticles = [];
            console.log('Search loading');
        },
        [searchArticles.fulfilled]: (state, { payload }) => {
            let articles = [];
            payload.articles.forEach(article => { 
                articles.push({ ...article, id: UUID.generate()})
                article = article.urlToImage ? article.urlToImage : PLACEHOLDER_IMG;
            });
            state.searchResultArticles = articles;
            articles = [];
            state.error = false;
            state.errorMessage = '';
            state.isLoading = false;
            console.log(payload);
        },
        [searchArticles.rejected]: (state, action) => {
            state.SearchResultArticles = [];
            state.error = true;
            state.errorMessage = 'OOPS!! Something Went Wrong';
            state.isLoading = false;
            console.log('Error');
            console.log(action);
        },
        [fetchHeadlineArticles.pending]: (state) => {
            state.SearchResultArticles = [];
            state.isLoading = true;
            console.log('Loading');
        },
        [fetchHeadlineArticles.fulfilled]: (state, { payload }) => {
            let articles = [];
            payload.articles.forEach(article => { 
                articles.push({ ...article, id: UUID.generate()})
                article = article.urlToImage ? article.urlToImage : PLACEHOLDER_IMG;
            });
            state.articles = articles;
            articles = [];
            state.articleTotal = payload.totalResults;
            state.error = false;
            state.errorMessage = '';
            state.isLoading = false;
        },
        [fetchHeadlineArticles.rejected]: (state, action) => {
            state.articles = [];
            state.error = true;
            state.errorMessage = 'OOPS!! Something Went Wrong';
            state.isLoading = false;
            console.log('Error');
            console.log(action);
        },
            }
});

export const { setArticles, setError, setIsLoading, setCategory, setArticle } = articleSlice.actions;

export default articleSlice.reducer;
