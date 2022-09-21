<template>
  <ProfileLayout>
    <template #aside>
      <el-button @click="activeForm = 'profile'">個人資料</el-button>
      <el-button @click="activeForm = 'auto'">自動模式設定</el-button>
      <!-- <el-button @click="activeForm = 'manual'">手動模式設定</el-button> -->
      <div style="height: 20px"></div>
      <el-button @click="signOut">登出</el-button>
    </template>
    <template #main>
      <ProfileForm v-if="activeForm == 'profile'" />
      <ConfigForm v-if="activeForm == 'auto'" />
      <!-- <ManualForm v-if="activeForm == 'manual'" /> -->
    </template>
  </ProfileLayout>
</template>

<script setup>
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import ConfigForm from "../components/ConfigForm.vue";
import ProfileForm from "../components/ProfileForm.vue";
// import ManualForm from "../components/ManualForm.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { signUserOut } from "@/api/user";
// import { testCors } from "@/api/config";

const router = useRouter();

const signOut = async () => {
  signUserOut();
  router.push("/sign-in");
};

const activeForm = ref("profile");
// testCors();
</script>
