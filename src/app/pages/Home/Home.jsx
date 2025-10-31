import "./Home.css";
import {WeatherApi} from "@functional/WeatherApi/WeatherApi";
import { useEffect,useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import Weather from "@design/Weather/Weather";
import HeadlineCard from "@design/HeadlineCard/HeadlineCard";
import { Player } from "@lottiefiles/react-lottie-player";
import globeAnimation from "./globe.json";
import NewsArticleCard from "@design/NewsArticleCard/NewsArticleCard";
import Trending from "@design/Trending/Trending";
import GoUpButton from "@design/GoUpButton/GoUpButton";
import { Link } from 'react-router-dom';

const Home = () => { 
    const { weather, error: weatherError,loading:weatherLoading } = WeatherApi(); 
    

    const [news, setNews] = useState(null);
    const [error, setNewsError] = useState(null);
    const apiUrlNews = import.meta.env.VITE_API_URL_NEWS;


    useEffect(() => {
        if (!weather ) {
            return;  
        }
       
        const fetchNews = async () => {
            try {
                const response = await fetch(apiUrlNews);
                const newsData = await response.json();
                setNews(newsData);
            } catch (error) {
                setNewsError(error);
            }
        };

        fetchNews();  
    }, [apiUrlNews, weather, weatherLoading]);

    if (weatherError) {
        return <div>Error: {weatherError.message}</div>; 
    }
   
  
    if (!news) {
        return <div>Loading news...</div>;  
    }
    if (error) {
        return <div>Error: {error.message}</div>;  
    }
    const headLineNews = news.filter(article => article.isHeadline).slice(0,3); 
    
    return (<main>
    
    <section id="#top" className="hero-container">
        <div className="hero__content">
            <div className="label">
                <h1>Breaking news <Player
              className="brand__logo"
              autoplay
              loop
              src={globeAnimation}
              style={{ width: "12rem" }}
              
            /></h1>
            
           
            </div>
          
        </div>
        <div className="headlines-container">
        <div className="headline_item main-headline" key={headLineNews[0].id}>
            <div className="info-container">
                 <h2>{headLineNews[0].title}</h2>
            <p>{headLineNews[0].intro}</p>
            <p><Link className="article_link" to={`/news/${headLineNews[0].slug}`}>Look up <GoArrowUpRight /></Link> </p>
            </div>
           
            <figure>
                <img src={headLineNews[0].mainImage} alt={"img"} />
            </figure>

        </div>
        <ul>
            <li className="headline_item" key={headLineNews[1].id}>
            <HeadlineCard className="article_link" title={headLineNews[1].title} intro={headLineNews[1].intro} url={`/news/${headLineNews[1].slug}`} />
            </li>

            <li className="headline_item" key={headLineNews[2].id}>
            <HeadlineCard className="article_link" title={headLineNews[2].title} intro={headLineNews[2].intro} url={`/news/${headLineNews[2].slug}`} />
            </li>
            <li>
                <div className="weather-container">
                    <Weather address={weather.address} temp={weather.currentConditions.temp} icon={weather.currentConditions.icon} description={weather.description} />
                </div>
            </li>
        </ul>
        </div>


            
    </section>

    <section className="news-container">
        <div className="label">
            <h2 className="label__title">News</h2>
            

        </div>
        
        <div className="news__article-container">{news.map((article) => (<NewsArticleCard key={article.id} article={article} />))}</div>
    </section>
    
        <section className="trending-container">
            <Trending />
        </section>
    <section className="extra-container">
        <GoUpButton />
    </section>
   
 
    </main>)

};

export default Home;