import { FaArrowUp } from 'react-icons/fa';
import "./GoUpButton.css";
const scrollTop = () =>{
window.scrollTo({top: 0, behavior: 'smooth'});

} 
const GoUpButton = () => {
    return (
        <div className="goUpButton">
            <div className="label">
                <h3 className='label__title'>Go back up </h3>
            </div>
            
            <button className='btn btn--middle' onClick={scrollTop} href="#top"><FaArrowUp /></button>
        </div>
    )
}

export default GoUpButton;