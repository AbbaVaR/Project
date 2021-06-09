import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    x : '897px',
    y : '924px',
    img : '~/assets/maps/22.png',
    id : '2287',
    correctX : -20,
    correctY : -20,
    url : 'http://192.168.1.50:8000/' 
  },
  mutations: {
    changeX(state, newX){
      state.x = newX+state.correctX + 'px';
    },
    changeY(state, newY){
      state.y = newY+state.correctY + 'px';
    },
    changeImg(state, newImg){
      state.img = '~/assets/maps/' + newImg;
    },
    changeId(state, newId){
      state.url = newId;
    },
    correctionX(state, corX){
      state.correctX = corX;
    },
    correctionY(state,corY){
      state.correctY = corY;
    },
    changeUrl(state, newUrl){
      state.url = newUrl;
    },
  },
  actions: {

  }
});
