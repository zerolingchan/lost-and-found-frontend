<template>
  <div>
    <aside class="asideBox">
        <ul class="ul_li">
          <li v-for="(item,index) in menuList">
            <div class="oneMenu" @click="showToggle(item,index)">
              <span>{{item.name}}</span>
            </div>
            <ul v-show="item.isSubShow" class="ul_li">
              <li v-for="subItem in item.subItems">
                <div class="oneMenuChild">{{subItem.name}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
  </div>
</template>

<script>
    export default {
      name: "CenterSidebar",
      data(){
      return{
        menuList:[
          {
            name:'公告新闻',
            isSubShow:false,
            subItems:[
              {
                name:'添加公告'
              },
              {
                name:'删除公告'
              }
            ]
          },
          {
            name:'失物招领',
            isSubShow:false,
            subItems:[
              {
                name:'新增失物招领'
              },
              {
                name:'修改失物招领'
              },
              {
                name:'删除失物招领'
              },
            ]
          },
          {
            name:'寻物启事',
            isSubShow:false,
            subItems:[
              {
                name:'新增寻物启事'
              },
              {
                name:'修改寻物启事'
              },
              {
                name:'删除寻物启事'
              },
            ]
          },
          {
            name:'寻人启事',
            isSubShow:false,
            subItems:[
              {
                name:'新增寻人启事'
              },
              {
                name:'修改寻人启事'
              },
              {
                name:'删除寻人启事'
              },
            ]
          },
        ]
      }
    },
    methods:{
      // 点击展开折叠菜单事件
      showToggle:function(item,ind){
        this.menuList.forEach(i => {
          // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
          if (i.isSubShow !== this.menuList[ind].isSubShow) {
            i.isSubShow = false;
          }
        });
        item.isSubShow = !item.isSubShow;
        console.log(item.name)
      },

    }

    }
</script>

<style scoped>
  .asideBox{
    height: 100%;
    width: 250px;

    margin-bottom: 5px;
  }
  .oneMenu{
    height: 50px;
    line-height: 50px;
    color: #ffff;
    border-bottom: 1px solid ;
    background: coral;
  }
  .oneMenuChild{
    height: 40px;
    line-height: 40px;
    background: coral;
    border-bottom: 1px solid ;
    color: #ffff;
  }
  .ul_li{
    list-style: none;
  }
</style>
