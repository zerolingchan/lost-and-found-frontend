<template>
  <div id="register">
    <div class="register_title">
      <router-link to="Register" class="router-link-active">注册</router-link>|
      <router-link to="Login" class="router-link-active">登录</router-link>
    </div>
    <div class="register-form">
      <div>
        <input
          v-model="registerForm.login"
          type="text"
          class="register_input"
          placeholder="请输入账号"
          name="login"
        >
        <input
          v-model="registerForm.nickname"
          type="text"
          class="register_input"
          placeholder="请输入昵称"
          name="nickname"
        >
        <input
          v-model="registerForm.password"
          type="password"
          class="register_input"
          placeholder="请输入密码"
          name="password"
        >
        <input
          v-model="registerForm.email"
          type="text"
          class="register_input"
          placeholder="请输入邮箱"
          name="email"
        >
      </div>
      <div>
        <button class="register_button" @click="register">注册</button>
      </div>
    </div>

    <v-snackbar
      v-model="snackbar_visible"
      absolute
      :right="true"
      :top="true"
      :timeout="3000"
    >{{ snackbar_message }}</v-snackbar>
  </div>
</template>

<script>
import Apiservice from "../service/apiservice";
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        login: "",
        nickname: "",
        password: "",
        email: ''
      },
      snackbar_visible: false,
      snackbar_message: ""
    };
  },
  methods: {
    register() {
      let _this = this;
      if (
        this.registerForm.login === "" ||
        this.registerForm.nickname === "" ||
        this.registerForm.password === ""
      ) {
        alert("账号、昵称、密码不能为空!");
      } else {
        Apiservice.user
          .register(
            this.registerForm.login,
            this.registerForm.nickname,
            this.registerForm.password,
            this.registerForm.email
          )
          .then(res => {
            this.showMessage('注册成功')
              setTimeout(() => this.$router.push('/Login'), 1000)
          })
          .catch(error => {
            this.showMessage('注册失败')
            console.log(error);
          });
      }
    },
    /** show dialog with message */
    showMessage(message) {
      console.log("showMessage");
      this.snackbar_message = message;
      this.snackbar_visible = true;
    }
  }
};
</script>

<style scoped>
#register {
  width: 340px;
  height: 370px;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 0 6px 12px 0 rgba(1, 1, 1, 0.1);
  box-shadow: 0 6px 12px 0 rgba(1, 1, 1, 0.1);
  margin: 100px auto 100px auto;
}
.register_title {
  height: 30px;
  color: coral;
  font-size: larger;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
}
.register-form {
  width: 231px;
  height: 240px;
  display: inline-block;
  border-radius: 6px;
}
.register_input {
  width: 230px;
  height: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-radius: 6px;
}
.register_button {
  background: coral;
  width: 230px;
  height: 35px;
  color: #ffff;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 15px;
  border-radius: 6px;
}
.router-link-active {
  text-decoration: none;
  color: coral;
}
</style>
