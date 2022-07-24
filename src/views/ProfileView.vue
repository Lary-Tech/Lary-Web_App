<template>
  <el-button @click="signOut">登出</el-button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { signUserOut } from "@/api/user";

const router = useRouter();

const signOut = async () => {
  signUserOut();
  router.push("/sign-in");
};
</script>
