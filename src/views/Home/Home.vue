<template>
  <section class="msite">
    <!--首页头部-->
    <header-top :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header-top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
      <!-- 添加分页器 -->
      <div class="swiper-pagination"></div>
      </div>
      <div v-else>
        <img src="./images/msite_back.svg">
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
import ShopList from "@/components/ShopList/ShopList.vue"
import {mapState} from 'vuex'
export default {
  data() {
    return {
      baseImageUrl:'https://fuss10.elemecdn.com',
    }
  },
  watch:{
    categorys() {
      this.$nextTick(() => {
      //创建一个Swiper实例对象
    new Swiper('.swiper-container',{
      //循环轮播
      loop:true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
    })
    }
  },
  mounted() {
    this.$store.dispatch('getCategorys')
     this.$store.dispatch('getShops')
  },
  components:{
    HeaderTop,
    ShopList
  },
  computed:{
    ...mapState(['address','categorys']),
    //根据categorys将一维数组变为二维数组
     categorysArr() {
      const {categorys} = this;
      const Arr = []
      let smallArr = []
      categorys.forEach(value => {
        //将小数组push到大数组中
        if(smallArr.length === 0) {
          Arr.push(smallArr)
        }
        //将数据push到小数组中
        smallArr.push(value)
        //如果小数组的长度大于页面渲染的最大值就创建一个新数组
        if(smallArr.length === 8) {
          smallArr = []
        }
      })
      return Arr;
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
&.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>