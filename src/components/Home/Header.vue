<template>
  <header id="header">
    <div class="header_title">
      <router-link to="/" class="router-link-active">&nbsp;Lost&Found</router-link>
    </div>
    <div class="tab">
      <router-link to="LostThings" class="router-link-active">失物招领</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="FindThings" class="router-link-active">寻物启事</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="FindPeople" class="router-link-active">寻人启事</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="AdminCenter" class="router-link-active">个人中心</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        placeholder="请输入搜索内容"
        class="input"
        @keyup.enter="search"
      >
      <a href="javascript:" class="search-btn" v-on:@click="search">搜索</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link v-if="!this.is_login" to="Login">
        <button class="login_button">登录</button>
      </router-link>
      <router-link v-if="!this.is_login" to="Register">
        <button class="login_button">注册</button>
      </router-link>
    </div>
  </header>
</template>

<script>
import { isLogin, delUser } from "@/util";
export default {
  name: "Header",
  data() {
    return {
      is_login: false
    };
  },
  mounted() {
    this.refreshLogin();
  },
  computed: {},
  methods: {
    search() {},
    refreshLogin() {
      console.log("刷新登陆");
      this.is_login = isLogin();
    }
  },
  watch: {
    $route(to, from) {
      console.log("路由变化");
      this.refreshLogin();
    }
  }
};
</script>

<style scoped>
#header {
  background: coral;
  text-align: left;
  width: 100%;
  height: 100px;
  color: #ffff;
  float: top;
}
.header_title {
  line-height: 60px;
  font-size: 40px;
  font-weight: bold;
  font-family: KaiTi;
}
.tab {
  text-align: center;
  line-height: 30px;
}
.login_button {
  background: coral;
  width: 70px;
  height: 35px;
  color: #ffff;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 2px;
  border-radius: 6px;
}
.router-link-active {
  text-decoration: none;
  color: #ffff;
}
.input {
  width: 20%;
  height: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
}
.search-btn {
  color: #ffff;
  text-decoration: none;
}
</style>
