<template>
  <el-form>
    <h1>個人資料</h1>
    <br />
    <el-form-item label="使用者名稱">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="信箱">
      <el-input disabled v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="種類">
      <el-tag>{{ form.type }}</el-tag>
    </el-form-item>
    <el-button @click="updateProfile(form)">儲存設定</el-button>
  </el-form>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { getProfile, updateProfile } from "@/api/profile";

const form = reactive({
  name: "",
  email: "",
  type: "",
});

onMounted(() => {
  const fetchData = async () => {
    const user = await getProfile();

    if (user == null) return;

    form.name = user.name;
    form.email = user.email;
    form.type = user.type;
  };
  fetchData();
});
</script>
