<template>
  <div class="dashboard-container">
    <div class="dashboard-text" style="align-items: center">欢迎: {{ name }}</div>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      name: 'hello git',
      value: new Date()
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
