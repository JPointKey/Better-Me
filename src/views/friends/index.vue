<template>
<div>
  <h1>好友列表开发中....</h1>
  <el-input v-model="username" suffix-icon="el-icon-search" placeholder="用户名"></el-input>
  <el-button type="primary">查找</el-button>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[5, 10, 20, 50]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400">
  </el-pagination>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
