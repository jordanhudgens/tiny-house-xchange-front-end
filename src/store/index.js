import Vue from "vue";
import Vuex from "vuex";

import homes from "./modules/homes";
import auth from "./modules/auth";
// import baseState from "./modules/base-state";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homes,
    auth
    // baseState
  }
});
