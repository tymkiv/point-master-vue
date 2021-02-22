import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    stage: {
      page: 'index'
    },
    mutations: {
      updatePage(stage, pageName) {
        stage.page = pageName;
      }
    }
  });
}

export default createStore;