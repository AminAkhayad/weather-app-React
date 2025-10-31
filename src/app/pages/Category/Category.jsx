import "./Category.css";
import	{ useParams } from "react-router-dom";

import NewsArticleCard from "@design/NewsArticleCard/NewsArticleCard";
import FetchApi from "@functional/FetchApi/FetchApi";
const Category = () => {
    const {slug} = useParams();
    
    const {data: authors, errorData: authorError} = FetchApi("news");
    if (authorError) {
        return <div>Error: {authorError.message}</div>; 
    }
    if (!authors) {
        return <div>Loading news...</div>;
    }

    return (
       <section className="news-container">
        <div className="label">
        <h1>{slug}</h1>
   
    </div>    
    
     <div className="news__article-container">
            {authors
                .filter((article) =>
                    article.categories.some((category) => category.slug === slug)
                )
                .map((article) => (
                    <NewsArticleCard key={article.id} article={article} />
                    
                ))}
                
        </div>
       
       
       </section>

    );
    }

export default Category;