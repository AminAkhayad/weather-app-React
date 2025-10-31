import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const textReducer = (text,maxLength) => {
    if(text.length > maxLength) {
                return text.substring(0,maxLength) + "..."
            }
            return text
}


export const getDate = (date) => {
    const newDate = new Date(date);
    if (isNaN(newDate.getTime())) {
        return 'Invalid Date';
    }
    const day = String (newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
    


}

export const getSocialMedia = (socialMedia) => {
    console.log(socialMedia);
    return(<ul key={socialMedia}>
       <li> <Link to={socialMedia.linkedin} target="_blank" > <FaLinkedin></FaLinkedin></Link></li>
        <li><Link to={socialMedia.twitter}target="_blank" > <FaTwitter></FaTwitter></Link></li>
    </ul>)
    
}

export const isEmptyText = (text) => {
    return text === "" || text === undefined || text === null;
}