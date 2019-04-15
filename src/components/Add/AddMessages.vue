<template>
  <div id="add">
    <h1>发布信息</h1>
    <div class="add_from">
    <div>
      <p><label>发布的类型</label></p>
      <p>
        <select class="from_select">
          <option value="0">请选择</option>
          <option>失物招领</option>
          <option>寻物启事</option>
          <option>寻人启事</option>
        </select>
      </p>
      <p><label>标题</label></p>
      <p>
        <input class="from_input" type="text" placeholder="请输入标题">
      </p>
      <p><label>联系人</label></p>
      <p>
        <input class="from_input" type="text" placeholder="请输入联系人姓名">
      </p>
      <p><label>联系方式</label></p>
      <p>
        <input class="from_input" type="tel" placeholder="请输入手机号码">
      </p>
      <p><label>详细内容</label></p>
      <p>
        <textarea class="from_textarea"  placeholder="请具体描述何时何地何事以及物品具体情况"></textarea>
      </p><label>上传图片</label><p>
      <p>
        <input type="file">
      </p>
      <p>
        <button class="submit" type="submit">提交信息</button>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AddMessages"
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
