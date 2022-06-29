import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faChevronLeft,
	faChevronRight,
	faUnderline,
	faParagraph,
	faSubscript,
	faSuperscript,
	faAlignCenter,
	faAlignJustify,
	faAlignLeft,
	faAlignRight,
	faBold,
	faItalic,
	faLink,
	faUnlink,
	faHeading,
	faList,
	faListOl,
	faLightbulb,
	faFile,
	faPrint,
	faNetworkWired,
	faPercent,
	faEnvelope,
	faBell,
	faHistory,
	faPlug,
	faWrench,
	faBolt,
	faShoppingBasket,
	faReceipt,
	faPlus,
	faTasks,
	faChartLine,
	faPencilAlt,
	faEdit,
	faCubes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
	faCubes,
	faEdit,
	faPencilAlt,
	faChartLine,
	faPlus,
	faReceipt,
	faWrench,
	faChevronLeft,
	faChevronRight,
	faHistory,
	faLightbulb,
	faFile,
	faNetworkWired,
	faPrint,
	faPercent,
	faEnvelope,
	faBell,
	faPlug,
	faShoppingBasket,
	faTasks
);
library.add(
	faBolt,
	faShoppingBasket,
	faUnderline,
	faParagraph,
	faSuperscript,
	faSubscript,
	faAlignCenter,
	faAlignJustify,
	faAlignLeft,
	faAlignRight,
	faBold,
	faItalic,
	faLink,
	faUnlink,
	faHeading,
	faList,
	faListOl,
	faHistory,
	
	// fa
);
Vue.component('fa', FontAwesomeIcon);
Vue.use(Vuetify);
// import  * ss as from '../../public/scss/'
export default new Vuetify({
	icons: {
		iconfont: 'fa',
	},
});

// const opts = {}

// export default new Vuetify(opts)
