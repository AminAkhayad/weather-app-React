import { GoArrowUpRight } from "react-icons/go";
import propTypes from 'prop-types';
import {textReducer} from "@helpers/helper";
import { Link } from "react-router-dom";
const NewsArticleCard = ({article}) => {

return (<>
<div className="news__article-item">
    
    <figure>
        <img src={article.mainImage} alt={"img"} />
    </figure>
    <div className="article__description">
    <h3>{article.title}</h3>
    <p>{textReducer(article.intro,50)}</p>
    <p className="btn"><Link className="article_link" to={`/news/${article.slug}`}>Look up <GoArrowUpRight /></Link> </p>
    </div>
    <ul className="news__article__tag">
            {article.tags.map((tag) => (<li className="" key={tag.slug}>{tag.title} </li>))}

    </ul>

</div>
</>)

}

NewsArticleCard.propTypes = {
    article: propTypes.object.isRequired
}

export default NewsArticleCard;