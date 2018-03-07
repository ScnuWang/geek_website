<template>
  <!--ref字段要和:model的值相等-->
  <el-form ref="loginform"  :model="loginform" :rules="rules"  class="login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username" >
      <el-input type="text" v-model="loginform.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginform.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('loginform')" >登录</el-button>
      <el-button  @click="resetForm('loginform')" >重置</el-button>
    </el-form-item>
    还没有账号？<a href="/registry">去注册</a>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        loginform: {
          username: '',
          password: ''
        },
        rules: {// 表单校验  : 查看官方表单示例（http://element.eleme.io/#/zh-CN/component/form）的表单验证
          username:[{required:true,message:'请输入用户名',trigger:'blur'}],//这里怎么使用的？
          password:[{min:6,max:32,message:'长度在6到32之间',trigger:'blur'}]
        },
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交表单到后台!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(form) {
        this.$refs[form].resetFields();
      }
    }
  }
</script>
<style >
  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
