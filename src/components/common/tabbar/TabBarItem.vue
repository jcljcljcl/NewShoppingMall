<template>
  <div class="tab-bar-item" @click="isActiveChange">
<!--    下面2个插槽只会展示一个-->
    <div v-if="!isActive" >
      <slot name="item_icon"></slot>
    </div>

    <div v-else>
      <slot name="item_click_icon"></slot>
    </div>

<!--    当处于活跃状态时候，文字也改变-->
    <div :style="activityMessageColor">
      <slot name="item_message"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      //哪个按钮被点击后传过来对应界面的路径，如帮助被点击，传过来/help
      props:{
        path:String,
        // /*将下面文字的颜色暴露出去, messageColor="blue"*/
        messageColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
            // isActive:false
          }
      },
      computed:{
          isActive(){
            //返回处于活跃的路由的路径，如果活跃路径的path包含this.path，说明返回true
            //如果this.path=/help   那么只有在Help路由活跃时候才会返回true,isActive才会是true，否则都是false
            //!== -1意味着找到了相同的路径
            return this.$route.path.indexOf(this.path) !== -1
          },
        activityMessageColor(){
            return this.isActive ? {color:this.messageColor}:{}
        }
      },
      methods:{
        isActiveChange(){
          //按照路由跳转
          //if语句用来防止双击报错
          if(this.$route.fullPath != this.path){
            this.$router.replace(this.path)
          }
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
    margin-bottom: 0px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    /*去掉img下面的3个像素*/
    vertical-align: middle;
  }


</style>
