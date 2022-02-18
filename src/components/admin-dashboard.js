import React, {useEffect,useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getUsersAction} from "../redux/actions/getUsersAction";
import AdminSideNav from "./navbar/adminSideNav";
import AdminTopNav from "./navbar/adminTopNav";
import cogoToast from "cogo-toast";
import { CircularProgress } from '@mui/material';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';


const Dashboard = ({getUsers, getUsersAction}) => {
     const [status,setStatus] = useState('initial')
     const [users,setUsers] = useState({})
    useEffect(() => {
        if(status === 'initial'){
            const token = localStorage.getItem('ATTEND_USER_TOKEN')
            getUsersAction(token);
        }
        if(getUsers.status === 'success'){
            setUsers(getUsers.data)
            return setStatus('fetched')
        }
        if(getUsers.status === 'error'){
            cogoToast.error(getUsers.error)
            return setStatus('fetched')
        }

    }, [getUsers]);
    // const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    // const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    // const header = (
    //     <div className="flex justify-center ">
    //         <span className="p-input-icon-left">
    //             <i className="pi pi-search" />
    //             <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Type keyword" />
    //         </span>
    //     </div>
    //  );
    

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
    
      <section className="antialiased  text-gray-600 absolute inset-0  top-12 h-70 ">
     <div className="flex flex-col justify-center ">
         <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-500">
             <header className="px-5 py-4 border-b border-gray-200">
                 <h2 className="font-semibold text-gray-800 mt-0">All Users</h2>
             </header>       
             <div className="p-3">
                 <div className="overflow-x-auto">
                     <table className="table-auto w-full">
                         <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
                             <tr>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">FullName</div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Phone Number</div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Email</div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Gender</div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Role</div>
                                 </th>
                            
                             </tr>
                         </thead>
                         <tbody className="text-sm divide-y divide-gray-100">
                             {  status ==='fetched'?(
                                 users.map((user)=>(
                                    <tr key ={user._id}>
                                       <td className="p-2 whitespace-nowrap">
                                           <div className="flex items-center">
                                               <div className="font-medium text-gray-800">{user.fullname}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{user.phoneNumber}</div>
                                        </td>
                                       <td className="p-2 whitespace-nowrap">
                                           <div className="flex items-center">
                                               <div className="font-medium text-gray-800">{user.email}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{user.gender}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{user.role}</div>
                                        </td>
                                    </tr>
                                        ))
                             ):(
                                <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <p className=""><CircularProgress size={25} /> </p>
                                     </div>
                                 </td>
                                 <td className="p-2 whitespace-nowrap">
                                 <p className=""><CircularProgress size={25} /> </p>
                                 </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <p className=""><CircularProgress size={25} /> </p>
                                     </div>
                                 </td>
                                 <td className="p-2 whitespace-nowrap">
                                 <p className=""><CircularProgress size={25} /> </p>
                                 </td>
                                 <td className="p-2 whitespace-nowrap">
                                 <p className=""><CircularProgress size={25} /> </p>
                                 </td>
                             </tr>
                             )

                             }
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
     </div>
 </section>
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
Dashboard.protoTypes = {
	getUsersAction: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	getUsers: state.getUsers,
});
export default connect(mapStateToProps, {getUsersAction})(Dashboard);


