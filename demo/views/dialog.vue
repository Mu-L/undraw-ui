<template>
  <el-button type="primary" link @click="visible = true">Click to open Dialog</el-button>
  <u-dialog v-model="visible" center title="title" width="500">
    <template #footer>
      <div class="footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确定</el-button>
      </div>
    </template>
  </u-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'

defineOptions({
  name: 'dialogVue'
})

const visible = ref(false)
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
