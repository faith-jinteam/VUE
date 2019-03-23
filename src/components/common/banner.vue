<template>
  <div class='block'>
    <h2>Element-ui</h2>
    <span class='demonstration'>Click 指示器触发</span>
    <el-carousel trigger='click' height='150px' arrow='always'>
      <el-carousel-item v-for='item in imgList' :key='item.id'>
        <img :src=item.imgUrl />
      </el-carousel-item>
    </el-carousel>
    <div class="HomeFooter">
      <h2>个人仿写的Simple</h2>
      <p>持续完善中...</p>
      <p>1. 移动端触摸以及滑动事件未添加</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {id: 1, imgUrl: 'http://localhost:8080/static/img/banner1.png'},
        {id: 2, imgUrl: 'http://localhost:8080/static/img/banner2.jpg'},
        {id: 3, imgUrl: 'http://localhost:8080/static/img/banner3.png'},
        {id: 4, imgUrl: 'http://localhost:8080/static/img/banner4.jpg'}
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.el-carousel__item img {
  width: 100%;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.HomeFooter{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>
