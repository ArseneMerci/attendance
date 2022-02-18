import React,{useState, useEffect} from "react";
import AdminSideNav from "./navbar/adminSideNav";
import AdminTopNav from "./navbar/adminTopNav";
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addUserAction } from "../redux/actions/addUserAction";
import cogoToast from "cogo-toast";

const Register_emp = ({addUserAction, addUser}) => {
	 const [values, setValues] = useState({fullname:'',email:'', phoneNumber:'',location:'',gender:'',role:'' }) ;
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    useEffect(()=>{
        if(addUser.status === 'register_success'){
            cogoToast.success('Registered Successfully!');
            setValues({fullname:'',email:'', phoneNumber:'',location:'',gender:'',role:'' });
            setError('');
            return setSubmitting(false)
        }
        if(addUser.status === 'register_failed'){
            setSubmitting(false)
            return setError(addUser.error.message)
        }

    },[addUser])

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
      if (!values.email || !values.fullname || !values.location || !values.gender || !values.role || !values.phoneNumber) {
			setSubmitting(false);
			return setError('All fields are Required');
		  }
       const data = {
           fullname: values.fullname,
           email: values.email,
           phoneNumber: values.phoneNumber,
           gender: values.gender,
           location: values.location,
           role: values.role,
       }
       addUserAction(data)
   }

    return ( 
   <div>
     <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <AdminTopNav />
   </nav>
   <hr></hr>
   <div className="flex overflow-hidden bg-white pt-16">
      <aside id="sidebar" className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
       <AdminSideNav />
       </aside>

        
    <div className="my-8 bg-gray-100 text-black-800 rounded-2xl shadow-xl mx-auto">
        <div className="md:flex w-full">            
            <div className="w-full md:w-full py-5 px-5 md:px-7">
                <div className="text-center mb-3">
                    <h1 className="font-bold text-2xl text-gray-900 mb-1">REGISTER EMPLOYEES</h1>
                    <p>Fill the information to register</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-0">
                            <label for="" className="text-xs font-semibold ">Employee Name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input
                                 name="fullname"
                                 id="fullname"
                                 value={values.fullname}
                                 onChange={handleChange}
                                 type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-0">
                            <label for="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input 
                                 name="email"
                                 id="email"
                                 value={values.email}
                                 onChange={handleChange}                                
                                type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-0">
                            <label for="" className="text-xs font-semibold px-1">Phone Number</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-phone-outline text-gray-400 text-lg"></i></div>
                                <input 
                                 name="phoneNumber"
                                 id="phoneNumber"
                                 value={values.phoneNumber}
                                 onChange={handleChange}                                
                                type="phone" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-0">
                            <label for="" className="text-xs font-semibold px-1">Gender</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input 
                                 name="gender"
                                 id="gender"
                                 value={values.gender}
                                 onChange={handleChange}                                
                                type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-0">
                            <label for="" className="text-xs font-semibold px-1">Address</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-locat-outline text-gray-400 text-lg"></i></div>
                                <input 
                                 name="location"
                                 id="location"
                                 value={values.location}
                                 onChange={handleChange}
                                 id="address"                                                               
                                type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Role</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input 
                                 name="role"
                                 id="role"
                                 value={values.role}
                                 onChange={handleChange}                                
                                type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="" />
                            </div>
                        </div>
                    </div>
                        {
								  error?(
									  <p className="-mt-7 mb-2 ml-2 text-xs italic text-red-500">{error}</p>
								  ):null
								}
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                        {submitting ? (<button className="block hover:cursor-no-drop w-full max-w-xs mx-auto bg-indigo-200 hover:bg-indigo-300 focus:bg-indigo-700 text-white rounded-full font-semibold"
									type="button">
									<CircularProgress />
								</button>):( 
                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
									   onClick={handleSubmit}>
                             REGISTER NOW
                             </button>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
     <div>
        <a title="Whastapp" href="https://wa.me/250784686643" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/whatsapp.png"/>
        </a>
     </div>
</div>

   <script async defer src="https://buttons.github.io/buttons.js"></script>
   <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
     </div>
     </div>
     );
}

Register_emp.protoTypes = {
	addUserAction: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	addUser: state.addUser,
});
 
export default connect(mapStateToProps, {addUserAction})(Register_emp);