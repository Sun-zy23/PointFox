<template>
<div id="Harder">
  <div id="sysTitle">
    <span>{{ message }}</span>
  </div>
  <div id="sysFunction">
      <router-link to="/login">
    <el-button>系统登陆</el-button>
    </router-link>
    <router-link to="/work">
    <el-button>工作中心</el-button>
    </router-link>
    <router-link to="/student">
    <el-button>学生信息</el-button>
    </router-link>
    <router-link to="/book">
    <el-button>图书信息</el-button>
    </router-link>
    <router-link to="/cnnode">
     <el-button>node 论坛</el-button>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            message: "江西软件职业技术大学-图书管理系统"
        }
    }
};

</script>

<style>
* {
            margin: 0;
            padding: 0;
        }

        .el-header {
            background-color: gold;
        }
        #sysTitle {
            /* background-color: green; */
            display: inline-block;
            height: 60px;
            line-height: 60px;
            color:rgb(75, 75, 240);
            font-size: 24px;
            font-weight: border;
        }

        #sysFunction {
            /* background-color: purple; */
            display: inline-block;
            height: 60px;
            float: right;
        }
        #sysFunction>.el-button {
            background-color: #41b6ec;
            color: rgb(75, 75, 240);
            border-color: #41b6ec;
            margin-top: 10px;
        }
</style>