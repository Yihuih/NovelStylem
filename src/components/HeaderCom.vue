<script>

</script>
<template>
    <div class="header">
        <div class="icon">
            <img src="@/assets/icon.png" alt="爱看小说" title="爱看小说">
        </div>
        <div class="title">小说阅读平台</div>
        <div class="nav"></div>
        <div class="search"></div>
        <div class="option">
            <div>
                <router-link to="/login">登录</router-link>
            </div>
            <div>
                <router-link to="/register">注册</router-link>
            </div>
        </div>
        <div class="personal">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <span></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    display: flex;
    color: #e3d6d6;
    background: #000;
    opacity: 0.9;
    z-index: 999;
}
.header>div{
    height: 100%;
    margin: 0 10px;
}
.icon img{
    margin-top: 10px;
    margin-left: 35px;
    height: 70%;
}

.option{
    position: absolute;
    right: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px); /* 背景模糊 */
}
.option>div{
    margin: 0 15px;
    border-radius: 5px;
    overflow: hidden;
}

.option a{
    display: block;
    color: #fffafa;
    opacity: 1;
    width: 100%;
    height: 100%;
    padding: 0 15px;
}

.option a:hover{
    color: #12ebd9;
}
.option a:active{
    color: #eb1228;
}
.option>div:hover{
    background-color: #3956d9;
}

</style>