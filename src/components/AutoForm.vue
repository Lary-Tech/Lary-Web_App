<template>
  <h1>HP</h1>
  <el-row :gutter="20">
    <span>HP小於</span>
    <el-input style="width: 50px" v-model="input1" max="90" min="20" />
    <span>％，使用按鍵</span>
    <el-select style="width: 30px" v-model="input1">
      <el-option label="5" value="5" />
      <el-option label="6" value="6" />
      <el-option label="7" value="7" />
      <el-option label="8" value="8" />
    </el-select>
    <span>，不在安全區執行（可放置回村卷軸）</span>
  </el-row>
  <h1>MP</h1>
  <el-row :gutter="20">
    <span>MP小於</span>
    <el-input style="width: 50px" v-model="input1" max="90" min="20" />
    <span>％，使用按鍵</span>
    <el-select style="width: 30px" v-model="input2">
      <el-option label="5" value="5" />
      <el-option label="6" value="6" />
      <el-option label="7" value="7" />
      <el-option label="8" value="8" />
    </el-select>
    <span>，不在安全區執行（可放置回村卷軸）</span>
  </el-row>
  <h1>自動模式設定</h1>
  <el-row :gutter="20">
    <span>MP小於</span>
    <el-input style="width: 50px" v-model="input1" />
    <span>％，HP小於</span>
    <el-input style="width: 50px" v-model="input1" />
    <span>％，使用按鍵</span>
    <el-input style="width: 30px" v-model="input2" />
    <span>，不在安全區執行（可放置回村卷軸）</span>
  </el-row>
</template>

<script setup>
import { ref } from "vue";

const input1 = ref("");
const input2 = ref("");
</script>

<style scoped>
span {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
