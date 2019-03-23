<template>
  <div id="content">
    <ul>
      <li v-for="item in listItem" :key="item.id" class="list-item">
        <img :src=item.listImg class="item-logo">
        <div class="item-content">
          <h2 class="item-title">{{item.listTitle}}</h2>
          <p class="item-info clearboth">
            <span class="item-post">{{item.listPost}}</span>
            <span class="item-emolument">{{item.listEmolument}}</span>
          </p>
          <p class="item-time">{{item.listTime}}</p>
        </div>
      </li>
      <li class="list-more" v-on:click="loadMore">加载更多</li>
      <div class="conFooter">
        <p>©2015 lagou.com, all right reserved </p>
        <!-- <div class="conFooter-item">
          <span class="conFooter-phone">移动版&nbsp;·&nbsp;</span>
          <span class="conFooter-active">电脑版&nbsp;·&nbsp;</span>
          <a href="#/OneNew">回顶部</a>
        </div> -->
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OneNew',
  data () {
    return {
      listItem: []
    }
  },
  created () {
    this.submitForm()
  },
  methods: {
    submitForm () {
      let self = this
      this.$ajax({
        methods: 'get',
        url: 'http://localhost:8080/static/json/list.json'
      }).then(function (res) {
        if (res.status === 200 && res.data) {
          self.listItem = res.data.listData
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    loadMore () {
      let self = this
      this.$ajax({
        methods: 'get',
        url: 'http://localhost:8080/static/json/listLoad.json'
      }).then(function (res) {
        if (res.status === 200 && res.data) {
          self.listItem = self.listItem.concat(res.data.listLoad)
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list-item{
  padding: 14px;
  border-bottom: 1px solid #e8e8e8;
}
.item-logo{
  display: inline-block;
  width: 60px;
  height: 60px;
  float: left;
}
.item-content{
  margin-left: 70px;
  height: 62px;
  text-align: left;
  .item-title{
    font-size: 1.6rem;
    margin-bottom: 6px;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-info{
    margin-bottom: 6px;
    height: 15px;
    line-height: 15px;
    width: 100%;
    .item-post{
      font-size: 1.2rem;
      width: 60%;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-emolument{
      color: #00b38a;
      font-size: 1.6rem;
      float: right;
    }
  }
  .item-time{
    font-size: 1rem;
    color: #888;
  }
}
.list-more{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 1.5rem;
  background-color: #fafafa;
  margin-bottom: 30px;
}
.conFooter{
  padding-bottom: 40px;
}
</style>
