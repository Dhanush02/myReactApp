import Axios from 'axios';
export default Axios.create({
    url:`https://developers.zomato.com/api/v2.1/`,
    headers:{"user-key": "b22a3e7d4da69ea74c7058bb51c786af"}
});