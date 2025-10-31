
import './Weather.css';
import propTypes from 'prop-types';
const Weather = ({address, temp, icon, description }) => {
    const getWeatherIcon = (description) => {
        switch (description) {
            case 'clear':
                return '☀️';
            case 'cloudy':
                return '☁️';
            case 'rain':
                return '🌧️';
            case 'snow':
                return '❄️';
            case 'mist':
                return '🌫️';
                default:
                    return '🌤️';
            
        }
    }
    
    
    return (
        <div className="weather-container">
            <div className="weather-information">
                <div className="weather-location-temp">
                    <p>Today • {address}</p>
            <h2>{temp} °C</h2>
                </div>
                <span><strong>{getWeatherIcon(icon) }</strong></span>
            </div>
            
            
            
            
            <p>{description}</p>
        </div>
    )
}

Weather.propTypes = {
    address: propTypes.string,
    temp: propTypes.number,
    icon: propTypes.string,
    description: propTypes.string
}
export default Weather;