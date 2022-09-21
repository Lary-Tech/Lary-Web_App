<template>
  <div class="container mx-auto">
    <el-row>
      <el-col :xs="24" :md="8">
        <el-card class="aside">
          <slot name="aside" />
        </el-card>
      </el-col>
      <el-col :xs="24" :md="16">
        <el-card class="main">
          <slot name="main" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.aside {
  border-radius: 20px;
  margin: 20px;
  height: 60vh;
}
.main {
  border-radius: 20px;
  margin: auto;
  min-height: 75vh;
  height: 100%;
}
</style>
