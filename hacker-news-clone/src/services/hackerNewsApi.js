import ApiService from './Api';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({ baseURL: BASE_URL });
const JSON_QUERY = '.json?print=pretty';

const PAGE_LIMIT = 20;
const hackerNewsApi = {};

const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit })
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);
hackerNewsApi.getTopStory = (id) => client.get(`/item/${id}${JSON_QUERY}`);
hackerNewsApi.getStoriesByPage = (ids, page) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids })
    const storyPromises = activeIds.map(id => hackerNewsApi.getTopStory(id));

    return Promise.all(storyPromises);
};

export default hackerNewsApi;
