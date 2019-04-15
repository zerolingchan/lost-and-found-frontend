<template>
    <div id="lost_things">
      <p class="contain_title">失物招领</p>
      <div class="banner">
        <h4>标题</h4>
        <picture class="picture">图片</picture>
        <p class="summary">联系人</p>
        <p class="summary">详细内容</p>
      </div>
      <div class="banner">
        <h4>标题</h4>
        <picture class="picture">图片</picture>
        <p class="summary">联系人</p>
        <p class="summary">详细内容</p>
      </div>
      <Pager v-if="!dataChanged" ref="pager" :pageSize="pageSize" :page="curPage" :total="total" @setPage="gotoPage" @setRowNum="changeRowNum" />
    </div>
</template>

<script>
  import Apiservice from "../../service/apiservice"
  import Pager from '@/components/List/Pager'

    export default {
      name: "LostThings",
      data() {
          return{
            curPage:1,//当前页
            total:0,//总共页数
            pageSize:20,//每页记录数
            dataChanged:false
          }
      },
      components:{
       "Pager":Pager
      },
      methods:{
          gotoPage(page){

         },
         changeRowNum(pageSize){

         },
        refresh(){//用于刷新组件，需手动调用
              this.dataChanged = true
              this.$nextTick(() => {
                this.dataChanged = false
                })
           }
      }
    }
</script>

<style scoped>
  #lost_things {
    margin-bottom: 20px;
  }
  .contain_title {
    font-size: 20px;
    font-weight: bold
  }
  .banner {
    position: relative;
    height: 125px;
    border-bottom: 1px solid #ebebeb;
    padding: 15px 15px 20px 195px;
  }
  .picture {
    position: absolute;
    left: 15px;
    top: 20px;
    width: 160px;
    height: 120px;
  }
</style>
