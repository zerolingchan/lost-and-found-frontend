<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <Login></Login>
    <Register></Register>
    <Footer></Footer>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import Home from "./components/Home";
export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer,
    Login,
    Register,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
