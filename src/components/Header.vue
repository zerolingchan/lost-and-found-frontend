<template>
    <header id="header">
      <div class="header_title">&nbsp;Lost&Found </div>
      <button class="login_button">登录</button>
      <div class="tab">
        <router-link to="LostThings" >失物招领</router-link> |
        <router-link to="FindThings" >寻物启事</router-link> |
        <router-link to="FindPeople" >寻人启事</router-link> |
        <router-link to="Login" >个人中心</router-link>
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
</style>
