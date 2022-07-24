<template>
  <el-form
    :model="form"
    :rules="rules"
    ref="formRef"
    label-position="top"
    label-width="120px"
    class="demo-dynamic"
    size="large"
  >
    <el-form-item prop="email" label="電子郵件">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="密碼" prop="pass">
      <el-input v-model="form.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="確認密碼" prop="checkPass">
      <el-input v-model="form.checkPass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">註冊</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { createUser } from "@/api/user";
import { useRouter } from "vue-router";

const formRef = ref();

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("請輸入密碼"));
  } else if (value.length < 6) {
    callback(new Error("密碼長度不得小於6位"));
  } else {
    if (form.checkPass !== "") {
      if (!formRef.value) return;
      formRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("請確認密碼"));
  } else if (value !== form.pass) {
    callback(new Error("密碼於上方不同"));
  } else {
    callback();
  }
};

const form = reactive({
  email: "",
  pass: "",
  checkPass: "",
});

const rules = reactive({
  email: [
    {
      required: true,
      message: "請輸入電子郵件",
      trigger: "blur",
    },
    {
      type: "email",
      message: "請輸入符合格式的電子郵件",
      trigger: ["blur", "change"],
    },
  ],
  pass: [
    {
      required: true,
      validator: validatePass,
      trigger: "blur",
    },
  ],
  checkPass: [
    {
      required: true,
      validator: validatePass2,
      trigger: "blur",
    },
  ],
});

const router = useRouter();
const submitForm = (formEl) => {
  console.log(formEl);
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!", form.email, form.pass);
      const user = await createUser(form.email, form.pass);
      if (user) {
        router.push("/profile");
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
