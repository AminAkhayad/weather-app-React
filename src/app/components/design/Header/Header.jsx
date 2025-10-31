import Nav from "../Nav/Nav";
import './Header.css';
import propTypes from "prop-types";
import FetchApi from "@functional/FetchApi/FetchApi";
const Header = ({user}) => {
    console.log(user);
const {data, error} = FetchApi("categories");

if(error) {
    return <div>error: {error.message}</div>;
}
if(!data) {
   return <div>Loading...</div>;
}
    return (<>
    <header className="header-container">
        <Nav user={user} data={data}/>
    </header>
   
    </>)
}

export default Header

Header.propTypes = {
    user: propTypes.object
}
