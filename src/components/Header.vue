<template>
    <header id="header">
      <div class="header_title">&nbsp;Lost&Found </div>
      <div class="tab">失物招领 | 寻物启事 | 寻人启事 | 帮助 | <router-link to="Login" >个人中心</router-link></div>
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
  height: 100px;
  color: #ffff;

  margin: 20px;
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
</style>
