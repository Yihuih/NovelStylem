<!-- 404 界面 -->
<script setup>
import router from '../router';

    const ReturnIndex=()=>{
        router.push('/index')
    }

</script>

<template>
     <el-result
        icon="error"
        title="404"
        sub-title="NOT FOUND!!!"
      >
        <template #extra>
          <el-button type="primary" @click="ReturnIndex">返回首页</el-button>
        </template>
      </el-result>
</template>
<style scoped>

</style>