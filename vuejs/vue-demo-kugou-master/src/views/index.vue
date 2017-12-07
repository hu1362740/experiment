<template>
  <div>
    <mt-swipe :auto="5000" @change="handleChange">
      <mt-swipe-item>
        <img src="../assets/banner1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner3.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner4.jpg">
      </mt-swipe-item>
    </mt-swipe>
    <div class="swipe-tips">{{swipesongname}}</div>
    <div>
      <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)">
        <img src="../assets/images/download_icon.png" width="20" height="20">
      </mt-cell>
    </div>
  </div>
</template>

<script type="es6">
  import { Swipe, SwipeItem,Indicator,Cell } from 'mint-ui'
  import list_index from '../jsons/list_index'
  export default{
    data(){
      return {
        songList: [],
        swipesongname:'听海'
      }
    },
    created(){
      this.get();
    },
    components: {},
    methods: {
      //轮播图切换
      handleChange(index){
        let swipesongmap = new Map([['0','听海'],['1','胆小鬼'],['2','小手拉大手'],['3','青花瓷']]);
        swipesongmap.forEach((value,key,ownerMap)=>{
          if(key == index){
            this.swipesongname = value;
          }
        })
      },
      get(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.parseData(list_index);
      },
      parseData(data){
        setTimeout(()=> {
          Indicator.close();
          this.songList = data;
        }, 1000);
      },
      playAudio(index){
        var hash = this.songList[index].hash;
        this.$store.dispatch('getSong', hash);
        this.$store.dispatch('getLrc', hash);
      }
    }
  }
</script>
<style>
  .mint-swipe {
    height: 39vw !important;
  }

  .mint-swipe-indicator {
    width: 12px !important;
    height: 12px !important;
  }

  .mint-swipe-indicators {
    bottom: 5px !important;
  }
  .swipe-tips{
    color:blue;
    text-align: center;
  }
</style>

