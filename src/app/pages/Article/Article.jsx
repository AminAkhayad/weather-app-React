import { FaArrowDown } from "react-icons/fa";
import { getDate } from "@helpers/helper";
import { useParams } from "react-router-dom";
import './Article.css';
import { FaClock } from "react-icons/fa";
import FetchApi from "@functional/FetchApi/FetchApi";
import { getSocialMedia } from "@helpers/helper";

const Article = () => {
    const {errorData: authorError, data: authors} = FetchApi("authors");
    const {errorData: newsError, data: news} = FetchApi("news");
   
    const { slug } = useParams();
    console.log(slug);

    if (authorError) {
        return <div>Error: {authorError.message}</div>; 
    }

    if (newsError) {
        return <div>Error: {newsError.message}</div>; 
    }
    
    if (!news) {
        return <div>Loading news...</div>;  
    }
    if (!authors) {
        return <div>Loading authors...</div>;
    }
    
    const article = news.find(item => item.slug === slug);
    console.log(article);
    console.log(authors);
    
    const scrollTop = () => {
        const element = document.getElementById("description");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const foundAuthor = authors.find(author => article.authorId === author.id);

    return (
        <section className="article-container">
            <div className="hero-article">
                <div className="intro-article">
                    <div className="label">
                        <h1>{article.title}</h1>
                    </div>
                    <div className="intro">
                        <p>{article.intro}</p>
                    </div>
                    <div className="categories-timestamp">
                        {article.categories.map((category) => (
                            <p key={category.slug}>{category.title}</p>
                        ))}
                        <p className="timestamp__item">
                            {getDate(article.timestamp)}
                            <FaClock />
                        </p>
                    </div>

                    <button
                        className="btn btn--middle"
                        onClick={scrollTop}
                        href="#description"
                    >
                        Read more <FaArrowDown />
                    </button>
                </div>

                <figure>
                    <img src={article.mainImage} alt="img" />
                </figure>
            </div>

            <div id="description" className="content-article">
                
                {article.content.map((content, index) => {
                    if (content.type === "subtitle") {
                        return (
                            <div key={index} className="label">
                                <h2>{content.content}</h2>
                            </div>
                        );
                    }
                    
                })}
                    {article.content.map((content, index) => {
                    if (content.type === "callout") {
                        return (
                            <div key={index} className="label label--small">
                                <h3>{content.content}</h3>
                            </div>
                        );
                    }
                
                })
                }
                <div className="content-article-container">
                    {article.content.map((content, index) => {
                        
                    if (content.type === "paragraph") {
                        return (
                            <div key={index} className="content__text">
<p dangerouslySetInnerHTML={{ __html: content.content }}></p>                            
</div>
                        );
                    }
                    
                    
                })

                }
                {article.content.map((content, index) => {
                    if (content.type === "image") {
                        return (
                            <div key={index} className="content__image">
                                <figure>
                                    <img src={content.url} alt={content.alt || "Image"} />
                                </figure>
                            </div>
                        );
                    }
                    
                })

                }
               
                </div>
                <div className="info-author-container">
                      {article.content.map((content, index) => {
                    if (content.type === "quote") {
                        return (
                            <div key={index} className="content__quote">
                                <p className="content__quote-item">“{content.quote}”</p>
                                <cite className="content_author">- {content.author}</cite>
                            </div>
                        );
                    }
                    
                })
                }
               
                    <div className="content__author">
                        <div className="label label--small label--left">
                            <h3>Meet the author</h3>
                        </div>
                        <div className="content__author-item">
                             
                       <img src={`${foundAuthor.avatar}`} alt="Avatar Author" /> 
                       <div className="info-author">
                         <p className="author-name" >Written by <span>{foundAuthor.firstName} {foundAuthor.lastName} </span></p>
                       <p className="author-bio"><span>Bio:</span> {foundAuthor.bio}</p> 
                       
                       {getSocialMedia(foundAuthor.social)}
                       
                       </div>
                        
                        </div>
                   
                       
                    </div>
                </div>
              
                    
            
                
            
               
                    
                    
            </div>
        </section>
    );
};

export default Article;
// if ( content.type === "paragraph" ) {
                        
//     return (
//         <div key={index} >
//            <p dangerouslySetInnerHTML={{ __html: content.content }}></p>
          
//         </div>
//     );
// }

// if(content.type === "image" ) {
//     return (
//         <figure key={index}>
//             <img src={content.url} alt={content.alt || "Image"} />
//         </figure>
//     );
// }
// if (content.type === "quote") {
//     return (
//         <blockquote key={index}>
//             <p>{content.position}</p>
//             <cite>{content.author}</cite>
//         </blockquote>
//     );
// }