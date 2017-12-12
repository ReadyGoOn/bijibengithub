<template>
    <div class="goodsheaderimg">
        <swiper :options="swiperOption">
		    <swiper-slide v-for='(item, index) in sliders' :key='index'>
                <a :href='item.goods_thumb_450' target='_blank'>
                    <img :src='item.goods_thumb_450'/>
                </a>
            </swiper-slide>
		    <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
		</swiper>
    </div>
</template>

<script type="text/javascript">
    import { mapState , mapActions } from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
        data() {
		  return {
		      swiperOption: {
                //   initialSlide:1,
		        // notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                // direction : 'vertical',
                loop: true,
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                scrollbar:'.swiper-scrollbar',
                mousewheelControl : true,
                observeParents:true,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                // debugger: true,
                // swiper callbacks
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                // onTransitionStart(swiper){
                    // console.log(swiper)
                // },
		      }
		  	}
		},
        computed:{
            sliders(){
                return this.$store.state.sliders
            }
        },
        // computed: {
		// 	// 映射数据
        //     ...mapState([
        //         'sliders'
        //     ])
        // },
        mounted() {
		    //获取图片列表
			this.getSliders();
		},
       methods: {
        	...mapActions([
			    'getSliders'
			])
        },
         components: {
            swiper,
            swiperSlide
        }
	}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .goodsheaderimg{
        width:100%;
        border:1px solid red;
        overflow:hidden;
    }
    .goodsheaderimg .swiper-slide{
        width:100%;
        height:400px;
    }
    .goodsheaderimg .swiper-slide img{
        max-width:100%;
        max-height:100%;
        transform:translate(-50%,-50%);
        margin-left:50%;
        margin-top:50%;
    }
</style>

