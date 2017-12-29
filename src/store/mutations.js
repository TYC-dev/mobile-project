import {
	HIDE_HEAD,
	SHOW_HEAD,
	hide_footer,
	show_footer
} from './types'

import getters from './getters'

const state = {
	hideHead: true,
	hideFooter: true
};

const mutations = {
	[HIDE_HEAD](state){
		state.hideHead = false;
	},
	[SHOW_HEAD](state){
		state.hideHead = true;
	},
	[hide_footer](state){
		state.hideFooter = false;
	},
	[show_footer](state){
		state.hideFooter = true;
	}
};

export default{
	mutations,
	state,
	getters
}