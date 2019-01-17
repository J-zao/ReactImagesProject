import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 96bb6954009210136b03c6cb615102fea5682cbfbaae8f3706f9d60ba1dfa149'
        } 
});