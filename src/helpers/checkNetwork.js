
const getNetwork = () => {
    let myLocation = {
        		latitude: 0,
        		longitude: 0
        	}
        	if('geolocation' in navigator){
        		navigator.geolocation.getCurrentPosition(
        			(position) => {
        				console.log(position);
        				myLocation =
        				{
        					latitude: position.coords.latitude,
        					longitude: position.coords.longitude
        				}
        				return myLocation;
        			},
        			(error) => {
        				console.log("error: >>", error.message)
        			}
        		);
        		}else{
        			console.log('geolocation is not supported');
        			// setError('Geolocation is not supported by this browser');
        		}
        		
    }

    export default getNetwork;