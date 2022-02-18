import React, { useEffect, useState } from "react";
import AdminSideNav from "./navbar/adminSideNav";
import AdminTopNav from "./navbar/adminTopNav";
import { httpRequest } from "../helpers/httpRequest";
import cogoToast from "cogo-toast";
import { CircularProgress } from '@mui/material';
// import PropTypes from 'prop-types';
// import { connect } from "react-redux";
// import { addNetworkAction } from "../redux/actions/addNetworkAction";


const Add_network = () => {
    const [status,setStatus] = useState('initial')
    const [data,setData] = useState({})
    useEffect(()=>{
        async function fetchData(){
                const token = localStorage.getItem('ATTEND_USER_TOKEN')
                const {response:{data}} = await httpRequest('GET','https://attendence-solvit.herokuapp.com/api/admin/all-locations',null, {
                    "Authorization": `${token}`
                  });
                  setData(data)
                setStatus('fetched');
        }
        if (status === 'initial') {
            fetchData()
        }

    },[status])
    const Add_network =async()=>{
        if (window.confirm("Do you want to add this network!")) {
            if('geolocation' in navigator){
                navigator.geolocation.getCurrentPosition(async(position) => {
                    const token = localStorage.getItem('ATTEND_USER_TOKEN')
                    const {response} = await httpRequest('POST','https://attendence-solvit.herokuapp.com/api/admin/location/add',
                        {latitude:position.coords.latitude,
                        longitude:position.coords.longitude,
                        radius:1000},{'Authorization': `Bearer ${token}`});
                        if(response){
                            cogoToast.success('success')
                            return setStatus('initial')
                        }else cogoToast.error('error')     
                     })
            }else console.log('geolocation not available')
          } else {
            return
          }
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

       <section className="antialiased  text-gray-600 absolute inset-0  top-12 h-70 ">
     <div className="flex flex-col justify-center ">
         <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-500">
             <header className="px-5 py-4 border-b border-gray-200">
                 <h2 className="font-semibold text-gray-800 mt-0">Allowed Networks</h2>
                 <button className="outline-0" onClick={Add_network}><h2 className="text-blue-600 text-sm  text-right mt-0 ">Add Networks</h2></button>               
             </header>       
             <div className="p-3">
                 <div className="overflow-x-auto">
                     <table className="table-auto w-full">
                         <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
                             <tr>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Latitude</div>
                                 </th>
                                 <th className="p-2 whitespace-nowrap">
                                     <div className="font-semibold text-left">Longitude</div>
                                 </th>
                            
                             </tr>
                         </thead>
                         <tbody className="text-sm divide-y divide-gray-100">
                             {  status ==='fetched'?(
                                 data.map((location)=>(
                                    <tr key ={location._id}>
                                       <td className="p-2 whitespace-nowrap">
                                           <div className="flex items-center">
                                               <div className="font-medium text-gray-800">{location.latitude}</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">{location.longitude}</div>
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
                                    <div className="flex items-center">
                                    <p className=""><CircularProgress size={25} /> </p>
                                     </div>
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
        <a title="Whastapp" href="https://wa.me/250784686643" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img alt="" class="object-cover object-center w-full h-full rounded-full" src="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/whatsapp.png"/>
        </a>
    </div>
</div>
   
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      </div>
      </div>
     );
}

// Add_network.protoTypes = {
// 	addNetworkAction: PropTypes.func.isRequired,
// };
// const mapStateToProps = state => ({
// 	addNetwork: state.addNetwork,
// });

// export default connect(mapStateToProps, {addNetworkAction})(Add_network);
export default Add_network;
