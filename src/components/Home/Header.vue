<template>
    <header id="header">
      <div class="header_title"><router-link to="/" class="router-link-active">&nbsp;Lost&Found </router-link></div>
      <router-link to="Login" ><button class="login_button">登录</button></router-link>
      <div class="tab">
        <router-link to="LostThings" class="router-link-active">失物招领</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="FindThings" class="router-link-active">寻物启事</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="FindPeople" class="router-link-active">寻人启事</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="AdminCenter" class="router-link-active">个人中心</router-link>
      </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
#header{
  background: coral;
  text-align: left;
  width: 100%;
  height: 100px;
  color: #ffff;
  float: top;
}
  .header_title{
    line-height: 60px;
    font-size: 40px;
    font-weight: bold;
    font-family: KaiTi;
  }
  .tab{
    text-align: center;
    line-height: 30px;
  }
  .login_button{
    background: coral;
    width: 70px;
    height: 35px;
    color: #ffff;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 2px;
    border-radius: 6px;
    float: right;
  }
  .router-link-active{
    text-decoration: none;
    color: #ffff;
  }
</style>
