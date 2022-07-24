<template>
  <el-menu
    class="header-container"
    router
    :default-active="route.path"
    mode="horizontal"
    :ellipsis="false"
  >
    <div class="logo-container"><a>Lary Tech</a></div>
    <div class="content">
      <el-menu-item disabled index="/">主頁</el-menu-item>
      <el-menu-item disabled index="/about">關於</el-menu-item>
      <el-menu-item disabled index="/products">產品</el-menu-item>
      <el-menu-item v-if="!user" index="/sign-in">登入</el-menu-item>
      <el-menu-item v-if="user" index="/profile">帳戶</el-menu-item>
      <el-switch
        class="theme-toggler-content"
        style="--el-switch-on-color: var(--el-color-primary-light-9)"
        size="large"
        v-model="isDark"
        @change="toggleDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
      ></el-switch>
    </div>
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "@/stores";
import { useRoute } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import { Moon, Sunny } from "@element-plus/icons-vue";

const store = useStore();
const user = computed(() => store.user);

const route = useRoute();

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style>
.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.header-container .logo-container {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.header-container .content {
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.theme-toggler-content {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color var(--el-transition-duration),
    background-color var(--el-transition-duration-fast);

  display: flex;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  align-items: center;
}
</style>
