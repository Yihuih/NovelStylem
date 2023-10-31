<!-- 用户登录界面 -->

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import userapi from '../../api/user'
import router from '../router/index'

const isloading = ref(false)
const isAgree = ref(true)

// 普通用户
const uname = ref('')
const password = ref('')

// 普通用户登录函数
const login = async () => {
  isloading.value = true
  if (password.value === '' || uname.value === '') {
    ElMessage({
      message: '请输入用户名、密码',
      type: 'error',
    });
    isloading.value = false
  }
  else {
    try {
      const response = await userapi.post('/login', {
        'uname': uname.value,
        'password': password.value,
      });
      isloading.value = false
      console.log(response);

      if (response.issucced === true) {
        ElMessage({
          message: response.msg,
          type: 'success',
        });
        router.push('/index');
      } else {
        ElMessage({
          message: response.msg,
          type: 'error',
        });
      }
    } catch (error) {
      ElMessage({
        message: error.code,
        type: 'error'
      })
      isloading.value = false
    }
  }
}


// true 代表左边遮盖 false 代表右边遮盖
const slideRight = ref(false);
const slideLeft = ref(false);


const slideToRight = () => {
  slideLeft.value = false;
  slideRight.value = true;
};

const slideToLeft = () => {
  slideRight.value = false;
  slideLeft.value = true;
};


// 管理员用户
const rootuname = ref('')
const rootpassword = ref('')

// 管理员用户登录函数
const rootlogin = async () => {
  isloading.value = true
  if (rootuname.value === '' || rootpassword.value === '') {
    ElMessage({
      message: '请输入用户名、密码',
      type: 'error',
    });
    isloading.value = false
  }
  else {
    try {
      const response = await userapi.post('/rootlogin', {
        'rootuname': rootuname.value,
        'rootpassword': rootpassword.value,
      });
      isloading.value = false

      if (response.issucced === true) {
        console.log(response.data);
        ElMessage({
          message: response.msg,
          type: 'success',
        });
        router.push('/backgroundIndex');
      } else {
        ElMessage({
          message: response.msg,
          type: 'error',
        });
      }
    } catch (error) {
      ElMessage({
        message: error.code,
        type: 'error'
      })
      isloading.value = false
    }
  }
}

</script>

<template>
  <HeaderCom />
  <div class="container">
    <div class="box">
      <div class="left">
        <div>
          <strong style="color: aliceblue;">登录界面</strong>
        </div>
        <div>
          <el-input type="text" v-model.trim="uname" placeholder="请输入账户" class="custom-input"
            @keyup.enter="isAgree ? login() : none" clearable>
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div>
          <el-input type="password" v-model="password" placeholder="请输入密码" class="custom-input"
            @keyup.enter="isAgree ? login() : none" clearable show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div>
          <el-checkbox v-model="isAgree">我已阅读并同意用户协议和隐私政策</el-checkbox>
        </div>
        <div>
          <el-button type="primary" :loading="isloading" @click="login" :disabled="!isAgree">登录</el-button>
        </div>
        <div class="login_boxfooter">
          <div class="change_user" @click="slideToLeft">我是管理</div>
          <div><router-link to="/register">注册账号</router-link></div>
        </div>
      </div>
      <div :class="{ 'slide-right': slideRight, 'slide-left': slideLeft }" class="mask"></div>
      <div class="right">
        <div>
          <strong style="color: aliceblue;">管理员登录</strong>
        </div>
        <div>
          <el-input type="text" v-model.trim="rootuname" placeholder="请输入管理员账户" class="custom-input"
            @keyup.enter="isAgree ? rootlogin() : none" clearable>
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div>
          <el-input type="password" v-model="rootpassword" placeholder="请输入管理员密码" class="custom-input"
            @keyup.enter="isAgree ? rootlogin() : none" clearable show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </div>
        <div>
          <el-checkbox v-model="isAgree">我已阅读并同意用户协议和隐私政策</el-checkbox>
        </div>
        <div>
          <el-button type="primary" :loading="isloading" @click="rootlogin" :disabled="!isAgree">登录</el-button>
        </div>
        <div class="login_boxfooter">
          <div class="change_user" @click="slideToRight">我是用户</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background: url('@/assets/bgc.jpg') no-repeat;
  background-size: 100% 100%; */
  background-image: radial-gradient(rgb(56, 15, 57) 5%, rgb(65, 65, 3)5%, rgb(4, 43, 57) 60%);
  text-align: center;
}

.container .box {
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;


  width: 600px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  background-image: linear-gradient(to right, #b93fb9, #5b69e7);
  /* background: #1bf02a; */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}

.box>div {
  width: 50%;
  /* border: #1b57f0 1px solid; */
  height: 100%;

}

/* 左边普通用户登录 */
.left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

:deep(.el-button>span) {
  margin: 0 40px;
}

:deep(.el-input-group__prepend) {
  background: transparent;
  color: #fdfdfd;
  width: 10px;
}

:deep(.el-input__wrapper) {
  background: transparent;
}

:deep(.el-input__inner) {
  padding-left: 5px;
  color: #11dfce;
  --el-input-placeholder-color: #9ecac7;
}

.left>div {
  margin: 0 20px;
}

/* 右边管理员登录 */
.right {
  /* background: url('@/assets/novel.jpg') no-repeat; */
  /* background-size: cover; */
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.right>div {
  margin: 0 20px;
}

/* 两个按钮相互切换 */
.change_user {
  cursor: pointer;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url(../assets/novel.jpg);
  z-index: 999;
  transition: transform 0.7s ease-in;
  /* 添加过渡属性 */
}

.slide-right {
  transform: translateX(0);
  /* 滑动到右边 */
}

.slide-left {
  transform: translateX(-100%);
  /* 滑动到左边 */
}


/* 底部两个按钮 */
.login_boxfooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login_boxfooter>div a {
  color: #ffffff;
}

.login_boxfooter>div {
  color: #ffffff;
}

.login_boxfooter>div:hover {
  color: #12ebd9;
}

.login_boxfooter>div a:hover {
  color: #12ebd9;
}

.login_boxfooter>div a:active {
  color: #eb1228;
}

.messagebox {
  transform: rotate(45deg);
  line-height: 100%;
  background-image: linear-gradient(to right, #32c632, #d21d1d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* 使文字透明，让渐变背景显示出来 */
  font-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}</style>