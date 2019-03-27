<template>
    <div id="contain">
      <div class="messages">
        <p class="contain_title">发布信息</p>
        <router-link to="AddMessages" @click.native="flushCom"><button class="release_button">发布失物招领</button></router-link>
        <router-link to="AddMessages"><button class="release_button">发布寻物启事</button></router-link>
        <router-link to="AddMessages"><button class="release_button">发布寻人启事</button></router-link>
      </div>
      <div class="notice">
        <p class="contain_title">系统公告</p>
        <div class="item">
          <ul>公告1</ul>
          <ul>公告2</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">失物招领</p>
        <div class="item">
          <ul>物品标题1</ul>
          <ul>物品标题2</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">寻物启事</p>
        <div class="item">
          <ul>物品标题1</ul>
          <ul>物品标题2</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">寻人启事</p>
        <div class="item">
          <ul>寻人标题1</ul>
          <ul>寻人标题2</ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
	        flushCom:function(){
	          //router是路由实例,例如:var router = new Router({})
        //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
	        this.$router.go(0);  
	        }
        }
    }
</script>

<style scoped>
#contain {
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    margin: 20px;
  }
  .container {
    width: 33.33%;
    float: left;
    height: 300px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin-bottom: 10px;
  }
   .notice {
    height: 200px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin: 1px;
     padding-top: 2px;
  }
  .item {
    text-align: left;
  }
  .contain_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .messages {
    height: 150px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin: 1px;
    padding-top: 2px;
  }
  .release_button {
    background: coral;
    width: 23%;
    height: 35px;
    color: #ffff;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 15px;
    border-radius: 6px;
  }

</style>
