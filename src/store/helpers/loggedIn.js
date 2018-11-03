import axios from "axios";

export default (async function checkLoginStatus() {
  return await axios
    .get(`https://tiny-house-exchange-service.herokuapp.com/logged_in`, {
      withCredentials: true
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
});
