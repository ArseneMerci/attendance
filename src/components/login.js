import React,{useState, useEffect} from "react";
import photo from "../assets/img/side-photo.jpg";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { CircularProgress } from '@mui/material';

const Login  =({ loginAction, login }) => {
     let history = useHistory();

	const [values, setValues] = useState({email:'', password:''}) ;
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)
	const [isPasswordShown, setPasswordShow] = useState(false);

	useEffect(()=>{
		if (localStorage.getItem('ATTEND_USER_TOKEN')) {
			if(localStorage.getItem('ATTEND_USER_ROLE') === 'admin') return history.push("/admin-dashboard");
			else return history.push("/employee-dashboard");
		  }

		if(login.status === 'login_success'){
			setValues('');
			localStorage.setItem('ATTEND_USER_TOKEN', login.data.token);
			localStorage.setItem('ATTEND_USER_ROLE', login.data.role);
			localStorage.setItem('ATTEND_USER_DATA', JSON.stringify(login.data));
			setSubmitting(false);
			if(login.data.role === "admin")
			 return window.location.href = "/admin-dashboard"
            else
              return window.location.href = "/employee-dashboard"
		}

		if(login.status === "login_failed"){
			setSubmitting(false);
			return setError(login.error.message);
		}

	},[login]);

	  
	const togglEye = isPasswordShown ? 'Hide' : 'Show';

	const showLoginPassword = () => {
		setPasswordShow(!isPasswordShown);
	};
      
      const handleChange = e =>{
        const  {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e=>{
        e.preventDefault();
		setSubmitting(true);
		if (!values.email || !values.password) {
			setSubmitting(false);
			return setError('All fields are Required');
		  }
		if('geolocation' in navigator){
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const data = {
						email: values.email,
						password: values.password,
						latitude: position.coords.latitude,
						longitude: position.coords.longitude
					}
					return loginAction(data);
				},
				(error) => {
					setSubmitting(false);
					return setError(error.message)
				}
			);
			}else{
				setSubmitting(false);
				return setError('geolocation is not supported');
			}
    }


  return ( 
    <div className="oxygen bg-gray-200 " style={{border:'1px solid #e2e8f0', height:'100vh'}}>	
		<div className="container mx-auto">
          <div className="flex justify-center px-5 my-3">
				<div className="mt-4 flex" style={{width:'70vw', height:'80vh'}}>	
					<div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{backgroundImage: `url(${photo})`}}></div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

						<div className="px-6 mb-4 text-center">
							<p className="mb-4 text-sm text-blue-600 text-2xl">
							         Login Into Your Account.
							</p>
							<p className="mb-4 text-sm text-gray-500">
							         Use your credentials to access your account.
							</p>
						</div>

				<form className="px-9 pt-0 pb-6 mb-0 bg-white rounded" >
				 <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input 
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-rounded appearance-none focus:outline-none focus:border-blue-700 focus:ring-1" 
								id="email" type="email" placeholder="Enter Your Email"
								name="email"
								value={values.email}
								onChange={handleChange}
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-rounded appearance-none focus:outline-none focus:border-blue-700 focus:ring-1"
									id="password"
									type={isPasswordShown ? 'text' : 'password'}
									name="password"
									placeholder="******************"
									value={values.password}
									onChange={handleChange}
								/>
      							<label onClick={showLoginPassword} className="bg-blue-300 hover:bg-blue-400 rounded mt-1 px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">{togglEye}</label>
								{
								  error?(
									  <p className=" mt-3 mr-4 text-xs italic text-red-500">{error}</p>
								  ):null
								}
							</div>

							<div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label className="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div>

					<div className="mb-6 text-center">
						{submitting ? (<button className="hover:cursor-no-drop w-75 font-bold text-white bg-blue-500 rounded-full hover:bg-darkblue-700 focus:outline-none focus:shadow-outline bg-darkblue-600 hover:bg-sky-500"
									type="button">
									<CircularProgress />
								</button>):( <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-darkblue-700 focus:outline-none focus:shadow-outline bg-darkblue-600 hover:bg-sky-500"
									type="button"
									onClick={handleSubmit}>
									Sign In
								</button>)}
						    
							</div>
								
							<hr className="mb-6 border-t" />	
							<div className="text-right">
								<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/forgot-pass">Forgot Password?</a>									
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
   );
}

Login.protoTypes = {
	loginAction: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	login: state.login,
});
export default connect(mapStateToProps, {loginAction})(Login);  

