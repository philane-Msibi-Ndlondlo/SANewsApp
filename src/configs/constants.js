
import { Dimensions } from 'react-native';

export const APP_NAME = 'SA News';
export const NEWS_API_KEY = '';
export const NEWS_API_URL = 'https://newsapi.org/v2/';
export const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export { screenWidth, screenHeight };

export const NEWS_API_CATEGORY = Object.freeze(
{  
    GENERAL: 'general',
    SPORTS: 'sports',
    TECHNOLOGY: 'technology',
    BUSINESS: 'business',
    ENTERTAINMENT: 'entertainment',
    HEALTH: 'health',
    SCIENCE: 'science'
});

export const categories = [
    {
        id: 1,
        title: "All",
        type: NEWS_API_CATEGORY.GENERAL
    },
    {
        id: 2,
        title: "Sports",
        type: NEWS_API_CATEGORY.SPORTS
    },
    {
        id: 3,
        title: "Tech",
        type: NEWS_API_CATEGORY.TECHNOLOGY
    },
    {
        id: 4,
        title: "Science",
        type: NEWS_API_CATEGORY.SCIENCE
    },
    {
        id: 5,
        title: "Business",
        type: NEWS_API_CATEGORY.BUSINESS
    },
    {
        id: 6,
        title: "Entertainment",
        type: NEWS_API_CATEGORY.ENTERTAINMENT
    },
    {
        id: 7,
        title: "Health",
        type: NEWS_API_CATEGORY.HEALTH
    }
    ];
        
