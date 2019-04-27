<template>
    <div id="contain">
      <div class="messages">
        <p class="contain_title">发布信息</p>
        <router-link to="AddArticles"><button class="release_button">发布失物招领</button></router-link>
        <router-link to="AddArticles"><button class="release_button">发布寻物启事</button></router-link>
        <router-link to="AddArticles"><button class="release_button">发布寻人启事</button></router-link>
      </div>
      <div class="notice">
        <p class="contain_title">系统公告</p>
        <div class="item">
          <ul v-for="item in NoticeList" @click="getNoticeId()">{{item.title}}</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">失物招领</p>
        <div class="item">
          <ul v-for="item in LostList" @click="getLostId()">{{item.title}}</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">寻物启事</p>
        <div class="item">
          <ul v-for="item in FoundList" @click="getFoundId">{{item.title}}</ul>
        </div>
      </div>
      <div class="container">
        <p class="contain_title">寻人启事</p>
        <div class="item">
          <ul v-for="item in PeopleList" @click="getPeopleId">{{item.title}}</ul>
        </div>
      </div>
    </div>
</template>

<script>
  import Apiservice from "../../service/apiservice"

    export default {
        name: "Home",
      data(){
          return{
            NoticeList:[],
            LostList:[],
            FoundList:[],
            PeopleList:[]
          }
      },
      created:function () {
        this.getNoticeList();
        this.getLostList();
        this.getFoundList();
        this.getPeopleList();
      },
        methods:{
          //获取公告列表
          getNoticeList:function () {
            Apiservice.notice.get_all_notice()
            .then(data => {
              this.NoticeList = this.data;
              console.log(data);
            })
            .catch(error => {
              console.log(error);
          });
          },
          //获取失物招领列表
          getLostList:function () {
            Apiservice.post.get_lost_post()
            .then(data => {
              this.LostList = this.data;
              console.log(data);
            })
            .catch(error => {
              console.log(error);
          });
          },
          //获取寻物启事列表
          getFoundList:function () {
            Apiservice.post.get_found_post()
            .then(data => {
              this.FoundList = this.data;
              console.log(data);
            })
            .catch(error => {
              console.log(error);
          });
          },
          //获取寻人启事列表
          getPeopleList:function () {
            Apiservice.post.get_people_post()
            .then(data => {
              this.PeopleList = this.data;
              console.log(data);
            })
            .catch(error => {
              console.log(error);
          });
          },
          //点击列表公告进入详情
          getNoticeId(){
            Apiservice.notice.get_notice()
              .then(data => {

              })
          },
          getLostId(){

          },
          getFoundId(){

          },
          getPeopleId(){

          }
        }
    }
</script>

<style scoped>
#contain {
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    margin: 20px;
  }
  .container {
    width: 33.33%;
    float: left;
    height: 300px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin-bottom: 10px;
  }
   .notice {
    height: 200px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin: 1px;
     padding-top: 2px;
  }
  .item {
    text-align: left;
  }
  .contain_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .messages {
    height: 150px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    border:1px;
    margin: 1px;
    padding-top: 2px;
  }
  .release_button {
    background: coral;
    width: 23%;
    height: 35px;
    color: #ffff;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 15px;
    border-radius: 6px;
  }

</style>
