<script setup>
import { reactive, ref } from 'vue'
import userApi from '../../api/user';
import { ElMessage } from 'element-plus'

import router from '../router';
// 表单数据
const form = reactive({
    uname: '',
    nickname: '',
    password: '',
    birthday: '',
    hobby: [],
    email: '',
    tel: '',
    // 保存上传图片的url
    header: ''
})

const formRef = ref('')

// 自定义校验规则
// 电话号码验证
const checkTel = (rule, value, callback) => {
    const telRegex = /^1\d{10}/

    if (telRegex.test(value)) {
        console.log('验证通过');
        callback()
    } else {
        console.log('checkPassword');
        callback(new Error('请输入11位电话号码'));
    }
}
// 密码验证
const checkPassword = (rule, value, callback) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,12}$/

    if (passwordRegex.test(value)) {
        callback()
    } else {
        callback(new Error('请输入包含大小写字母、数字的5-12位密码'))
    }

}
// 邮箱验证
const checkEmail = (rule, value, callback) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) {
        callback()
    } else {
        callback(new Error('请输入正确的邮箱'))
    }

}

// 验证规则
const rules = reactive({
    uname: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 5, max: 10, message: '账号长度在5-10之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { validator: checkPassword, message: '请输入包含大小写字母、数字的5-12位密码', trigger: 'blur' },
    ],
    tel: [
        { required: true, message: '请输入正确的手机号', trigger: 'blur' },
        { validator: checkTel, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { validator: checkEmail, message: '请输入正确的邮箱', trigger: 'blur' }
    ],
})

// 判断用户名是否重复
const checkUname = async (uname) => {
    // 无效的账号不用去验证
    if (uname === '' || uname.length < 5 || uname.length > 12) {
        return 0
    }
    const queryParam = {
        uname
    }
    const response = await userApi.get('/search', { params: queryParam })
    if (response.code !== 200) {
        ElMessage({
            message: response.msg,
            type: 'error'
        })
    }
}


// 注册函数
const register = () => {
    console.log(form.header);
    formRef.value.validate((valid) => {
        if (valid) {
            // 表单验证通过，可以执行提交操作
            console.log('验证通过');
            // 发送请求
            userApi.post('/register', form)
                .then(result => {
                    console.log(result);
                    if (result.issucced) {
                        ElMessage({
                            message: result.msg,
                            type: 'success'
                        })
                        setTimeout(() => {
                            router.push('/login')
                        }, 1500)
                    } else {
                        ElMessage({
                            message: result.msg,
                            type: 'error'
                        })
                    }
                }).catch(error => {
                    console.log(error);
                })
        }
    })
}

//处理头像上传成功
const headerurl = ref('http://127.0.0.1:5000/static/userHeader/默认头像.jpg')
const handleUploadSuccess = (response, file) => {
    console.log(response, file);
    if (response.code === 200) {
        headerurl.value = 'http://127.0.0.1:5000' + response.data.url
    } else {
        ElMessage({
            message: response.msg,
            type: 'error'
        })
    }
}

const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('图片格式不正确,请上传jpeg格式')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('请上传小于2MB的图片')
        return false
    }
    return true
}
</script>

<template>
    <HeaderCom />
    <div class="background">
        <div class="regbox">
            <div class="title">注册界面</div>
            <div class="form_box">
                <el-form :model="form" :rules="rules" ref="formRef">
                    <el-form-item label="账 号:" prop="uname">
                        <el-input placeholder="请输入账号" v-model="form.uname" @blur="checkUname(form.uname)"></el-input>
                    </el-form-item>
                    <el-form-item label="昵 称:" prop="nickname">
                        <el-input placeholder="请输入昵称" v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="密 码:" prop="password">
                        <el-input placeholder="请输入密码" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="生 日:">
                        <el-date-picker type="date" v-model="form.birthday" label="Pick a date" placeholder="请选择日期"
                            style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="爱 好:">
                        <el-checkbox-group v-model="form.hobby" prop="type">
                            <el-checkbox label="传统玄幻" name="type" />
                            <el-checkbox label="都市爱情" name="type" />
                            <el-checkbox label="历史人文" name="type" />
                            <el-checkbox label="青春爱情" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="头像:">
                        <el-upload class="avatar-uploader" action="http://127.0.0.1:5000/user/upload"
                            list-type="picture-card" :show-file-list="false" ref="fileHeaderInput"
                            :on-success="handleUploadSuccess" :before-upload="beforeAvatarUpload"
                            :data="{ uname: form.uname }">
                            <el-icon>
                                <Plus />
                            </el-icon>
                            <div>
                                <img class="el-upload-list__item-thumbnai headershow" :src="headerurl" alt="" />
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="电 话:" prop="tel">
                        <el-input v-model="form.tel"></el-input></el-form-item>
                    <el-form-item label="邮 箱:" prop="email">
                        <el-input v-model="form.email"></el-input></el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="register">
                            注册
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.background {
    position: relative;
    width: 100%;
    min-height: 150vh;
    /* background: url('@/assets/bgc.jpg') no-repeat;
  background-size: cover; */
    background-image: radial-gradient(rgb(56, 15, 57) 5%, rgb(65, 65, 3)5%, rgb(4, 43, 57) 60%);
    text-align: center;
}

.regbox {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 415px;
    height: auto;
    background-image: linear-gradient(to right, #b93fb9, #7df9d8);
    /* opacity: 0.8; */
    border-radius: 15px;
    overflow: hidden;
    /* background: #1bf02a; */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}

.regbox>div {
    margin: 0;
}

.regbox>div:first-child {
    margin: 10px 0;
}

.title {
    font-size: 24px;
    font-weight: 700;
}

.form_box {
    width: calc(100% - 40px);

}

:deep(.el-form-item__label) {
    color: #f0edeb;
    opacity: 1;
}

/* 按钮居中  */
:deep(.el-form-item__content) {
    justify-content: center;
}

/* 爱好的多选盒子 */
:deep(.el-checkbox-group) {
    /* float: left; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
}

/* 按钮 */
:deep(.el-button) {
    width: 100%;
}

/* 上传头像的样式 */
.headershow {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
:deep(.el-upload--picture-card){
    position: relative;
}
</style>