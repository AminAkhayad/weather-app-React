import "./Register.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {

return ( <section className="login-register-container">
    <div className="label">
      <h1>Register</h1>
    </div>

    <div className="login-register-content">
      <div className="login-register-form">
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
            <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input type="text" id="first_name" name="first_name" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input type="text" id="last_name" name="last_name" />
            </div>
            <div className="form-group">
                <label htmlFor="Gender">Gender</label>
                <select name="gender" id="1">
                    <option value="Man">Man</option>
                    <option value="Woman">Woman</option>
                </select>
            </div>

          <button className="btn" type="submit">
            Register
          </button>
        </form>
        <p className="line">or</p>
        <div className="btn-container">
<p className="btn btn--small-margin"><Link to="/login">Login</Link></p> <br />
       <p className="btn btn--margin-top-auto btn--action"><a href="/">
Go back
<FaArrowLeft />
</a></p>
        </div>
       
        {/* Vraag aan meneer of dat ik dummy inlog mag gebruiken zoals inloggen via google of iets dergelijks */}
 
      </div>
      <figure>
        <img src="/assets/img/news_article.jpg" alt="News Article" />
      </figure>

    </div>
  </section>)
}
export default Register;