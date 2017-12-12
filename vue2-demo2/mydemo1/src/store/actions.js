import axios from 'axios'
// import * as types from './mutation-types.js'


/* 异步操作 */
export default {
	// getSliders(context) {
	// 	axios.get('./static/mock/home/sliders.json').then((response)=>{
	// 		if(response.status === 200){
	// 			context.commit('addaq',response.data.list);
	// 		}
	// 	});
	// },
	//实践中，我们会经常会用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）
	// getSliders({commit}) {
	// 	axios.get('./static/mock/home/sliders.json').then((response)=>{
	// 		if(response.status === 200){
	// 			commit('addaq',response.data.list);
	// 		}
	// 	});
	// }
	// getSliders({commit,state}) {
	// 	axios.get('./static/mock/home/sliders.json').then((response)=>{
	// 		if(response.status === 200){
	// 			console.log(state);
	// 			commit('addaq',response.data.list);
	// 		}
	// 	});
	// },
	// getSliders({commit}) {
	// 	axios.get('./static/mock/home/sliders.json').then((response)=>{
	// 		if(response.status === 200){
	// 			commit('msliders',response.data.list);
	// 		}
	// 	});
	// }
	// getSliders({commit}) {
	// 	axios.get('./static/mock/goods.json').then((response)=>{
	// 		// console.log(response)
	// 		if(response.status === 200){
	// 			commit('msliders',response.data);
	// 		}
	// 	});
	// }
	// getSliders({commit}) {
	// 	axios.get('./static/mock/goods.json').then((response)=>{
	// 		// console.log(response)
	// 		if(response.status === 200){
	// 			commit('msliders',response.data);
	// 		}
	// 	});
	// }
	
	// ,
	getSliders({commit}) {
		axios.get('/apis/aaa').then((response)=>{
			// console.log(response)
			// var data = JSON.parse(response);
			console.log(response);
			if(response.status === 200){
				commit('msliders',response.data);
			}
		});
	}
}

