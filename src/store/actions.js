import * as types from './types'

export default{
	HIDE_HEAD:({commit}) =>{
		commit( types.HIDE_HEAD );
	},
	SHOW_HEAD:({commit}) =>{
		commit( types.SHOW_HEAD );
	},
	HIDE_FOOTER: ({commit}) => {
		commit( types.hide_footer );
	},
	SHOW_FOOTER: ({commit}) => {
		commit( types.show_footer );
	}
}