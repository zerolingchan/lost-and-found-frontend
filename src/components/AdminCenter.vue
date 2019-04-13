<template>
  <div>
    <div class="left">
      <CenterSidebar></CenterSidebar>
    </div>
    <div class="content">
      <p>具体内容</p>
    </div>
  </div>
</template>

<script>
    import CenterSidebar from "./CenterSidebar";
    export default {
        name: "AdminCenter",
        components:{
          CenterSidebar
        }
    }
</script>

<style scoped>
  .content{
    float: right;
    width: 78%;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    margin: 10px;
  }
  .left{
    float: left;
  }
</style>
