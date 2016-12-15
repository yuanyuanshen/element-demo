<template>
    <div id="content">
        <el-row class="header">
            <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <router-link class="el-menu-item title" to="">❤&nbsp七嘴八舌</router-link>
                <router-link class="el-menu-item link" to="">关于我们</router-link>
                <router-link class="el-menu-item link" to="/mainPage">注册</router-link>
                <router-link class="el-menu-item link" to="/mainPage">登陆</router-link>
            </el-menu>
            <div class="line"></div>
        </el-row>
        <el-row class="container">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s2560x1600c5/g5/M00/09/08/ChMkJ1Z9AyqINPLvAEuCktgw9dQAAGlOQLeLcAAS4Kq772.jpg"
                             alt="首页banner图片01">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/09/08/ChMkJ1Z9AyeISrl2ABWa7_V3yu8AAGlOQCt3csAFZsH471.jpg"
                             alt="首页banner图片02">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s1440x900c5/g5/M00/04/04/ChMkJlbLwaiIRzwYAAwIfSSOi20AALP6wD6m5IADAiV468.jpg"
                             alt="首页banner图片01">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s2560x1600c5/g5/M00/03/01/ChMkJlZvetiIMBzfABCNHgw9Bz8AAGLpQHs19UAEI02488.jpg"
                             alt="首页banner图片01">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/03/01/ChMkJlZveDOIN1E6AAPfOkp89f8AAGLlwOnp1EAA99S610.jpg"
                             alt="首页banner图片01">
                    </div>
                    <div class="swiper-slide">
                        <img class="imgload"
                             src="http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/01/0E/ChMkJldM_muISzxeAAqpoJKWMRcAASFOwDtgXoACqm4350.jpg"
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
    import Swiper from '../static/swiper-3.4.0.min.js'
    import '../static/swiper-3.4.0.min.css'
    import '../assets/main.css'

    //require ('./static/swiper-3.4.0.min.css')
    //require ('./assets/main.css')

     export default {
       components: {},
       mounted () {
         console.log('挂载好了')
         var mySwiper = new Swiper('.swiper-container', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           autoplay : 3000,
           speed:300,
           paginationClickable :true,
           effect: 'coverflow',
           grabCursor: true,
           centeredSlides: true,
           slidesPerView: 'auto',
           coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
           }
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
