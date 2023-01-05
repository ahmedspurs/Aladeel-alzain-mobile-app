import axios from "axios";

const state = {
  categories: [],
  session_url: " https://admin.aladeel-waalzain.com/api/v1/categories",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("mod_user_token"),
    },
  },
};

const getters = {
  allCategories: (state) => {
    return state.categories;
  },
};

const actions = {
  async fetchCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setCategories", response.data);
  },
};

const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
