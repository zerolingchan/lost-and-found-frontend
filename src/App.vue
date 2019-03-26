<template>
  <div id="app">
    <Header></Header>
    <div class="clear"></div>
    <Home></Home>
        <!--
    <LostThings></LostThings>
    <FindThings></FindThings>
    <FindPeople></FindPeople>
    <Login></Login>
    <Register></Register>-->
    <div class="clear"></div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import Home from "./components/Home";
  import FindThings from "./components/FindThings";
  import LostThings from "./components/LostThings";
  import FindPeople from "./components/FindPeople";
export default {
  name: 'App',
  components: {
    FindPeople,
    LostThings,
    FindThings,
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
  margin-top: 10px;
}
.clear {
  clear:both;
  height:1px;
  overflow:hidden;
  margin-top:-1px;
}
</style>
