/**
 * Trio API
*/

import {request, authRequest} from './HTTPClient';
import Errors from './Errors';
import config from '../config';

// Generates a response from the Trio API
export const getTrioResponse = async (url, input, history, ps) => {
    const response = await (await authRequest(config.api.host + '/ai/trio', {
        method: 'post',
        json: {
            message: input,
            history: [{
                role: 'user',
                content: JSON.stringify(ps)
            }, ...history],
            url: url,
        }
    })).json();
    
    return response;
};