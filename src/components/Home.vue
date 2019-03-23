<template>
  <div id="Home">
    <my-Header></my-Header>
    <router-view/>
    <my-Footer></my-Footer>
  </div>
</template>

<script>
import myHeader from './Header'
import myFooter from './Footer'

export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html{
  font-family: Helvetica;
  font-size: 65.5%;
  color: #333333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img,input{
  border: none;
  outline: none;
  padding: 0;
}
ul,li{
  list-style: none;
}
.clearboth:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
