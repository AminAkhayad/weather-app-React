import "./Trending.css";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FetchApi from "@functional/FetchApi/FetchApi";
const Trending = () => {

    const {data,error} = FetchApi("trending");
    if (!data) {
        return <div>Loading...</div>; 
    }
    if (error) {
        return <div>Error: {error.message} message</div>; 
    }
    
    const settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
    }
    
    return (
        <>
     
        <div className="trends">
        <div className="label--small">
            <h3> trending <span>news</span></h3>
        </div>
        <Slider {...settings}>
            {data && data.length > 0 ? (
                data.slice(0,3).map((item, index) => (
                    <div key={index}>
                        <div className="headline-content">
                            <h3 className="headline__title">{index +1}  {item.title}</h3>
                        <p className="btn"><a  href={item.slug}>Look up <GoArrowUpRight></GoArrowUpRight></a></p>
                        </div>
                        
                    </div>
                ))
            ) : (
                <div>No trending data available</div>
            )}
        </Slider>
             <ul>
              {data && data.length > 0 ? (
                data.slice(3,10).map((item, index) => (
                    
                    <li  key={index + 3}>{index + 4} {item.title} <p className="btn"><a  href={item.slug}>Look up <GoArrowUpRight></GoArrowUpRight></a></p> </li>  
                ))
            ) : (
                <div>No trending data available</div>
            )}
        </ul>
        
        </div>
       
      
        </>
    );
    }

    export default Trending;
