import { NEWS_API_URL, NEWS_API_KEY } from '../configs/constants';

import { NEWS_API_CATEGORY } from '../configs/constants';

class NewsService {

    async fetchHeadlineNews(selectedCategory = NEWS_API_CATEGORY.GENERAL) {
       
        const url = `${NEWS_API_URL}top-headlines?country=za&apiKey=${NEWS_API_KEY}&category=${selectedCategory}`;
        return fetch(url)
                .then(res => res.json());
    }

    async searchNews(search) {
        
        const url = `${NEWS_API_URL}everything?apiKey=${NEWS_API_KEY}&q=${search}`;
        console.log(url);
        return fetch(url)
                .then(res => res.json());
    }

}

const newsService = new NewsService();

export default newsService;
