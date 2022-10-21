<template>
  <div class="container mx-auto">
    <el-row>
      <el-col :xs="24" :sm="8">
        <el-card class="aside">
          <slot name="aside" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="16">
        <el-card class="main">
          <slot name="main" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  padding-left: 4vw;
  padding-right: 4vw;
}
.aside {
  border-radius: 20px;
  margin-right: 1vw;
  margin-left: 1vw;
}
.main {
  border-radius: 20px;
  margin: auto;
  min-height: 75vh;
  height: 100%;
}

@media (max-width: 768px) {
  .aside {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 20px;
  }
}
</style>
