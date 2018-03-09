<template>
  <el-container >
    <el-header style="text-align: right; font-size: 18px;background-color: #fff;color: #409EFF" >

      <span style="margin-right: 50%">极客视界众筹产品数据库</span>

      <i class="el-icon-bell" style="margin-right: 2%"></i>

      <el-dropdown style="margin-right: 2%">
        <i class="el-icon-setting" style="color: #409EFF"></i>
        <el-dropdown-menu slot="dropdown" style="text-align: center">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <span style="margin-right: 5%">王小虎</span>

    </el-header>

    <el-container>
      <el-aside width="200px" >
        <el-menu  router activeTextColor="#409EFF" style="text-align: center">

          <el-menu-item index="/index">
            <span slot="title">首页</span>
          </el-menu-item>


          <el-menu-item index="/home/website">
            <i class="el-icon-menu"></i>
            <span slot="title">众筹平台</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span >众筹产品</span>
            </template>
            <el-menu-item index="/home/productlist" >产品列表</el-menu-item>
            <el-menu-item index="/home/productanalysis">产品分析</el-menu-item>
          </el-submenu>

          <el-menu-item index="3" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <i class="el-icon-edit"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>

          <el-menu-item index="5" disabled>
            <i class="el-icon-edit"></i>
            <span slot="title">支付系统</span>
          </el-menu-item>

          <el-menu-item index="6" disabled>
            <i class="el-icon-edit"></i>
            <span slot="title">系统管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!--内容展示-->
      <el-main>
        <!--<el-table :data="tableData">-->
          <!--<el-table-column prop="date" label="日期" width="140">-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="name" label="姓名" width="120">-->
          <!--</el-table-column>-->
          <!--<el-table-column prop="address" label="地址">-->
          <!--</el-table-column>-->
        <!--</el-table>-->
        <router-view ></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
