<!-- 轮播图 -->
<script setup>
import { reactive } from 'vue'
// 模拟图片数据
const imgurls=reactive([
    'http://img.faloo.com/Novel/332x470/1/1053/001053494.jpg',
    'http://img.faloo.com/Novel/332x470/1/1065/001065460.jpg',
    'http://img.faloo.com/Novel/332x470/1/1029/001029551.jpg',
    'http://img.faloo.com/Novel/332x470/1/1065/001065792.jpg',
    'http://img.faloo.com/Novel/332x470/1/1056/001056323.jpg',
    'http://img.faloo.com/Novel/332x470/1/1054/001054770.jpg'
])
</script>
<template>
    <el-carousel :interval="3000" type="card" width="auto">
        <el-carousel-item v-for="item in imgurls" :key="item" class="banner_cover">
            <div>
                <a href="#">
                    <img :src="item">
                </a>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>
<style scoped>

.el-carousel__item h3 {
    color: #1463cb;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.banner_cover {
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.banner_cover img {
    border-radius: 10px;
    width: calc(100% + 40px);
    margin-right: 70px;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}
.banner_cover img:hover{
    transform: scale(1.1);
}
</style>