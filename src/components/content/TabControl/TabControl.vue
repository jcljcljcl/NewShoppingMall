<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-item-control" :class="{active: index == currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
          return{
            // 用来记录'流行','新款','精选'哪一个被选中
            currentIndex:0
          }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index;
          //将点击事件传到Home中
          this.$emit('tabClick',index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 16px;
    background-color: #ffffff;
  }
  .tab-item-control{
   flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-item-control span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
