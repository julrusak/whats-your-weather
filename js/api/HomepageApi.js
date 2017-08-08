import 'whatwg-fetch'; 
class HomePageApi {
	static getAllHomePageData(zip){
		console.log('zip', zip)
		return fetch('http://api.openweathermap.org/data/2.5/weather?zip='+ zip +',us&appid=43304b46c6c67520672e3a97c1bf3f18').then(response => {
			if (response.status >= 200 && response.status < 300) {
		        console.log("good res", response);
		        return response.json();
		    } else {
		        console.log("bad res", response);
				const error = new Error(response.statusText);
				throw error;
		    }
		}).catch(error => {
			return error;
		});
	}
}

export default HomePageApi;