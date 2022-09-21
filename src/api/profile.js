import axios from "axios";
import { getIdTokenPromise } from "./user.js";
import { ElMessage, ElLoading } from "element-plus";

const url = import.meta.env.VITE_API_URL;

export const getProfile = async () => {
  ElLoading.service({
    lock: true,
    text: "取得個人資料中...",
  });
  const result = await __getProfile();
  ElLoading.service().close();
  return result;
};

const __getProfile = async () => {
  const headers = {
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };
  try {
    const response = await axios.get(url + "/profile", { headers: headers });
    ElMessage({
      message: "取得個人資料成功！",
      type: "success",
    });
    console.log("get profile success", response.data);
    return response.data;
  } catch (error) {
    console.log("get profile error", error);
    ElMessage.error("有錯誤～請聯絡管理人員！");
    return null;
  }
};

export const updateProfile = async (profile) => {
  ElLoading.service({
    lock: true,
    text: "儲存個人資料中...",
  });
  const result = await __updateProfile(profile);
  ElLoading.service().close();
  return result;
};

const __updateProfile = async (profile) => {
  const headers = {
    Authorization: `Bearer ${await getIdTokenPromise()}`,
  };
  try {
    const response = await axios.post(url + "/profile", profile, {
      headers: headers,
    });
    ElMessage({
      message: "儲存個人資料成功！",
      type: "success",
    });
    console.log("update profile success", response.data);
    return response.data;
  } catch (error) {
    console.log("save profile error", error);
    ElMessage.error("有錯誤～請聯絡管理人員！");
    return null;
  }
};
