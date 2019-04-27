<template>
  <div id="add">
    <h1>发布信息</h1>
    <div class="add_from">
    <div>
      <p><label>发布的类型</label></p>
      <p>
        <select v-model="PostForm.type" class="from_select">
          <option disabled value="">请选择</option>
          <option value="found">失物招领</option>
          <option value="lost">寻物启事</option>
          <option value="people">寻人启事</option>
        </select>
      </p>
      <p><label>标题</label></p>
      <p>
        <input v-model="PostForm.title" class="from_input" type="text" placeholder="请输入标题">
      </p>
      <p><label>联系人</label></p>
      <p>
        <input v-model="PostForm.contact" class="from_input" type="text" placeholder="请输入联系人姓名">
      </p>
      <p><label>联系方式</label></p>
      <p>
        <input v-model="PostForm.phone" class="from_input" type="tel" placeholder="请输入手机号码">
      </p>
      <p><label>详细内容</label></p>
      <p>
        <textarea v-model="PostForm.content" class="from_textarea"  placeholder="请具体描述何时何地何事以及物品具体情况"></textarea>
      </p><label>上传图片</label><p>
      <p>
        <input @change="uploadPicture" type="file">
      </p>
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
        name: "AddArticles",
      data(){
          return{
            PostForm:{
              type:'',
              title:'',
              contact:'',
              phone:'',
              content:'',
              picture:''
            },
          }
      },
      methods:{
          uploadPicture(e){
            let formData = new FormData();
            formData.append('file', e.target.files[0]);
            let url = this.$store.state.path + "api/tools/handle_upload_file";
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
             };
            this.$axios.post(url,formData, config).then(function (response) {
              console.log(response.data)
           })
          },
          submit(){
            if (this.PostForm.title === '' || this.PostForm.contact === ''|| this.PostForm.phone === ''|| this.PostForm.content === '') {
          alert('请填写完全部内容!');
        } else {
              //待修改接口，为统一的
          Apiservice.post.get_lost_post()
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
#add {
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
  .from_select{
    width: 100%;
    height: 35px;
    border-radius: 5px;
  }
  .from_textarea {
    width: 100%;
    height: 100px;
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
