<template>
    <div id="content">
        <el-row class="header">
            <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" class="title">❤&nbsp七嘴八舌</el-menu-item>
                <el-menu-item index="2" class="link">关于我们</el-menu-item>
                <el-menu-item index="3" class="link">注册</el-menu-item>
                <!--<el-menu-item index="4" class="link">登陆</el-menu-item>-->
               <router-link class="el-menu-item link" to="/mainPage">登陆</router-link>
            </el-menu>
            <div class="line"></div>
        </el-row>
        <el-row class="container">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg"
                             alt="首页banner图片01">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026905031.jpg"
                             alt="首页banner图片02">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload" src="http://mooc.inxedu.com/images/upload/image/20151026/1446026886181.jpg"
                             alt="首页banner图片01">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </el-row>
        <el-row class="footer">
                <p class="footerMsg">Copyright © 2016 ShenYuanYuan.当前呈现版本 1.1.0 16.12.12</p>
        </el-row>
    </div>
</template>
<script>
import Swiper from './static/swiper-3.4.0.min.js'
import './static/swiper-3.4.0.min.css'
import './assets/main.css'

//require ('./static/swiper-3.4.0.min.css')
//require ('./assets/main.css')

 export default {
   components: {},
   mounted () {
     console.log('挂载好了')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       autoplay : 3000,
       speed:300,
       paginationClickable :true,
     })
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
