<template>
  <el-container>
    <el-header style="width: 100vw; padding: 0">
      <NavMenu />
    </el-header>
    <el-main style="width: 100vw; padding: 0">
      <router-view />
    </el-main>
    <el-footer style="width: 100vw; position: fixed; left: 0; bottom: 0"
      ><a>Copyright © 2022 Lary Technology Co.</a></el-footer
    >
  </el-container>
</template>

<script setup>
import NavMenu from "./components/NavMenu.vue";
</script>

<style scoped></style>
