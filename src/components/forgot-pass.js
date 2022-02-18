import React from "react";
import photo from "../assets/img/side-photo.jpg";
const forgot = () => {
    return ( 
        <div className="oxygen bg-gray-200 " style={{border:'1px solid #e2e8f0', height:'100vh'}}>
	
		<div className="container mx-auto">
          <div className="flex justify-center px-6 my-3">
		     <div className=" mt-4 flex" style={{width:'70vw', height:'80vh'}}>		
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{backgroundImage: `url(${photo})`}}
					></div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
					
							<p className="mb-4 text-2xl  text-blue-700">
								Forgot Your Password?
							</p>
							<p className="mr-4 text-sm text-gray-700">
							      Add email to send a link to reset your password
							</p>
						</div>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-rounded appearance-none focus:outline-none focus:border-blue-700 focus:ring-1"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
								/>
							</div>
							<div className="mb-6 text-center">
								<button className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
									Reset Password
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<span style={{fontSize:'15px', marginRight:'5px'}}>Already have an account?</span><a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 mr-5" href="./login">
									 Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
     );
}
 
export default forgot;
