import "./Login.css";
import { FaArrowLeft } from "react-icons/fa";
import { Field, Formik } from "formik";
import * as yup from "yup";
import {useMutation} from "@tanstack/react-query";
// import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {User} from "@functional/User/User";
import {useState} from "react";
import Input from "@design/Input/Input";
import useAuth from "@functional/Auth/useAuth";
import FetchApi from "@functional/FetchApi/FetchApi";
import { useNavigate } from "react-router-dom";
const Login = () => {
const {setUser} = useAuth();
 
const [error, setError] = useState("");
const {data:userData ,error: apiError} = FetchApi("user");
const navigate = useNavigate();

const {mutate, isPending, error:formError} = useMutation({

  mutationFn:User,
  onError: (error) => {
    setError(error.message);
  }
});


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});


  const handleLogin = (values,{setSubmitting}) => {

      if(userData) {
        mutate({formData:values,userData,error:apiError},{
          onSucces: (data) => {
            console.log(data);
            
            setUser(data);
            navigate("/",{replace:true});
            setError("");
        }},{
          onError: (error) => {
            setError(error.message);
          }
        });
      }
      else {
        setError("User data not found");
      }
      
      setSubmitting(false);

 
    
  }
  return (
    <section className="login-register-container">
      <div className="label">
        <h1>Login</h1>
      </div>

      <div className="login-register-content">
        <div className="login-register-form">
{error ||formError}
      <Formik initialValues={{email:"", password:""}} onSubmit={handleLogin} validationSchema={schema}  autoComplete="off">
        
        {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      })=> (<form onSubmit={handleSubmit} >
          <Field as={Input} name="email" id="email" error={errors.email } value={values.email} type="text" label="Email" disabled={isPending || isSubmitting} onchange={handleChange} onblur={handleBlur} />

          <Field as={Input} name="password" id="password" error={errors.password  } value={values.password} type="password" label="Password" disabled={isPending || isSubmitting} onchange={handleChange} onblur={handleBlur} />
       
       

        {/* <div className="form-group form-group--flex-direction-column">
          <label htmlFor="checkbox">Keep me logged in</label>
          <Field type="checkbox" name="keepLoggedIn" />
        </div> */}

        <button className="btn" type="submit" disabled={isPending || isSubmitting}  > 
          Login
        </button>
        </form>
      )}
      </Formik>


          <p className="line">or</p>
          <div className="btn-container">
<p className="btn btn--small-margin"><Link to="/register">Register</Link></p> <br />
         <p className="btn btn--margin-top-auto btn--action"><a href="/">
  Go back
  <FaArrowLeft />
</a></p>
          </div>
         
   
        </div>
        <figure>
          <img src="/assets/img/news_article.jpg" alt="News Article" />
        </figure>

      </div>
    </section>
  );
};

export default Login;

{/* <p className="btn btn--small-margin">
<a href="/register">Register</a>
</p>
<p className="btn btn--margin-top-auto btn--action">
<a href="/">
  Go back
  <FaArrowLeft />
</a>
</p> */}


    // mutate(values,{
    //   onSucces: (data) => {
    //     setError("");
    //     console.log(data);
        
      // },