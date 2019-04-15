<template>
  <div class="article-box">
    <ArticleContent :article-detail="articleDetail"></ArticleContent>
    <Like :like-count="articleDetail.like_count" :is-like="articleDetail.isLike"></Like>
    <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
    <Comment :comment-list="commentList" :user="user"></Comment>
    <Scrolltop></Scrolltop>
  </div>
</template>

<script>
import ArticleContent from './content.vue'
import Comment from './comment.vue'
import Prenext from './prenext.vue'
import Like from './like.vue'
import Scrolltop from './Scrolltop.vue'
import { mapState,mapActions } from 'vuex'
export default {
  components: { ArticleContent,Like,Prenext,Comment,Scrolltop},
  computed: {
    ...mapState({
      articleDetail: ({articleDetail}) => articleDetail.item,
      user: ({auth}) => auth.user,
      nextArticle: ({prenextArticle}) => prenextArticle.next,
      prevArticle: ({prenextArticle}) => prenextArticle.prev,
      commentList: ({commentList}) => commentList.items,
      options: ({options}) => options.item,
      aid: ({route}) => route.params.aid
    })
  },
  created () {
    this.initData()
  },
  watch: {
    '$route': 'initData'
  },
  methods:{
    ...mapActions([
      'getArticleDetail',
      'getPrenext',
      'getCommentList',
      'toggleLike',
      'addComment',
      'addReply'
    ]),
    initData(){
      const aid = this.$route.params.aid
      this.getPrenext(aid)
      this.getCommentList(aid)
      this.getArticleDetail(aid, this.user)
    },

    handleToggleLike(){
      if(this.user){
        this.toggleLike(this.$route.params.aid)
      }
    },
    handleSubmitComment(content){
      if(this.user && content.trim() !== ''){
        this.addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleShowReply(content){
      //判断是否登录.未登录则弹出登录框.
      if(this.user && content.trim() !== ''){
        this.addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleSubmitReply(cid,content){
      if(this.user && content.trim() !== ''){
        this.addReply({cid:cid,data:{content:content}})
      }else{
        this.openLoginModal()
      }
    }
  }
}
</script>

<style scoped>

</style>
