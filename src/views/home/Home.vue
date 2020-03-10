<template>
  <div id="home">
   <nav-bar class="home-nav">
      <div slot="center">购物街</div>
   </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <week-popular></week-popular>
    <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    <ul>
      <li v-for="i in 100">ssss</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import WeekPopular from "./childComps/WeekPopular";
  import TabControl from "components/content/TabControl/TabControl"
  import GoodsList from "../../components/content/Goods/GoodsList";
  import {getHomeMultiData} from "network/home";
  import {getHomeGoods} from "network/home"
//导入轮播图
  export default {
        name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        WeekPopular,
        TabControl,
        GoodsList
      },
    data(){
          return {
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            currentType:'pop',
            titles:['流行','新款','精选']
          }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultiDataMethod()
      this.getHomeGoodsMethod('pop')
      this.getHomeGoodsMethod('new')
      this.getHomeGoodsMethod('sell')
    },
    methods:{
      //事件监听
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
      },
      //网络请求
      getHomeMultiDataMethod(){
        getHomeMultiData().then(res =>{
          console.log(res);
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeGoodsMethod(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res =>{
          console.log(res);
          this.goods[type].page +=1;
          // 要拼接上去，不能赋值，如果再来数据就覆盖掉了  ...解析res将其中每一个数据添加到list上
          this.goods[type].list.push(...res.data.list);
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
.home-nav{
  background-color: var(--color-tint);
  color: var(--color-background);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/*添加吸顶效果，titles:['流行','新款','精选']不会随着界面的滚动而滚动*/
  .tab-control{
    position: sticky;
    top:44px;
    z-index: 9;
  }
</style>
