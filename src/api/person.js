import { formatUrl } from 'url-lib';

const PERSON_URL = 'https://randomuser.me/api/';

const sdkRequestBuilder = (url, params) => {
    if (!params) {
        return url;
    }
    return formatUrl(url, params);
};

const sdkRequest = async (page) => {
    const fetchResult = await fetch(
        sdkRequestBuilder(PERSON_URL, {'results': 10, page})
    );

    return await fetchResult.json();
} 

export const fetchRandomPeople = (page) => sdkRequest(page);
