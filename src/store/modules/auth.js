import axios from "axios";

import loggedIn from "../helpers/loggedIn.js";

const state = {
  user: null,
  loggedInStatus: "NOT_LOGGED_IN",
  isLoading: true
};

const getters = {
  getLoginStatus: state => {
    return state.loggedInStatus;
  },

  currentUser: state => {
    return state.user;
  },

  getLoadingStatus: state => {
    return state.isLoading;
  }
};

const actions = {
  storeCheckLoginStatus: context => {
    loggedIn()
      .then(res => {
        if (res.logged_in) {
          context.commit("SET_CURRENT_USER", res.user);
          context.commit("SET_LOGIN_STATUS", "LOGGED_IN");
        } else {
          context.commit("SET_LOGIN_STATUS", "NOT_LOGGED_IN");
        }
        context.commit("SET_LOADING_STATUS", false);
      })
      .catch(error => {
        context.commit("SET_LOGIN_STATUS", "ERROR_LOGGING_IN");
      });
  }
};

const mutations = {
  SET_CURRENT_USER: (state, user) => {
    state.user = user;
  },

  SET_LOGIN_STATUS: (state, status) => {
    state.loggedInStatus = status;
  },

  SET_LOADING_STATUS: (state, booleanStatus) => {
    state.isLoading = booleanStatus;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
