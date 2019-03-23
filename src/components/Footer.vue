<template>
  <div id="footer">
    <nav>
      <router-link to="/Home">首页</router-link>
      <router-link to="/HelloWorld">HelloWorld页</router-link>
      <router-link to="/OneNew">列表页</router-link>
      <router-link to="/Datatable">表格页</router-link>
    </nav>
  </div>
</template>

<style lang="less" scoped>
#footer{
  height: 50px;
}
nav{
  display:flex;
  width: 100%;
  height: 50px;
  border-top: 1px solid #e8e8e8;
  background-color: #f6f6f6;
  color: #c2cfcc;
  position: fixed;
  bottom: 0;
  left: 0;
}
nav a{
  display:inline-block;
  flex:1;
  color:#c2cfcc;
  font-weight:bold;
  font-size:16px;
  text-decoration:none;
  line-height:50px;
  padding: 0 5px;
  // text-transform: uppercase;
  // background-color:transparent;

  // -webkit-transition:background-color 0.25s;
  // -moz-transition:background-color 0.25s;
  // transition:background-color 0.25s;
}
nav a:first-child{
  border-radius:2px 0 0 2px;
}
nav a:last-child{
  border-radius:0 2px 2px 0;
}
.router-link-exact-active.router-link-active{
  color: #00b38a;
  background-color: #e7f3f0;
}
</style>
