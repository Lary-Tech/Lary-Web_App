<template>
  <div class="container">
    <div class="hero-section">
      <span class="center hero"><slot name="hero"></slot></span>
    </div>
    <el-row>
      <el-col :xs="24" :sm="12">
        <div class="wrap">
          <div class="hero2-section">
            <span class="center hero2">登入</span>
          </div>
          <slot name="first"></slot>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="wrap">
          <div class="hero2-section">
            <span class="center hero2">註冊</span>
          </div>
          <slot name="second"></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  display: block;
  padding-left: 4vw;
  padding-right: 4vw;
}
.wrap {
  border-radius: 20px;
  margin: 2vw;
  padding: 40px;
  background-color: var(--el-bg-color);
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
  display: flex;
  margin-bottom: 2vh;
}
.hero2-section {
  display: flex;
  margin-bottom: 20px;
}
.center {
  margin: auto;
}
</style>
