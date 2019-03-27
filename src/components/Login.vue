<template>
  <div id="login">
    <div class="login_title">
      <router-link to="Login" class="router-link-active">登录</router-link> |
      <router-link to="Register" class="router-link-active">注册</router-link></div>
    <form class="login-form">
      <div>
        <input v-model="loginForm.username" type="text" class="login_input" placeholder="请输入用户名" name="username">
      </div>
      <div>
        <input v-model="loginForm.password" type="password" class="login_input" placeholder="请输入密码" name="password">
      </div>
      <div>
        <button class="login_button" @click="login">登录</button>
      </div>
      <div>
        <router-link to="Home.vue"><button class="login_button">游客访问</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
      name: "Login",
      data() {
        return {
          loginForm: {
            username: '',
            password: ''
          },
        }
      },
      methods: {
        login() {
          let _this = this;
          if (this.loginForm.username === '' || this.loginForm.password === '') {
            alert('账号或密码不能为空!');
          } else {
            this.axios({
              method: 'post',
              url: '/Login',
              data: _this.loginForm
            }).then(res => {
              console.log(res.data);
              alert('登录成功');
            }).catch(error => {
              alert('账号或密码错误');
              console.log(error);
            });
          }
        }
      }
    }
</script>

<style scoped>
#login {
    width: 340px;
    height: 300px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    margin: 100px auto 100px auto;
  }
  .login_title{
    height: 30px;
    color: coral;
    font-size: larger;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
  .login-form{
    width: 231px;
    height: 240px;
    display: inline-block;
    border-radius: 6px;
  }
  .login_input{
    width: 230px;
    height: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-radius: 6px;
  }
  .login_button{
    background: coral;
    width: 230px;
    height: 35px;
    color: #ffff;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 15px;
    border-radius: 6px;
  }
  .router-link-active{
    text-decoration: none;
    color: coral;
  }
</style>
