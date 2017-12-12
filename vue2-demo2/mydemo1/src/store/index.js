import Vue from 'vue';
import Vuex from 'vuex';
// import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

Vue.use(Vuex);

/* 项目全局State */
const state = {
    sliders:[],
    goodsShippings:[],
    info:{},
    store_list:{}
}

const mutations = {//触发状态
    msliders(state,slide){
        state.sliders = slide.body.img_list;
        state.goodsShippings = slide.body.goodsShippings;
        state.info = slide.body.info;
        state.store_list = slide.body.store_list;
        console.log(state.sliders);
        //  state.count += obj.n;
        //  if(state.count >= 10){
        //     state.count = 10;
        //  }
    }
};

/* Store实例 */
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});