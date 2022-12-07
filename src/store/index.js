/*eslint-disable*/
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import mutations from './mutations';
import state from './state';
import actions from './action';


Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
	// strictMode:true,
	key: '2key',
	storage: window.localStorage,
	reducer: (state) => {

		return ({
			printer:{
				showLabelGenerator:false,
				label:state.printer.label||'',
				receipt:state.printer.receipt||'',
					},
		

		})
	}
}
);

const vuexLocalStorage2 = new VuexPersist({
	// strictMode:true,
	key: '2key22',
	storage: window.localStorage,
	reducer: (state) => {

		return ({
			interplex: {
				hold:state.interplex.hold,
				user:state.interplex.user,
				currentBranch:state.interplex.currentBranch,
				currentRoleType:state.interplex.currentRoleType,
				}


		})
	}
}
);
// vuex store
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	plugins: [vuexLocalStorage.plugin,vuexLocalStorage2.plugin]
})




export default store;
