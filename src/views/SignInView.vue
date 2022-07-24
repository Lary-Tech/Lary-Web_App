<template>
  <div class="container">
    <div class="hero-section">
      <span class="hero">登入或註冊帳號</span>
    </div>
    <el-row>
      <el-col :span="12">
        <div class="wrap" style="border-end: 1px dashed var(--el-border-color)">
          <div class="hero2-section"><span class="hero2">登入</span></div>
          <SignIn />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="wrap">
          <div class="hero2-section">
            <span class="hero2">註冊</span>
          </div>
          <SignUp />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
</script>

<style scoped>
.container {
  display: block;
  padding: 80px;
}
.wrap {
  padding: 0px 40px 40px 40px;
}

.hero {
  font-size: 32px;
  font-weight: 700;
  color: var(--el-text-color-primary);
}

.hero2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--el-text-color-primary);
}

.hero-section {
  margin-bottom: 40px;
}
.hero2-section {
  margin-bottom: 20px;
}
</style>
