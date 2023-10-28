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
  function login(){
    if (password.value===''||uname.value==='') {
      ElMessage({
        message:'请输入用户名、密码',
        type:'error'
      })
    }else{
      userapi.post('/login',{'uname':uname.value,'password':password.value})
      .then(value=>{
        console.log(value);
        if(value.issucced===true){
          ElMessage({
            message:value.msg,
            type:'success'
          })
          router.push('/index')
        }else{
          ElMessage({
            message:value.msg,
            type:'error'
          })
        }
      })
      .catch(error=>{
        console.log(error.code);
      })
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
          <el-input type="text" v-model.trim="uname" placeholder="请输入账户" class="custom-input" clearable>
            <template #prepend>账户:</template>
          </el-input>
        </div>
        <div>
          <el-input type="password" v-model="password" placeholder="请输入密码" class="custom-input" clearable show-password>
            <template #prepend>密码:</template>
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
  background: url('@/assets/bgc.jpg') no-repeat;
  background-size: cover;
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
  /* background: #1bf02a; */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}
.box>div{
  width:50%;
  /* border: #1b57f0 1px solid; */
  height: 100%;
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
  color: #ffffff;
  --el-input-placeholder-color:#ffffff;
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
  background: url('@/assets/novel.jpg') no-repeat;
  background-size: cover;
  display:flex;
  justify-content: center;
  align-items: center;
}
.messagebox{
  line-height: 100%;
  color: transparent;
  background-image: linear-gradient(to right, #409096, #ececec);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* 使文字透明，让渐变背景显示出来 */
  font-size: 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>