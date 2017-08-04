import 'whatwg-fetch'; 
class HomepageApi {
	static getAllHomepageData(){
		return fetch('/api-homepage').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default HomepageApi;