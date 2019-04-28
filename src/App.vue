<template>
  <v-app id="app">
    <Header></Header>
    <router-view></router-view>
    <div class="clear"></div>
    <Footer></Footer>

  </v-app>
</template>

<script>
  import Footer from "./components/Home/Footer";
  import Header from "./components/Home/Header";
  import AddNotice from "./components/Add/AddNotice";
export default {
  name: 'App',
  components: {
    AddNotice,
    Header,
    Footer,
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
