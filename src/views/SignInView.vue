<template>
  <TwoFormLayout>
    <template #hero>登入或註冊帳號</template>
    <template #first>
      <SignIn />
    </template>
    <template #second>
      <SignUp />
    </template>
  </TwoFormLayout>
</template>

<script setup>
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import TwoFormLayout from "@/layouts/TwoFormLayout.vue";
</script>
