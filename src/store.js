import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listings: null
  },

  getters: {
    getListings: state => {
      return state.listings;
    }
  },

  mutations: {
    SET_LISTINGS: (state, listings) => {
      return (state.listings = listings);
    }
  },

  actions: {
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
  }
});
