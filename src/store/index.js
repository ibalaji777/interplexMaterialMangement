/*eslint-disable*/
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import mutations from './mutations';
import state from './state';
import actions from './action';


Vue.use(Vuex);


// vuex store
const store = new Vuex.Store({
	state,
	mutations,
	actions
  })

const vuexLocalStorage = new VuexPersist({
	// strictMode:true,
	key: '777777angalware777777',
	storage:window.localStorage,
	reducer: (state) =>{
	
return ({})
}
}
);


export default store;
