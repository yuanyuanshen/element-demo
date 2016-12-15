<template>
    <div id="content">
        <el-row class="header">
            <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1" class="title">❤&nbsp七嘴八舌</el-menu-item>
                <router-link class="el-menu-item" to="/home">首页</router-link>
                <router-link class="el-menu-item link" to="">个人中心</router-link>
            </el-menu>
            <div class="line"></div>
        </el-row>
        <el-row class="sub_container">
            <el-col :span="4" class="menu">
                <el-menu default-active="2" router class="menu" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="/mainPage/submit"><i class="el-icon-star-on"></i>现在下单</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-star-on"></i>辣香川菜</template>
                        <el-menu-item-group>
                            <template slot="title">代表地？</template>
                            <el-menu-item index="/mainPage/Chuan_sichuan">四川</el-menu-item>
                            <el-menu-item index="">成都</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="名菜">
                            <el-menu-item index="/mainPage/Chuan_xiaochi">小吃</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/mainPage/yuecai"><i class="el-icon-star-on"></i>五滋粤菜</el-menu-item>
                    <el-menu-item index="/mainPage/zhecai"><i class="el-icon-star-on"></i>脆爽浙菜</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" class="right_content">
                <div class="tabs">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
        <el-row class="footer">
                <p class="footerMsg">Copyright © 2016 ShenYuanYuan.当前呈现版本 1.1.0 16.12.12</p>
        </el-row>
    </div>
</template>


<script>
require('../assets/main.css')

 export default {
   components: {},
   mounted () {
     console.log('挂载好了')
   },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
 }
</script>

<style>
.sub_container {
    width: 100%;
    height: 82%;
}
.right_content {
    width: 100%;
    height: 100%;
    background: url("http://desk.fd.zol-img.com.cn/t_s1440x900c5/g5/M00/01/0E/ChMkJ1dM_meIOd3-AAmh9tDS1PQAASFOgJLbx0ACaIO795.jpg");
}
.menu {
    height: 100%;
}
.tabs {
    width: 100%;
    height: 100%;
}
</style>
