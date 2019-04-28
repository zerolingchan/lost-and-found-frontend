<template>
  <div id="login">
    <div class="login_title">
      <router-link to="Login" class="router-link-active">登录</router-link>
      |
      <router-link to="Register" class="router-link-active">注册</router-link>
    </div>
    <div class="login-form">
      <div>
        <input v-model="loginForm.login" type="text" class="login_input" placeholder="请输入账号" name="login">
      </div>
      <div>
        <input v-model="loginForm.password" type="password" class="login_input" placeholder="请输入密码" name="password">
      </div>
      <div>
        <button class="login_button" @click="login">登录</button>
      </div>
      <div>
        <router-link to="/">
          <button class="login_button" >游客访问</button>
        </router-link>
      </div>
    </div>

    <v-snackbar v-model="snackbar_visible"
      absolute
      :right="true"
      :top="true"
      :timeout="3000"
    >
    {{ snackbar_message }}
    </v-snackbar>
  </div>
</template>

<script>
  import Apiservice from "../service/apiservice"
  import {setUser} from '../util'
  import Tips from '@/components/common/tips'

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: '12345',
          password: '456789'
        },
        snackbar_visible: false,
        snackbar_message: 'login success',
      }
    },
    methods: {
      login() {
        if (this.loginForm.login === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空!');
        } else {
          Apiservice.user.login(this.loginForm.login, this.loginForm.password)
            .then(data => {
              this.showMessage('登陆成功')
              setUser(data)
              // timeout等待一下，不然snackbar显示不了
              setTimeout(() => this.$router.push('/'), 1000)
            })
            .catch(error => {
              if (error.code == 401)
                this.showMessage('用户名或密码不正确')
              else
                this.showMessage('登陆失败')
          });
        }
      },
      /** show dialog with message */
      showMessage(message) {
        console.log('showMessage')
        this.snackbar_message = message
        this.snackbar_visible = true
      },
      test () {
        this.showMessage('just test')
      }
    },
    components: {
      Tips
    }
  }
</script>

<style scoped>
  #login {
    width: 340px;
    height: 300px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1, 1, 1, .1);
    box-shadow: 0 6px 12px 0 rgba(1, 1, 1, .1);
    margin: 100px auto 100px auto;
  }

  .login_title {
    height: 30px;
    color: coral;
    font-size: larger;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
  }

  .login-form {
    width: 231px;
    height: 240px;
    display: inline-block;
    border-radius: 6px;
  }

  .login_input {
    width: 230px;
    height: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-radius: 6px;
  }

  .login_button {
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
