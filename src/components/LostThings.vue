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
      <div class="page">
        <ul>
          <li class="li_class">末页</li>
          <li class="li_class">下一页</li>
          <li class="li_class">上一页</li>
          <li class="li_class">首页</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Apiservice from "../service/apiservice"

    export default {
        name: "LostThings",
      data() {
          return
      },
      methods:{

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
  .page {
    padding: 5px;
    background-color: #fff;
    text-align: center;
    vertical-align: center;
  }
  .li_class {
    display: inline;
    float: right;
    margin: 3px;
    padding: 1px;
  }
</style>
