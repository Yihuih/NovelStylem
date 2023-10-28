<script setup>
    import { reactive , ref } from 'vue'
    import userApi from '../../api/user';
    import { ElMessage } from 'element-plus'

    import router from '../router';
    // 表单数据
    const form=reactive({
        uname:'',
        nickname:'',
        password:'',
        birthday:'',
        hobby:[],
        email:'',
        tel:''
    })
    // 验证规则
    const formRef=ref('')

    // 自定义校验规则
    // 电话号码验证
    const checkTel=(rule,value,callback)=>{
        const telRegex=/^1\d{10}/

        if(telRegex.test(value)){
            console.log('验证通过');
            callback()
        }else{
            console.log('checkPassword');
            callback(new Error('请输入11位电话号码'));
        }
    }
    // 密码验证
    const checkPassword=(rule,value,callback)=>{
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,12}$/

        if(passwordRegex.test(value)){
            callback()
        }else{
            callback(new Error('请输入包含大小写字母、数字的5-12位密码'))
        }

    }
    // 邮箱验证
    const checkEmail=(rule,value,callback)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(value)){
            callback()
        }else{
            callback(new Error('请输入正确的邮箱'))
        }

    }

    const rules=reactive({
        uname: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 5, max: 10, message: '账号长度在5-10之间', trigger: 'blur' },
        ],
        password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: checkPassword, message: '请输入包含大小写字母、数字的5-12位密码', trigger: 'blur' },
        ],
        tel:[
            { required: true, message: '请输入正确的手机号', trigger: 'blur' },
            { validator: checkTel, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { validator: checkEmail, message: '请输入正确的邮箱', trigger: 'blur' }
        ],
    })

    const register=()=>{   
        formRef.value.validate((valid)=>{
            if(valid){
                // 表单验证通过，可以执行提交操作
                console.log('验证通过');
                // 发送请求
                userApi.post('/register',form)
                .then(result=>{
                    console.log(result);
                    if(result.issucced){
                        ElMessage({
                            message:result.msg,
                            type:'success'
                        })
                        setTimeout(()=>{
                            router.push('/login')
                        },1500)
                    }else{
                        ElMessage({
                            message:result.msg,
                            type:'error'
                        })
                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
        })
    }
</script>

<template>
    <HeaderCom/>
    <div class="background">
        <div class="regbox">
            <div class="title">注册界面</div>
            <div class="form_box">
                <el-form 
                    :model="form"
                    :rules="rules"
                    ref="formRef"
                    >
                    <el-form-item label="账 号:" prop="uname">
                        <el-input placeholder="请输入账号" v-model="form.uname"></el-input>
                    </el-form-item>
                    <el-form-item label="昵 称:" prop="nickname">
                        <el-input placeholder="请输入昵称" v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="密 码:" prop="password">
                        <el-input placeholder="请输入密码"  v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="生 日:">
                        <el-date-picker
                            type="date"
                            v-model="form.birthday"
                            label="Pick a date"
                            placeholder="请选择日期"
                            style="width: 100%"
                        />
                    </el-form-item>
                    <el-form-item label="爱 好:" >
                        <el-checkbox-group v-model="form.hobby" prop="type">
                            <el-checkbox label="传统玄幻" name="type" />
                            <el-checkbox label="都市爱情" name="type" />
                            <el-checkbox label="历史人文" name="type" />
                            <el-checkbox label="青春爱情" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="电 话:"  prop="tel">
                        <el-input  v-model="form.tel" ></el-input></el-form-item>
                    <el-form-item label="邮 箱:"  prop="email">
                        <el-input  v-model="form.email"></el-input></el-form-item>
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
.background{
  position: relative;
  width: 100%;
  min-height: 120vh;
  background: url('@/assets/regbgc.jpg') no-repeat;
  background-size: cover;
  text-align: center;
}
.regbox{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 415px;
    height: 475px;
    background-color: #e2efee;
    opacity: 0.8;
    border-radius: 15px;
    overflow: hidden;
    /* background: #1bf02a; */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(0, 0, 0, 0.3);
}
.regbox>div{
    margin: 0;
}
.regbox>div:first-child{
    margin: 10px 0;
}
.title{
    font-size: 24px;
    font-weight: 700;
}
.form_box{
    width: calc(100% - 40px);
    
}
:deep(.el-form-item__label){
    color: #f66400;
    opacity: 1;
}

/* 按钮居中  */
:deep(.el-form-item__content){
    justify-content: center;
}

/* 爱好的多选盒子 */
:deep(.el-checkbox-group){
    /* float: left; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
}
/* 按钮 */
:deep(.el-button){
    width: 100%;
}
</style>