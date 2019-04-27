<template>
  <div id="add_notice">
    <h1>发布公告</h1>
    <div class="add_from">
    <div>
      <p><label>标题</label></p>
      <p>
        <input v-model="NoticeForm.title" class="from_input" type="text" placeholder="请输入标题">
      </p>
      <p><label>详细内容</label></p>
      <p>
        <textarea v-model="NoticeForm.content" class="from_textarea"  placeholder="请输入公告具体内容"></textarea>
      <p>
        <button class="submit" @click="submit">提交信息</button>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
  import Apiservice from "../../service/apiservice"
    export default {
        name: "AddNotice",
      data(){
        return {
          NoticeForm: {
            title: '',
            content: ''
          },
        }
      },
      methods:{
          submit(){
            if (this.NoticeForm.title === '' || this.NoticeForm.content === '') {
          alert('标题或内容不能为空!');
        } else {
          Apiservice.notice.post_notice(this.NoticeForm.title,this.NoticeForm.content)
            .then(data => {
              console.log(data);
              alert('发布成功');
            })
            .catch(error => {
            alert('发布失败');
            console.log(error);
          });
        }
          }
      }
    }
</script>

<style scoped>
#add_notice {
    width: 50%;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    box-shadow: 0 6px 12px 0 rgba(1,1,1,.1);
    margin: 10px auto 10px auto;
    padding: 2px;
}
  .add_from {
    text-align: left;
    margin: 0px 30px 2px 30px;
    width:75%;
    padding: 20px;
  }
    .from_input{
    width: 100%;
    height: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
  }
  .from_textarea {
    width: 100%;
    height: 400px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
  }
  .submit {
    background: coral;
    width: 100%;
    height: 40px;
    color: #ffff;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 6px;
  }
</style>
