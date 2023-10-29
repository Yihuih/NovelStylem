<script setup>
  import {ref} from 'vue'
  import { ElMessage } from 'element-plus'
  import userapi from '../../api/user'
  import router from '../router/index'


  const uname=ref('')
  const password=ref('')
  const isloading=ref(false)
  const isAgree=ref(true)
  const message=ref('Welcome back!')
  // 登录函数
  async function login() {
    isloading.value=true
    if (password.value === '' || uname.value === '') {
      ElMessage({
        message: '请输入用户名、密码',
        type: 'error',
      });
      isloading.value=false
    } 
    else {
      try {
        const response = await userapi.post('/login', {
          'uname': uname.value,
          'password': password.value,
        });
        isloading.value=false
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
          message:error.code,
          type:'error'
        })
        isloading.value=false
      }
    }
}
</script>

<template>
  <HeaderCom/>
  <div class="container">
    <div class="box">
      <div class="left">
        <div>
          <strong style="color: aliceblue;">登录界面</strong>
        </div>
        <div> 
          <el-input type="text" v-model.trim="uname" placeholder="请输入账户" class="custom-input" @keyup.enter="isAgree?login():none" clearable>
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </div>
        <div>
          <el-input type="password" v-model="password" placeholder="请输入密码" class="custom-input" @keyup.enter="isAgree?login():none" clearable show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
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
          <div><router-link to="/register">管理员模式</router-link></div>
          <div><router-link to="/register">注册账号</router-link></div>
        </div>
      </div>
      <div class="right">
        <div class="messagebox">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container{
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background: url('@/assets/bgc.jpg') no-repeat;
  background-size: 100% 100%; */
  background-image: radial-gradient(rgb(56, 15, 57) 5%, rgb(65, 65, 3)5%, rgb(4, 43, 57) 60%);
  text-align: center;
}
.container .box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;


  width: 600px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  background-image: linear-gradient(to right, #b93fb9 , #7df9d8);
  /* background: #1bf02a; */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}
.box>div{
  width:50%;
  /* border: #1b57f0 1px solid; */
  height: 100%;
  border-right: solid 1px #ececec;
}
.left{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
:deep(.el-button>span){
  margin: 0 40px;
}
:deep(.el-input-group__prepend){
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
  --el-input-placeholder-color:#9ecac7;
}

.left>div{
  margin: 0 20px;
}

.login_boxfooter{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login_boxfooter>div a{
  color: #ffffff;
}
.login_boxfooter>div a:hover{
  color: #12ebd9;
}
.login_boxfooter>div a:active{
  color: #eb1228;
}
.right{
  /* background: url('@/assets/novel.jpg') no-repeat; */
  /* background-size: cover; */
  display:flex;
  justify-content: center;
  align-items: center;
}
.messagebox{
  transform: rotate(45deg);
  line-height: 100%;
  color: transparent;
  background-image: linear-gradient(to right, #32c632, #d21d1d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* 使文字透明，让渐变背景显示出来 */
  font-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>