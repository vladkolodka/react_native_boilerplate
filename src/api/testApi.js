import { create } from 'apisauce';

const initialize = () => {
    const api = create({
        baseURL: 'https://api.github.com',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });

    const allGists = () => api.get('/gists/public');

    return { allGists };
};

export default initialize;

