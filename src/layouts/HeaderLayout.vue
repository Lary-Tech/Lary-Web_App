<template>
  <el-header>
    <div class="header-wrapper">
      <slot />
    </div>
  </el-header>
</template>

<style scopd>
.el-header {
  display: contents;
}
.header-wrapper {
  display: flex;
  padding: 20px;
}
</style>
