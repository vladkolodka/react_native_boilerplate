import { create } from 'apisauce';
import config from '../config';

let apiStorage = null;

const initialize = () => {
	if (apiStorage !== null) return apiStorage;

	const api = create({
		baseURL: config.api_url,
		headers: {
			'Cache-Control': 'no-cache'
		}
	});

	const __setAuthToken = (token) => {
		api.setHeader('Authorization', token);
	};

	const login = (login, password) => api.get('/api/login', {
		Login: login,
		Password: password
	});

	apiStorage = { __setAuthToken, login };
	return apiStorage;
};

export default initialize;