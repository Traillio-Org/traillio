/**
 * Data API
*/

import {request, authRequest} from './HTTPClient';
import Errors from './Errors';
import config from '../config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// Fetches the user profile
export const fetchProfile = async () => {
    const response = await (await authRequest(config.api.host + '/profile/fetch', {
        method: 'get',
    })).json();
    
    return response;
};

// Fetches a problem statement from URL
export const updateProfile = async (profile) => {
    const response = await (await authRequest(config.api.host + '/profile/update', {
        method: 'post',
        json: {
            profile: profile,
        }
    })).json();
    
    return response;
};

// Fetches a problem statement from URL
export const fetchProblemStatement = async (url) => {
    const response = await (await authRequest(config.api.host + '/data/get_problem', {
        method: 'post',
        json: {
            url: url
        }
    })).json();
    
    return response;
};

// Generates an analysis from user input.
export const createUserAnalysis = async (input) => {
    const response = await (await authRequest(config.api.host + '/data/create_analysis', {
        method: 'post',
        json: {
            prompt: input
        }
    })).json();
    
    return response;
};

// Generates an analysis from vitals.
export const createUserAnalysisVitals = async (heartbeats_rpm, sleep_hrs, steps_per_day, spo2) => {
    const response = await (await authRequest(config.api.host + '/data/create_analysis_vitals', {
        method: 'post',
        json: {
            heartbeats_rpm, sleep_hrs, steps_per_day, spo2
        }
    })).json();
    
    return response;
};

// Generates an analysis from user voice input.
export const createUserAnalysisVoice = async (blob) => {
    const file = new File([blob], 'voice.wav', { type: blob.type });
    const formData = new FormData();
    formData.append("file", file);

    const response = await (await authRequest(config.api.host + '/data/create_analysis_voice', {
        method: 'post',
        body: formData,
    })).json();
    
    return response;
};

// Fetches analysis data for a time range.
export const fetchAnalysesTimeRange = async (start, end) => {
    const response = await (await authRequest(config.api.host + '/data/fetch_time_range', {
        method: 'post',
        json: {
            time_start: start,
            time_end: end
        }
    })).json();
    
    return response;
};

// Fetches analysis data for today.
export const fetchTodayAnalyses = async () => {
    return await fetchAnalysesTimeRange(dayjs().startOf('day').valueOf(), dayjs().endOf('day').valueOf());
};

// Fetches day analysis.
export const getDayAnalysis = async (start, end) => {
    dayjs.extend(utc);

    const response = await (await authRequest(config.api.host + '/data/get_day_analysis', {
        method: 'post',
        json: {
            day_start: start,
            day_end: end,
            utc_offset: dayjs().utcOffset()
        }
    })).json();
    
    return response;
};

// Fetches day analysis for today.
export const getTodayDayAnalysis = async () => {
    return await getDayAnalysis(dayjs().startOf('day').valueOf(), dayjs().endOf('day').valueOf());
};

// Fetches journal entry for a day.
export const getJournalEntry = async (start, end) => {
    dayjs.extend(utc);

    const response = await (await authRequest(config.api.host + '/journals/get_entry', {
        method: 'post',
        json: {
            day_start: start,
            day_end: end,
            utc_offset: dayjs().utcOffset()
        }
    })).json();
    
    return response;
};

// Fetches journal entry for today.
export const getTodayJournalEntry = async () => {
    return await getJournalEntry(dayjs().startOf('day').valueOf(), dayjs().endOf('day').valueOf());
};

// Get SAT autofills
export const fetchAutofillSAT = async (questions, responses) => {
    const response = await (await authRequest(config.api.host + '/data/autofill_sat', {
        method: 'post',
        json: {
            questions,
            responses
        }
    })).json();

    return response;
};