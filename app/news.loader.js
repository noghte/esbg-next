import axios from 'axios';

export async function loader() {
    try {
        const token = process.env.STRAPI_TOKEN_READONLY; 
        const response = await axios.get('http://localhost:1337/api/people', {
            headers: {
                Authorization: 'Bearer 553c832eb6b4ac0c844e169a640c7fbe8f1133061a796ce2527db9fea11a09d418823bbd23e49d254865c8d618df48c1dbbe77c162a76a6b13cd8d80041334913b1d17a60a189c671e726f2bd450650ff6e8666720fa3a5251821099d1f69d02b07af7f6fd8fa33e654808323cba9c2ad0d24723d030e8549cbab0f99dacd4b0',
            },
        });
        return { attributes: response.data.data[0]['attributes'] };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { attributes: null };
    }
}