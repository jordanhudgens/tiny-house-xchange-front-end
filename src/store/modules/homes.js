import axios from "axios";

const state = {
  listings: null
};

const getters = {
  getListings: state => {
    return state.listings;
  }
};

const mutations = {
  SET_LISTINGS: (state, listings) => {
    return (state.listings = listings);
  }
};

const actions = {
  retrieveListingsFromServer({ commit }) {
    axios
      .get("https://tiny-house-exchange-service.herokuapp.com/homes")
      .then(response => {
        commit("SET_LISTINGS", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
