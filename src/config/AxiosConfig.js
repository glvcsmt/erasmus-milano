import axios from 'axios';
export const OpenAIReq = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
});

