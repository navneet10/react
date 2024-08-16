import axios from "axios";
 
 // method 1 // 
 const API_URL = 'http://localhost:3001' // URL where HSON server /  npx json-server --watch data/db.jeson --prot 3001
 
 // method 2 //
 const api = axios.create({
	 baseURL : 'http://localhost:3001', // API URL
	 timeout : 10000, // timeout in milliseconds
	 headers : {
		 'Content-type' : 'application/Json',
	 }
 })
 
 export const fetchData = async (endpoint) => {
	 try {
		// method 1 //  
		const response = await axios.get(`${API_URL}/${endpoint}`);
		// method 2 //		const response = await api.get(endpoint);
		return response.data;
	 } catch(error) {
		 console.error('API Error', error);
		 throw error;
	 }
 };
 
 export const postData = async (endpoint ,data) => {
	 try {
	// method 1 // 
	const response = await axios.post(`${API_URL}/${endpoint}`, data);
	// method 2 // 	const response = await api.post(endpoint,  data);
	 return response.data;
	 } catch (error) {
		 console.error('API Error:', error);
		 throw error;
	 }
 };
 
 export default api;
