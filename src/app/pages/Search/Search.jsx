
import { GoArrowUpRight } from "react-icons/go";
import "./Search.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {textReducer} from "@helpers/helper";
import { Link } from "react-router-dom";
import FetchApi from "@functional/FetchApi/FetchApi";
const Search = () => {
    
    const {data, error} = FetchApi("news");
    const [search, setSearch] = useState("");
    const [filteredNews, setFilteredNews] = useState([]);
    if (!data) {
        return <div>Loading news...</div>;  
    }
    if (error) {
        return <div>Error: {error.message}</div>;  
    }
    
    const handleSubmite = (e) => {
        e.preventDefault();
        const searchNews = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase() || item.intro.toLowerCase().includes(search.toLowerCase()) || item.tags.map((tag) => tag.title.toLowerCase()).includes(search.toLowerCase())));
        setFilteredNews(searchNews);
        
    }

    return (<section className="search-container">
    <div className="label">
        <h1>Find Your news</h1>
    </div>
    <div className="search">
        <form onChange={handleSubmite}>
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/><FaSearch />
            
        </form>
        <div className="news-container">
               <div className="news__article-container">
             {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
                <div key={item.id} className="news__article-item">
                    <figure>
        <img src={item.mainImage} alt={"img"} />
    </figure>
    <div className="article__description">
          <h2>{item.title}</h2>
                    <p>{textReducer(item.intro,50)}</p>
                    <p className="btn"><Link className="article_link" to={`/news/${item.slug}`}>Look up <GoArrowUpRight /></Link> </p>
                  
    </div>  <ul className="news__article__tag">
            {item.tags.map((tag) => (<li className="" key={tag.slug}>{tag.title} </li>))}

    </ul>
                  

                </div>
                

            ))
        ) : (<div>No news found</div>

        )}
        </div>
        </div>
     
       

    </div>

    <div className="label">
        <h3>News</h3>
        </div>
        <div className="news-container">
            <div className="news__article-container">
                  {data.map((item) => (
            <div key={item.id} className="news__article-item">
                    <figure>
        <img src={item.mainImage} alt={"img"} />
    </figure>
    <div className="article__description">
          <h2>{item.title}</h2>
                    <p>{textReducer(item.intro,50)}</p>
                    <p className="btn"><Link className="article_link" to={`/news/${item.slug}`}>Look up <GoArrowUpRight /></Link> </p>
        
    </div>  <ul className="news__article__tag">
            {item.tags.map((tag) => (<li className="" key={tag.slug}>{tag.title} </li>))}
    </ul>
                  

                </div>
        ))}
            </div>
                
        </div>
  
    

    
    
    </section>);

}

export default Search;
