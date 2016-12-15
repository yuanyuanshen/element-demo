<template>
    <div class="pic_content">
        <div class="sub_title">{{msg}}</div>
        <el-row>
            <el-col :span="8" v-for="img_item in img_items" class="pic_block">
                <div class="pic"><img :src="img_item.src"></div>
                <div class="block like">
                    <el-rate v-model="img_item.value"></el-rate>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.pic_content {
    margin-top: 4%;
}
.sub_title {
    color: white;
    font-family: Microsoft YaHei;
    font-size: 30px;
}
.sub_pic {
    margin-top: 4%;
}
.pic img {
    width: 250px;
    height: 200px;
    margin: 2% 2%;
}
.like {
    background: black;
    margin: 2% 2%;
}
.pic {
    text-align: center;
    background: white;
    margin: 2% 2%;
}
</style>
<script>

    export default{
        data(){
            return{
                'value1': null,
                'msg':'五滋粤菜',
                'img_items':[
                    {value:null,src:'http://tupian.qqjay.com/u/2014/0809/1_22817_1.jpg'},
                    {value:null,src:'http://tupian.qqjay.com/u/2014/0809/1_22817_3.jpg'},
                    {value:null,src:'http://tupian.qqjay.com/u/2014/0809/1_22817_6.jpg'}
                ]
            }
        },
    }

</script>
