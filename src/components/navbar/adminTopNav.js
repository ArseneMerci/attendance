import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";

const AdminTopNav = ()=>{
   let history = useHistory();
   useEffect(() => {
      if (!localStorage.getItem('ATTEND_USER_TOKEN') || !(localStorage.getItem('ATTEND_USER_ROLE') === 'admin')) {
       return history.push("/login");
      }
  }, []);
    return(
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
         <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
               <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                   <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                   </svg>
                  <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
               </button>
               <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
               <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo" />
               <span className="self-center whitespace-nowrap">Attendance</span>
               </a>
               <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                  <label for="topbar-search" className="sr-only">Search</label>
                  <div className="mt-1 relative lg:w-64">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                     </div>
                     <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                  </div>
               </form>
            </div>
            <div className="flex items-center">
               <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                  <span className="sr-only">Search</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
               </button>

               <div className="hidden lg:flex items-center">
                  <a href="/"><span className="text-base font-normal text-gray-500 mr-5">Home</span></a>
               </div>

               <a href="#" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                  <svg className="w-4  h-5  align-5 text-white-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                   </svg>
                  Admin Profile
               </a>
            </div>
         </div>
      </div>
    )
}

export default AdminTopNav;