<!-- 导航横条 -->
<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref , onMounted } from "vue";


// 屏幕滑动将头部的颜色改变成白色
onMounted(() => {
    // 获取头部元素
    const header = document.querySelector('.header');
    // 定义滚动多少像素后改变颜色
    const scrollThreshold = 50;
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollThreshold) {
            header.classList.add('changBGC')
        } else {
            header.classList.remove('changBGC')
        }
    });
})




// 用户头像的url
const headerURL = ref('http://127.0.0.1:5000/static/userHeader/默认头像.jpg')
// 用户名
const uname = ref('未登录')
const isMenu = ref(false)


// 判断账号是否登录
const isLogin=ref(false)

// 显示个人中心菜单
const showPersonalMenu = () => {
    console.log('111');
    isMenu.value = true
}
// 显示个人中心菜单
const notshowPersonalMenu = () => {
    console.log("222");
    isMenu.value = false
}


// 搜索的关键词
const searchWord = ref('')
</script>
<template>
    <div class="header">
        <div class="icon">
            <img src="@/assets/icon.png" alt="爱看小说" title="爱看小说">
        </div>
        <div class="title">小说阅读平台</div>
        <div class="nav"></div>
        <div class="search">
            <el-input v-model="searchWord" class="w-50 m-2" placeholder="请输入书名或作者名" :prefix-icon="Search" />
        </div>
        <div class="personal" @mouseenter="showPersonalMenu" @mouseleave="notshowPersonalMenu">
            <div>
                <img :src="headerURL" alt="">
            </div>
            <div>
                <span>{{ uname }}</span>

            </div>
            <div class="personal_menu" v-if="isMenu">
                <div>
                    <el-icon style="color: #4900ff;" ><User /></el-icon>
                    <router-link to="/personalCenter" class="item">个人中心</router-link>
                </div>
                <div>
                    <el-icon style="color: #4900ff;" ><CloseBold /></el-icon>
                    <router-link :to="isLogin?'/index':'/login'" class="item">{{ isLogin?'退出登录':'马上登录' }}</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.changBGC{
    opacity: 1;
    background: #000;
}
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    line-height: 80px;
    display: flex;
    align-items: center;
    color: #fefefe;
    z-index: 999;
}

.header>div {
    margin-right: 10px;
}

.icon {
    height: 100%;
}

.icon img {
    margin-top: 10px;
    height: 70%;
}

.header .title {
    font-size: 32px;
    background-image: linear-gradient(to right, #ff00ad, #4900ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    /* 使文字透明，让渐变背景显示出来 */
}


.header .search {
    position: absolute;
    right: 100px;
}

/* 设置搜索框的圆角样式 */
:deep(.el-input__wrapper) {
    border-radius: 15px;
}
/* 设置搜索框的背景 */
:deep(.el-input__wrapper){
    background: none;
}
:deep(.el-input){
    --el-input-border-color: #434eb0;
    /* background: #000; */
}

.personal {
    position: absolute;
    right: 5px;
    width: 80px;
    height: 80%;
    /* background: #000; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
}

.personal>div:first-child {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    height: 70%;
    width: 80%;
    /* background: #e10f0f; */
}

.personal>div:nth-child(2) {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 30%;
    width: 100%;
    /* background-color: #09c9f4; */
}

.personal img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.personal span {
    display: block;
    position: absolute;
    top: 0;
    line-height: 21px;
    color: #c71515;
}

.personal_menu {
    position: absolute;
    top: 60px;
    width: 100%;
    height: 50px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}

.personal_menu>div {
    line-height: 25px;
    padding-left: 5px;
}

.item{
    padding-left: 10px;
}
</style>