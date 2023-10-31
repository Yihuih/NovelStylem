<!-- 首页 -->
<script setup>
import CoverPage from '../components/CoverPage.vue';
import BannerPage from '../components/BannerPage.vue';
</script>

<template>
    <HeaderCom />
    <div class="banner">
        <BannerPage />
    </div>
    <div class="booklist">
        <CoverPage />
    </div>
</template>

<style scoped>

.banner {
    padding-top: 70px;
    width: 100%;
    height: 300px;
    background-color: antiquewhite;
   
}

.booklist {
    display: flex;
    padding-left: 20px;
    position: absolute;
    top: 400px;
    width: 100%;
    height: 200px;
}
</style>