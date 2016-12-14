<template>
    <div id="app">
        <el-row class="header">
            <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" class="title">❤&nbsp七嘴八舌</el-menu-item>
                <el-menu-item index="2">首页</el-menu-item>
                <el-menu-item index="3" class="link">个人中心</el-menu-item>
            </el-menu>
            <div class="line"></div>
        </el-row>
        <el-row class="container">
            <el-col :span="8">
                <h5>带 icon</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row class="footer">
                <p class="footerMsg">Copyright © 2016 ShenYuanYuan.当前呈现版本 1.1.0 16.12.12</p>
        </el-row>
    </div>
</template>
<script>
require('../static/swiper-3.4.0.min.css')

 export default {
   components: {},
   mounted () {
     console.log('挂载好了')
     console.log(mySwiper)
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
 }
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0 0;
  padding: 0 0;
}
#app {
  width: 100%;
  height: 100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.header , .footer {
  height: 9%;
}
.footer {
  line-height: 50px;
}
.container {
  height: 82%;
}
.link {
  float: right !important;
}
.footerMsg {
  height: 100%;
  margin: 0 0;
  font-family: Microsoft YaHei;
  font-size: 80%;
  text-align: center;
}
.title {
  font-family: Microsoft YaHei;
  font-size: 120%;
  color: white !important;
}
.logo {
  width: 100px;
  height: 100px
}
.swiper-container{
  width: 100%;
  height: 100%;
}
.imgload {
  height: 100%;
}

</style>
