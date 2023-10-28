<script setup>
import CoverPage from '../components/CoverPage.vue';


// 模拟图片数据
const coverImgs=[
    'http://img.faloo.com/Novel/332x470/1/1053/001053494.jpg',
    'http://img.faloo.com/Novel/332x470/1/1065/001065460.jpg',
    'http://img.faloo.com/Novel/332x470/1/1029/001029551.jpg',
    'http://img.faloo.com/Novel/332x470/1/1065/001065792.jpg',
    'http://img.faloo.com/Novel/332x470/1/1056/001056323.jpg',
    'http://img.faloo.com/Novel/332x470/1/1054/001054770.jpg'
]

</script>

<template>
    <HeaderCom/>
    <div class="header_contain"></div>
    <el-carousel :interval="4000" type="card" width="auto" class="banner">
        <el-carousel-item v-for="item in coverImgs" :key="item" class="banner_cover">
            <div>
                <a href="#">
                    <img :src="item" >
                </a>
            </div>
        </el-carousel-item>
  </el-carousel>
  <div class="index_content">
        <CoverPage/>
  </div>
</template>

<style scoped>
.header{
    opacity: 1;
}
.header_contain{
    background: #000;
    width: 100%;
    height: 80px;
}
.banner{
    background: #4d4242;
}
.el-carousel__item h3 {
color: #475669;
opacity: 0.75;
line-height: 200px;
margin: 0;
text-align: center;
}
.banner_cover{
    display: flex;
    justify-content: center;
}
.banner_cover img{
    border-radius: 10px;
    width: calc(100% + 40px);
    margin-right: 70px;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}
.index_content{
    position: relative;
    width: 500px;
    margin: 20px auto;
}
</style>