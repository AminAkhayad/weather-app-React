import propTypes from 'prop-types'; 
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const HeadlineCard =({className ,title, intro,url} )=>{
    return(
        <div>
            <h2>{title}</h2>
            <p>{intro}</p>
            <p ><Link className={className} to={url}>Look up <GoArrowUpRight /></Link></p>
        </div>
    )
}

HeadlineCard.propTypes = {
    title: propTypes.string.isRequired,
    intro: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    className: propTypes.string
}

export default HeadlineCard;