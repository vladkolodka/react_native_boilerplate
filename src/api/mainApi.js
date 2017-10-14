import { create } from 'apisauce';

const initialize = () => {
    const api = create({
        baseURL: '_no_url__',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });

    const __setBaseUrl = (newBaseUrl) => {
        api.setBaseURL(newBaseUrl);
    };

    const __setAuthToken = (token) => {
        api.setHeader('Authorization', token);
    };

    const login = (email, password) => api.get('/api/login', {
        Email: email,
        Password: password
    });

    return { __setBaseUrl, __setAuthToken, login };
};

export default initialize;

