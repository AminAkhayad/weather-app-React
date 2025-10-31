
import { useEffect,useState } from 'react';

export const WeatherApi = () => {
    const apiUrlWeather = import.meta.env.VITE_API_URL_WEATHER;	
    const [weather,setWeather] = useState(null);
    const [error,setError] = useState(null);
    // const [loading, setLoading] = useState(true)
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrlWeather);
            const weather = await response.json();
            setWeather(weather);
        } catch (error) {
            setError(error);
        }
        
    }
    fetchData();
},[apiUrlWeather]);
if(error ) {
    return <div><p>error: {error.message}</p></div>
}
if(!weather) {
    return <div>Loading...</div>
}

return {weather,error};
}

export default WeatherApi;