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

			interplex: {
				user:state.interplex.user,
				currentBranch:state.interplex.currentBranch,
				currentRoleType:state.interplex.currentRoleType,
				// qasForm1: state.interplex.qasForm1,
				// qasForm2: state.interplex.qasForm2,
				// configProductsFormat: state.interplex.configProductsFormat,
				// configHeaderFormat: state.interplex.configHeaderFormat,
				// masterBranches: state.interplex.masterBranches,
				// masterProducts: state.interplex.masterProducts,
				// configProductsFormat:state.interplex.configProductsFormat,
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
	plugins: [vuexLocalStorage.plugin]
})




export default store;
