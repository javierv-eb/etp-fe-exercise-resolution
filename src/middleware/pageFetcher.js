const fetchPage = async (action) => {
    const {
        maxPages = 1,
        nextPage = 1,
        fetchPromise,
        transformationFunction = (value) => value,
        actionCreatorFunction = (value) => value,
    } = action;

    let currentPaginatedValue = {};

    for (let i = 0; i < maxPages; i ++) {
        currentPaginatedValue[i] = transformationFunction(
            await fetchPromise(nextPage + i)
        );
    }

    return actionCreatorFunction(currentPaginatedValue)
};

const fetcherMiddleware = (store) => (next) => (action) => {
    if (action.type === 'page-fetcher') {
        fetchPage(action).then((value) => store.dispatch(value));
    }
    debugger;
    return next(action);
};

export default fetcherMiddleware;